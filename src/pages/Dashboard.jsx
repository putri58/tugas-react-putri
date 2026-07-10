import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCalendarCheck, FaUsers, FaBoxOpen, FaCommentDots,
  FaCheckCircle, FaClock, FaTimes, FaCoins, FaSync,
  FaArrowUp, FaArrowRight, FaStar, FaPaw, FaExclamationTriangle,
} from "react-icons/fa";
import { crmStore, getTier } from "../services/CrmStore";
import { usersAPI } from "../services/UserApi";

// ── Warna per status booking ──────────────────────────────────
const STATUS_COLOR = {
  "Menunggu Konfirmasi": "bg-amber-100 text-amber-700",
  "Dikonfirmasi":        "bg-green-100 text-green-700",
  "Ditolak":             "bg-red-100 text-red-500",
};

// ── Warna per layanan ─────────────────────────────────────────
const SERVICE_COLOR = {
  "Konsultasi Medis":      "bg-indigo-500",
  "Vaksinasi & Steril":    "bg-yellow-400",
  "Pet Grooming":          "bg-pink-500",
  "Rawat Inap (Hospital)": "bg-blue-600",
};

export default function Dashboard() {
  const navigate = useNavigate();

  // ── Data dari CRM Store ───────────────────────────────────
  const [bookings,  setBookings]  = useState([]);
  const [patients,  setPatients]  = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [users,     setUsers]     = useState([]);
  const [loading,   setLoading]   = useState(false);

  const loadAll = async () => {
    setLoading(true);
    setBookings(crmStore.getBookings());
    setPatients(crmStore.getPatients());
    setFeedbacks(crmStore.getFeedbacks());
    setInventory(crmStore.getInventory());
    try {
      const u = await usersAPI.getAllUsers();
      setUsers(u);
    } catch (_) {}
    setLoading(false);
  };

  useEffect(() => {
    loadAll();
    window.addEventListener("focus", loadAll);
    return () => window.removeEventListener("focus", loadAll);
  }, []);

  // ── Kalkulasi Statistik ───────────────────────────────────
  const totalBookings    = bookings.length;
  const menunggu         = bookings.filter(b => b.status === "Menunggu Konfirmasi").length;
  const dikonfirmasi     = bookings.filter(b => b.status === "Dikonfirmasi").length;
  const totalRevenue     = bookings
    .filter(b => b.status === "Dikonfirmasi")
    .reduce((s, b) => s + (b.total || 0), 0);
  const totalMembers     = users.length;
  const pendingFeedbacks = feedbacks.filter(f => f.status === "Pending").length;
  const criticalStock    = inventory.filter(i => i.status === "Kritis").length;
  const avgRating        = feedbacks.length
    ? (feedbacks.reduce((s, f) => s + f.rating, 0) / feedbacks.length).toFixed(1)
    : "-";

  // ── Breakdown layanan ─────────────────────────────────────
  const serviceBreakdown = bookings.reduce((acc, b) => {
    const key = b.service || "Lainnya";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
  const serviceMax = Math.max(...Object.values(serviceBreakdown), 1);

  // ── 5 booking terbaru ─────────────────────────────────────
  const recentBookings = bookings.slice(0, 5);

  // ── 3 feedback terbaru ───────────────────────────────────
  const recentFeedbacks = feedbacks.slice(0, 3);

  // ── Inventory kritis ─────────────────────────────────────
  const criticalItems = inventory
    .filter(i => i.status === "Kritis" || i.status === "Stok Menipis")
    .slice(0, 4);

  // ── Admin session ─────────────────────────────────────────
  const adminSession = JSON.parse(localStorage.getItem("user_session") || "{}");
  const adminName = adminSession?.username || "Admin";

  return (
    <div className="space-y-6">

      {/* ── Welcome Bar ── */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-800">
            Selamat datang, <span className="text-[#5b5ce2]">{adminName}</span> 👋
          </h1>
          <p className="text-slate-400 text-sm mt-0.5">
            Berikut ringkasan aktivitas klinik Putri Pet Care hari ini.
          </p>
        </div>
        <button
          onClick={loadAll}
          disabled={loading}
          className="flex items-center gap-2 bg-[#5b5ce2] hover:bg-[#4a4bc7] text-white px-4 py-2 rounded-xl text-sm font-semibold transition disabled:opacity-50 cursor-pointer"
        >
          <FaSync size={12} className={loading ? "animate-spin" : ""} />
          Refresh
        </button>
      </div>

      {/* ── 4 KPI Cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

        {/* Booking */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold text-slate-400 uppercase">Total Booking</p>
            <div className="w-9 h-9 bg-indigo-100 rounded-xl flex items-center justify-center">
              <FaCalendarCheck className="text-indigo-600" />
            </div>
          </div>
          <p className="text-4xl font-extrabold text-slate-800">{totalBookings}</p>
          <div className="flex gap-2 text-xs">
            <span className="bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full font-semibold">
              {menunggu} menunggu
            </span>
            <span className="bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-semibold">
              {dikonfirmasi} konfirmasi
            </span>
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-[#5b5ce2] rounded-3xl p-5 shadow-sm text-white flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold text-indigo-200 uppercase">Total Pendapatan</p>
            <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
              <FaCoins className="text-yellow-300" />
            </div>
          </div>
          <p className="text-3xl font-extrabold">
            Rp {(totalRevenue / 1000).toFixed(0)}K
          </p>
          <p className="text-xs text-indigo-200">Dari {dikonfirmasi} transaksi terkonfirmasi</p>
        </div>

        {/* Members */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold text-slate-400 uppercase">Total Member</p>
            <div className="w-9 h-9 bg-emerald-100 rounded-xl flex items-center justify-center">
              <FaUsers className="text-emerald-600" />
            </div>
          </div>
          <p className="text-4xl font-extrabold text-slate-800">{totalMembers}</p>
          <p className="text-xs text-slate-400">Terdaftar di Supabase</p>
        </div>

        {/* Feedback & Rating */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold text-slate-400 uppercase">Rating Klinik</p>
            <div className="w-9 h-9 bg-yellow-100 rounded-xl flex items-center justify-center">
              <FaStar className="text-yellow-500" />
            </div>
          </div>
          <p className="text-4xl font-extrabold text-slate-800">{avgRating} <span className="text-base font-medium text-slate-400">/ 5</span></p>
          <p className="text-xs text-slate-400">
            {feedbacks.length} ulasan · {pendingFeedbacks} menunggu moderasi
          </p>
        </div>

      </div>

      {/* ── Alert jika ada yang perlu perhatian ── */}
      {(menunggu > 0 || criticalStock > 0 || pendingFeedbacks > 0) && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 flex flex-wrap gap-4 items-center">
          <FaExclamationTriangle className="text-amber-500 text-xl flex-shrink-0" />
          <div className="flex flex-wrap gap-3 text-sm">
            {menunggu > 0 && (
              <span className="font-semibold text-amber-800">
                ⏳ {menunggu} booking menunggu konfirmasi
              </span>
            )}
            {criticalStock > 0 && (
              <span className="font-semibold text-red-700">
                · 🔴 {criticalStock} item inventory kritis
              </span>
            )}
            {pendingFeedbacks > 0 && (
              <span className="font-semibold text-amber-800">
                · 💬 {pendingFeedbacks} feedback menunggu moderasi
              </span>
            )}
          </div>
          <button
            onClick={() => navigate("/admin/transaksi")}
            className="ml-auto text-xs text-amber-700 font-bold hover:underline cursor-pointer"
          >
            Tangani Sekarang →
          </button>
        </div>
      )}

      {/* ── Grid Utama: Booking Terbaru + Breakdown Layanan ── */}
      <div className="grid lg:grid-cols-3 gap-5">

        {/* Booking Terbaru — 2/3 */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-extrabold text-slate-800">Booking Terbaru</h2>
              <p className="text-xs text-slate-400 mt-0.5">Aktivitas booking masuk dari member</p>
            </div>
            <button
              onClick={() => navigate("/admin/transaksi")}
              className="text-xs text-[#5b5ce2] font-bold hover:underline cursor-pointer flex items-center gap-1"
            >
              Lihat Semua <FaArrowRight size={10} />
            </button>
          </div>

          {recentBookings.length === 0 ? (
            <div className="text-center py-12 text-slate-300">
              <FaCalendarCheck className="mx-auto text-4xl mb-3" />
              <p className="text-sm font-medium text-slate-400">Belum ada booking masuk</p>
            </div>
          ) : (
            <div className="space-y-3">
              {recentBookings.map((b) => (
                <div key={b.id} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition">
                  {/* Dot warna layanan */}
                  <div className={`w-10 h-10 rounded-xl ${SERVICE_COLOR[b.service] || "bg-slate-300"} flex items-center justify-center flex-shrink-0`}>
                    <FaPaw className="text-white text-sm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-slate-800 text-sm truncate">
                      {b.petName} — {b.service}
                    </p>
                    <p className="text-xs text-slate-400">
                      @{b.ownerUsername} · {b.dateFormatted || b.date}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-extrabold text-[#5b5ce2]">{b.totalFormatted}</p>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${STATUS_COLOR[b.status] || "bg-slate-100 text-slate-500"}`}>
                      {b.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Breakdown Layanan — 1/3 */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <h2 className="font-extrabold text-slate-800 mb-1">Breakdown Layanan</h2>
          <p className="text-xs text-slate-400 mb-5">Distribusi booking per jenis layanan</p>

          {Object.keys(serviceBreakdown).length === 0 ? (
            <div className="text-center py-10 text-slate-300">
              <FaPaw className="mx-auto text-4xl mb-3" />
              <p className="text-sm font-medium text-slate-400">Belum ada data</p>
            </div>
          ) : (
            <div className="space-y-4">
              {Object.entries(serviceBreakdown).map(([svc, count]) => (
                <div key={svc}>
                  <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1">
                    <span className="truncate max-w-[140px]">{svc}</span>
                    <span className="text-[#5b5ce2] font-extrabold">{count}x</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${SERVICE_COLOR[svc] || "bg-slate-400"}`}
                      style={{ width: `${Math.round((count / serviceMax) * 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Total poin terdistribusi */}
          <div className="mt-6 bg-amber-50 border border-amber-100 rounded-2xl p-4">
            <p className="text-xs font-bold text-amber-700 mb-1 flex items-center gap-1">
              <FaCoins size={11} /> Total Poin Terdistribusi
            </p>
            <p className="text-2xl font-extrabold text-amber-600">
              {bookings.filter(b => b.status === "Dikonfirmasi").reduce((s, b) => s + (b.points || 0), 0)} pts
            </p>
            <p className="text-[10px] text-amber-500 mt-0.5">Ke seluruh member aktif</p>
          </div>
        </div>

      </div>

      {/* ── Grid Bawah: Inventory + Feedback ── */}
      <div className="grid lg:grid-cols-2 gap-5">

        {/* Inventory Alert */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-extrabold text-slate-800">Status Inventory</h2>
              <p className="text-xs text-slate-400 mt-0.5">Item yang perlu perhatian segera</p>
            </div>
            <button
              onClick={() => navigate("/admin/inventory")}
              className="text-xs text-[#5b5ce2] font-bold hover:underline cursor-pointer flex items-center gap-1"
            >
              Kelola <FaArrowRight size={10} />
            </button>
          </div>

          {criticalItems.length === 0 ? (
            <div className="text-center py-10">
              <FaCheckCircle className="mx-auto text-4xl text-green-300 mb-3" />
              <p className="text-sm font-semibold text-slate-400">Semua stok dalam kondisi aman</p>
            </div>
          ) : (
            <div className="space-y-3">
              {criticalItems.map((item) => (
                <div key={item.id} className={`flex items-center gap-4 p-3 rounded-2xl border ${
                  item.status === "Kritis" ? "bg-red-50 border-red-100" : "bg-amber-50 border-amber-100"
                }`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    item.status === "Kritis" ? "bg-red-100" : "bg-amber-100"
                  }`}>
                    <FaBoxOpen className={item.status === "Kritis" ? "text-red-500" : "text-amber-500"} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-slate-800 text-sm truncate">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.category} · Expired: {item.expiry}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className={`font-extrabold text-lg ${item.status === "Kritis" ? "text-red-500" : "text-amber-600"}`}>
                      {item.stock}
                    </p>
                    <p className="text-[10px] text-slate-400">{item.unit}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Summary bar */}
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="bg-slate-50 rounded-xl p-2.5">
              <p className="text-lg font-extrabold text-slate-700">{inventory.length}</p>
              <p className="text-[10px] text-slate-400">Total Item</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-2.5">
              <p className="text-lg font-extrabold text-amber-600">
                {inventory.filter(i => i.status === "Stok Menipis").length}
              </p>
              <p className="text-[10px] text-amber-500">Menipis</p>
            </div>
            <div className="bg-red-50 rounded-xl p-2.5">
              <p className="text-lg font-extrabold text-red-500">{criticalStock}</p>
              <p className="text-[10px] text-red-400">Kritis</p>
            </div>
          </div>
        </div>

        {/* Feedback Terbaru */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-extrabold text-slate-800">Feedback Terbaru</h2>
              <p className="text-xs text-slate-400 mt-0.5">Ulasan terbaru dari member</p>
            </div>
            <button
              onClick={() => navigate("/admin/feedback")}
              className="text-xs text-[#5b5ce2] font-bold hover:underline cursor-pointer flex items-center gap-1"
            >
              Kelola <FaArrowRight size={10} />
            </button>
          </div>

          {recentFeedbacks.length === 0 ? (
            <div className="text-center py-10">
              <FaCommentDots className="mx-auto text-4xl text-slate-200 mb-3" />
              <p className="text-sm font-semibold text-slate-400">Belum ada feedback masuk</p>
            </div>
          ) : (
            <div className="space-y-4">
              {recentFeedbacks.map((fb) => (
                <div key={fb.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#5b5ce2]/10 text-[#5b5ce2] flex items-center justify-center text-xs font-extrabold">
                        {(fb.name || "?")[0].toUpperCase()}
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-xs">{fb.name}</p>
                        <p className="text-[10px] text-slate-400">{fb.service} · {fb.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} size={11} className={i < fb.rating ? "text-yellow-400" : "text-slate-200"} />
                      ))}
                      <span className={`ml-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        fb.status === "Disetujui" ? "bg-green-100 text-green-600" : "bg-amber-100 text-amber-600"
                      }`}>
                        {fb.status}
                      </span>
                    </div>
                  </div>
                  {fb.comment && (
                    <p className="text-xs text-slate-500 italic leading-relaxed line-clamp-2">
                      "{fb.comment}"
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Rating summary */}
          <div className="mt-4 flex items-center gap-4 bg-yellow-50 border border-yellow-100 rounded-2xl p-4">
            <div className="text-center">
              <p className="text-3xl font-extrabold text-yellow-500">{avgRating}</p>
              <p className="text-[10px] text-yellow-600">Rata-rata</p>
            </div>
            <div className="flex-1 space-y-1">
              {[5,4,3,2,1].map(star => {
                const count = feedbacks.filter(f => f.rating === star).length;
                const pct = feedbacks.length ? (count / feedbacks.length) * 100 : 0;
                return (
                  <div key={star} className="flex items-center gap-2 text-[10px]">
                    <span className="w-3 text-slate-400">{star}</span>
                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="w-4 text-slate-400">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* ── Quick Nav ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Kelola Booking",  path: "/admin/transaksi", icon: FaCalendarCheck, color: "bg-indigo-600", count: menunggu, badge: "pending" },
          { label: "Data Pelanggan",  path: "/admin/pelanggan", icon: FaUsers,         color: "bg-emerald-600", count: patients.length, badge: "pasien" },
          { label: "Kelola Feedback", path: "/admin/feedback",  icon: FaCommentDots,  color: "bg-amber-500",  count: pendingFeedbacks, badge: "pending" },
          { label: "Inventori",       path: "/admin/inventory", icon: FaBoxOpen,       color: "bg-rose-500",   count: criticalStock, badge: "kritis" },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer text-left group"
            >
              <div className={`w-10 h-10 ${item.color} rounded-2xl flex items-center justify-center mb-3`}>
                <Icon className="text-white" />
              </div>
              <p className="font-bold text-slate-800 text-sm">{item.label}</p>
              {item.count > 0 && (
                <p className="text-xs text-slate-400 mt-0.5">
                  <span className="font-extrabold text-slate-600">{item.count}</span> {item.badge}
                </p>
              )}
              <div className="flex items-center gap-1 text-[#5b5ce2] text-xs font-semibold mt-2 group-hover:gap-2 transition-all">
                Buka <FaArrowRight size={9} />
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
}
