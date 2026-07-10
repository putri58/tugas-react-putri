/**
 * CrmStore.js — CRM Bus berbasis localStorage
 * ─────────────────────────────────────────────────────────────
 * FITUR BARU (PRD CRM v2):
 * - Konfirmasi transaksi oleh admin → riwayat member bertambah
 * - Poin loyalty otomatis bertambah saat transaksi dikonfirmasi
 * - Rules tier membership: Bronze / Silver / Gold / Platinum
 * ─────────────────────────────────────────────────────────────
 */

// ── KEYS ──────────────────────────────────────────────────────
const KEYS = {
  bookings:     "crm_bookings",
  patients:     "crm_patients",
  transactions: "crm_transactions",
  feedbacks:    "crm_feedbacks",
  inventory:    "crm_inventory",
  memberData:   "crm_member_data",   // data poin & riwayat per username
};

// ── TIER RULES ────────────────────────────────────────────────
export const TIER_RULES = [
  { name: "Bronze",   minPoints: 0,    maxPoints: 199,  color: "#cd7f32", bg: "bg-orange-100",  text: "text-orange-700",  border: "border-orange-300",  gradient: "from-orange-400 to-orange-600"   },
  { name: "Silver",   minPoints: 200,  maxPoints: 499,  color: "#a0a0a0", bg: "bg-slate-100",   text: "text-slate-600",   border: "border-slate-300",   gradient: "from-slate-400 to-slate-600"     },
  { name: "Gold",     minPoints: 500,  maxPoints: 999,  color: "#f59e0b", bg: "bg-amber-100",   text: "text-amber-700",   border: "border-amber-400",   gradient: "from-amber-400 to-yellow-500"    },
  { name: "Platinum", minPoints: 1000, maxPoints: 99999, color: "#6366f1", bg: "bg-indigo-100",  text: "text-indigo-700",  border: "border-indigo-400",  gradient: "from-indigo-500 to-purple-600"  },
];

// Poin yang diperoleh per layanan
export const SERVICE_POINTS = {
  "Konsultasi Medis":     50,
  "Vaksinasi & Steril":   75,
  "Pet Grooming":         40,
  "Rawat Inap (Hospital)": 100,
};

// Harga layanan
const SERVICE_PRICE = {
  "Konsultasi Medis":     150000,
  "Vaksinasi & Steril":   180000,
  "Pet Grooming":         150000,
  "Rawat Inap (Hospital)": 200000,
};

const VAKSIN_SKU = ["INV-002"];

// ── HELPERS ───────────────────────────────────────────────────
function readStore(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function readStoreObj(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function writeStore(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function generateId(prefix) {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

function formatDate(dateStr) {
  if (!dateStr) return "-";
  return new Date(dateStr).toLocaleDateString("id-ID", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });
}

function nowDate() {
  return new Date().toLocaleDateString("id-ID", {
    day: "numeric", month: "long", year: "numeric",
  });
}

/** Hitung tier berdasarkan total poin */
export function getTier(points) {
  for (let i = TIER_RULES.length - 1; i >= 0; i--) {
    if (points >= TIER_RULES[i].minPoints) return TIER_RULES[i];
  }
  return TIER_RULES[0];
}

// ══════════════════════════════════════════════════════════════
// CRM STORE API
// ══════════════════════════════════════════════════════════════
export const crmStore = {

  // ──────────────────────────────────────────────────────────
  // BOOKINGS
  // ──────────────────────────────────────────────────────────
  addBooking(formData) {
    const bookings = readStore(KEYS.bookings);
    const user = JSON.parse(localStorage.getItem("member_session") || "{}");

    const price = SERVICE_PRICE[formData.service] || 0;
    const invoiceNum = String(Date.now()).slice(-4);
    const dateTag = new Date().toISOString().slice(0, 10).replace(/-/g, "");

    const newBooking = {
      id: generateId("BKG"),
      invoice: `INV/${dateTag}/${invoiceNum}`,
      petName: formData.petName,
      petType: formData.petType,
      service: formData.service,
      date: formData.date,
      dateFormatted: formatDate(formData.date),
      timeSlot: formData.timeSlot,
      notes: formData.notes || "-",
      ownerName: user.name || user.username || "Guest",      ownerUsername: user.username || "guest",
      total: price,
      totalFormatted: `Rp ${price.toLocaleString("id-ID")}`,
      points: SERVICE_POINTS[formData.service] || 0,
      status: "Menunggu Konfirmasi",   // status awal
      confirmedAt: null,
      createdAt: nowDate(),
    };

    bookings.unshift(newBooking);
    writeStore(KEYS.bookings, bookings);

    this._upsertPatient(newBooking);
    if (newBooking.service === "Vaksinasi & Steril") {
      this._reduceVaksinStock();
    }

    return newBooking;
  },

  getBookings() {
    return readStore(KEYS.bookings);
  },

  /**
   * Admin mengkonfirmasi booking → status jadi "Dikonfirmasi"
   * → riwayat transaksi member bertambah
   * → poin member bertambah
   * → tier dihitung ulang
   */
  confirmBooking(bookingId) {
    const bookings = readStore(KEYS.bookings);
    const idx = bookings.findIndex((b) => b.id === bookingId);
    if (idx === -1) return;

    const booking = bookings[idx];
    bookings[idx] = {
      ...booking,
      status: "Dikonfirmasi",
      confirmedAt: nowDate(),
    };
    writeStore(KEYS.bookings, bookings);

    // Tambah ke riwayat transaksi member
    this._addMemberTransaction(booking);
    // Tambah poin member
    this._addMemberPoints(booking.ownerUsername, booking.points, booking);
  },

  /** Admin menolak booking */
  rejectBooking(bookingId) {
    const bookings = readStore(KEYS.bookings).map((b) =>
      b.id === bookingId ? { ...b, status: "Ditolak" } : b
    );
    writeStore(KEYS.bookings, bookings);
  },

  /** Hapus booking */
  deleteBooking(bookingId) {
    const bookings = readStore(KEYS.bookings).filter((b) => b.id !== bookingId);
    writeStore(KEYS.bookings, bookings);
  },

  // ──────────────────────────────────────────────────────────
  // MEMBER DATA (Poin + Riwayat Transaksi per user)
  // ──────────────────────────────────────────────────────────

  /** Ambil data member (poin + riwayat) berdasarkan username */
  getMemberData(username) {
    const all = readStoreObj(KEYS.memberData);
    return all[username] || { points: 0, transactions: [] };
  },

  /** Simpan data member */
  _saveMemberData(username, data) {
    const all = readStoreObj(KEYS.memberData);
    all[username] = data;
    writeStore(KEYS.memberData, all);
  },

  /** Tambah poin setelah transaksi dikonfirmasi */
  _addMemberPoints(username, points, booking) {
    if (!username || username === "guest") return;
    const data = this.getMemberData(username);
    data.points = (data.points || 0) + points;
    this._saveMemberData(username, data);
  },

  /** Tambah riwayat transaksi ke data member */
  _addMemberTransaction(booking) {
    const username = booking.ownerUsername;
    if (!username || username === "guest") return;

    const data = this.getMemberData(username);
    if (!data.transactions) data.transactions = [];

    data.transactions.unshift({
      invoice: booking.invoice,
      date: booking.confirmedAt || nowDate(),
      service: `${booking.service} — ${booking.petName} (${booking.petType})`,
      total: booking.totalFormatted,
      points: booking.points,
      status: "Lunas",
    });

    this._saveMemberData(username, data);
  },

  // ──────────────────────────────────────────────────────────
  // PATIENTS
  // ──────────────────────────────────────────────────────────
  _upsertPatient(booking) {
    const patients = readStore(KEYS.patients);
    const exists = patients.find(
      (p) =>
        p.namaPemilik.toLowerCase() === booking.ownerName.toLowerCase() &&
        p.namaHewan.toLowerCase() === booking.petName.toLowerCase()
    );
    if (!exists) {
      patients.unshift({
        id: patients.length + 1,
        namaPemilik: booking.ownerName,
        namaHewan: booking.petName,
        jenisHewan: booking.petType,
        umur: "-",
        diagnosis: `Booking: ${booking.service}`,
        dokter: "Belum Ditentukan",
        status: "Menunggu",
        createdAt: nowDate(),
        bookingId: booking.id,
      });
      writeStore(KEYS.patients, patients);
    }
  },

  getPatients() {
    return readStore(KEYS.patients);
  },

  // ──────────────────────────────────────────────────────────
  // TRANSACTIONS (legacy — untuk DataTransaksi.jsx)
  // ──────────────────────────────────────────────────────────
  getTransactions() {
    return readStore(KEYS.transactions);
  },

  setTransactionStatus(id, status) {
    const updated = readStore(KEYS.transactions).map((tx) =>
      tx.id === id ? { ...tx, status } : tx
    );
    writeStore(KEYS.transactions, updated);
  },

  deleteTransaction(id) {
    writeStore(KEYS.transactions,
      readStore(KEYS.transactions).filter((tx) => tx.id !== id)
    );
  },

  // ──────────────────────────────────────────────────────────
  // INVENTORY
  // ──────────────────────────────────────────────────────────
  _reduceVaksinStock() {
    const inventory = readStore(KEYS.inventory);
    if (!inventory.length) return;
    const updated = inventory.map((item) => {
      if (VAKSIN_SKU.includes(item.id) && item.stock > 0) {
        const s = item.stock - 1;
        return { ...item, stock: s, status: s <= 3 ? "Kritis" : s <= 8 ? "Stok Menipis" : "Aman" };
      }
      return item;
    });
    writeStore(KEYS.inventory, updated);
  },

  saveInventory(arr) { writeStore(KEYS.inventory, arr); },
  getInventory()     { return readStore(KEYS.inventory); },

  // ──────────────────────────────────────────────────────────
  // FEEDBACKS
  // ──────────────────────────────────────────────────────────
  addFeedback(feedbackData) {
    const feedbacks = readStore(KEYS.feedbacks);
    const user = JSON.parse(localStorage.getItem("member_session") || "{}");
    const newFeedback = {
      id: generateId("FB"),
      name: user.name || user.username || "Member",
      service: feedbackData.service,
      rating: feedbackData.rating,
      comment: feedbackData.comment,
      date: nowDate(),
      status: "Pending",
    };
    feedbacks.unshift(newFeedback);
    writeStore(KEYS.feedbacks, feedbacks);
    return newFeedback;
  },

  getFeedbacks()       { return readStore(KEYS.feedbacks); },

  approveFeedback(id) {
    writeStore(KEYS.feedbacks,
      readStore(KEYS.feedbacks).map((fb) =>
        fb.id === id ? { ...fb, status: "Disetujui" } : fb
      )
    );
  },

  deleteFeedback(id) {
    writeStore(KEYS.feedbacks,
      readStore(KEYS.feedbacks).filter((fb) => fb.id !== id)
    );
  },
};
