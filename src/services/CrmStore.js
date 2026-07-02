/**
 * CrmStore.js
 * ─────────────────────────────────────────────
 * Bus data CRM berbasis localStorage.
 * Semua interaksi guest (booking, feedback, register)
 * ditulis ke sini, dan semua halaman admin membaca dari sini.
 * Ini mensimulasikan sinkronisasi real-time antara frontend
 * guest dan dashboard admin tanpa backend tambahan.
 */

// ── KEY CONSTANTS ──────────────────────────────────────────────
const KEYS = {
  bookings: "crm_bookings",
  patients: "crm_patients",
  transactions: "crm_transactions",
  feedbacks: "crm_feedbacks",
  inventory: "crm_inventory",
};

// ── HELPERS ───────────────────────────────────────────────────
function readStore(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeStore(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function generateId(prefix) {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

function formatDate(dateStr) {
  if (!dateStr) return "-";
  const d = new Date(dateStr);
  return d.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function nowDate() {
  return new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ── SERVICE PRICE MAP ──────────────────────────────────────────
const SERVICE_PRICE = {
  "Konsultasi Medis": 150000,
  "Vaksinasi & Steril": 180000,
  "Pet Grooming": 150000,
  "Rawat Inap (Hospital)": 200000,
};

// ── VAKSIN INVENTORY MAP ───────────────────────────────────────
// SKU vaksin yang stoknya berkurang saat ada booking vaksinasi
const VAKSIN_SKU = ["INV-002"]; // Vaksin Rabies (Defensor 3)

// ══════════════════════════════════════════════════════════════
// CRM STORE API
// ══════════════════════════════════════════════════════════════
export const crmStore = {

  // ──────────────────────────────────────────────────────────
  // BOOKINGS
  // ──────────────────────────────────────────────────────────

  /** Simpan booking baru dari BookingPage.jsx */
  addBooking(formData) {
    const bookings = readStore(KEYS.bookings);
    const user = JSON.parse(localStorage.getItem("member_session") || "{}");

    const newBooking = {
      id: generateId("BKG"),
      petName: formData.petName,
      petType: formData.petType,
      service: formData.service,
      date: formData.date,
      dateFormatted: formatDate(formData.date),
      timeSlot: formData.timeSlot,
      notes: formData.notes || "-",
      ownerName: user.namaLengkap || user.username || "Guest",
      ownerUsername: user.username || "guest",
      status: "Terkonfirmasi",
      createdAt: nowDate(),
    };

    bookings.unshift(newBooking);
    writeStore(KEYS.bookings, bookings);

    // Efek samping CRM otomatis:
    this._upsertPatient(newBooking);
    this._createTransaction(newBooking);
    if (newBooking.service === "Vaksinasi & Steril") {
      this._reduceVaksinStock();
    }

    return newBooking;
  },

  /** Ambil semua booking (untuk admin/appointments) */
  getBookings() {
    return readStore(KEYS.bookings);
  },

  // ──────────────────────────────────────────────────────────
  // PATIENTS (Pelanggan)
  // ──────────────────────────────────────────────────────────

  /** Insert/update pasien otomatis saat ada booking baru */
  _upsertPatient(booking) {
    const patients = readStore(KEYS.patients);
    const exists = patients.find(
      (p) =>
        p.namaPemilik.toLowerCase() === booking.ownerName.toLowerCase() &&
        p.namaHewan.toLowerCase() === booking.petName.toLowerCase()
    );

    if (!exists) {
      const newPatient = {
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
      };
      patients.unshift(newPatient);
      writeStore(KEYS.patients, patients);
    }
  },

  /** Ambil semua pasien CRM + dummy bawaan digabung */
  getPatients() {
    return readStore(KEYS.patients);
  },

  // ──────────────────────────────────────────────────────────
  // TRANSACTIONS (DataTransaksi)
  // ──────────────────────────────────────────────────────────

  /** Buat draft invoice otomatis saat booking dikonfirmasi */
  _createTransaction(booking) {
    const transactions = readStore(KEYS.transactions);
    const price = SERVICE_PRICE[booking.service] || 0;
    const invoiceNum = String(transactions.length + 1).padStart(4, "0");
    const dateTag = new Date().toISOString().slice(0, 10).replace(/-/g, "");

    const newTx = {
      id: generateId("TX"),
      invoice: `INV/${dateTag}/${invoiceNum}`,
      name: booking.ownerUsername,
      service: `${booking.service} — ${booking.petName} (${booking.petType})`,
      total: `Rp ${price.toLocaleString("id-ID")}`,
      method: "Belum Dipilih",
      status: "Pending",
      createdAt: nowDate(),
      bookingId: booking.id,
    };

    transactions.unshift(newTx);
    writeStore(KEYS.transactions, transactions);
  },

  /** Ambil semua transaksi CRM */
  getTransactions() {
    return readStore(KEYS.transactions);
  },

  /** Update status transaksi (Lunas/Pending) */
  setTransactionStatus(id, status) {
    const transactions = readStore(KEYS.transactions);
    const updated = transactions.map((tx) =>
      tx.id === id ? { ...tx, status } : tx
    );
    writeStore(KEYS.transactions, updated);
  },

  /** Hapus transaksi */
  deleteTransaction(id) {
    const transactions = readStore(KEYS.transactions)
      .filter((tx) => tx.id !== id);
    writeStore(KEYS.transactions, transactions);
  },

  // ──────────────────────────────────────────────────────────
  // INVENTORY
  // ──────────────────────────────────────────────────────────

  /** Kurangi stok vaksin otomatis saat ada booking vaksinasi */
  _reduceVaksinStock() {
    const inventory = readStore(KEYS.inventory);
    if (inventory.length === 0) return; // Inventory belum diinisialisasi

    const updated = inventory.map((item) => {
      if (VAKSIN_SKU.includes(item.id) && item.stock > 0) {
        const newStock = item.stock - 1;
        return {
          ...item,
          stock: newStock,
          status: newStock <= 3 ? "Kritis" : newStock <= 8 ? "Stok Menipis" : "Aman",
        };
      }
      return item;
    });
    writeStore(KEYS.inventory, updated);
  },

  /** Simpan state inventory dari InventoryManagement ke CRM store */
  saveInventory(inventoryArr) {
    writeStore(KEYS.inventory, inventoryArr);
  },

  /** Ambil inventory dari CRM store (null = belum tersedia) */
  getInventory() {
    return readStore(KEYS.inventory);
  },

  /** Tambah item inventory */
  addInventoryItem(item) {
    const inventory = readStore(KEYS.inventory);
    inventory.push(item);
    writeStore(KEYS.inventory, inventory);
    return inventory;
  },

  // ──────────────────────────────────────────────────────────
  // FEEDBACKS
  // ──────────────────────────────────────────────────────────

  /** Kirim feedback dari FeedbackMember */
  addFeedback(feedbackData) {
    const feedbacks = readStore(KEYS.feedbacks);
    const user = JSON.parse(localStorage.getItem("member_session") || "{}");

    const newFeedback = {
      id: generateId("FB"),
      name: user.namaLengkap || user.username || "Member",
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

  /** Ambil semua feedback */
  getFeedbacks() {
    return readStore(KEYS.feedbacks);
  },

  /** Setujui feedback */
  approveFeedback(id) {
    const feedbacks = readStore(KEYS.feedbacks).map((fb) =>
      fb.id === id ? { ...fb, status: "Disetujui" } : fb
    );
    writeStore(KEYS.feedbacks, feedbacks);
  },

  /** Hapus feedback */
  deleteFeedback(id) {
    const feedbacks = readStore(KEYS.feedbacks).filter((fb) => fb.id !== id);
    writeStore(KEYS.feedbacks, feedbacks);
  },
};
