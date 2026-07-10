import React, { useState, useEffect } from "react";
import {
  FaCheck, FaTimes, FaTrash, FaSync,
  FaCoins, FaClock, FaCheckCircle,
} from "react-icons/fa";
import { crmStore, SERVICE_POINTS } from "../services/CrmStore";

// ── Status badge helper ──────────────────────────────────────
function StatusBadge({ status }) {
  const map = {
    "Menunggu Konfirmasi": "bg-amber-50 text-amber-600 border border-amber-200",
    "Dikonfirmasi":        "bg-green-50 text-green-600 border border-green-200",
    "Ditolak":             "bg-red-50   text-red-500   border border-red-200",
    "Lunas":               "bg-green-50 text-green-600 border border-green-200",
    "Pending":             "bg-amber-50 text-amber-600 border border-amber-200",
  };
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${map[status] || "bg-slate-100 text-slate-500"}`}>
      {status}
    </span>
  );
}

export default function DataTransaksi() {
  const [bookings, setBookings]     = useState([]);
  const [lastRefresh, setLastRefresh] = useState(null);
  const [confirmMsg, setConfirmMsg]   = useState("");

  const load = () => {
    setBookings(crmStore.getBookings());
    setLastRefresh(new Date().toLocaleTimeString("id-ID"));
  };

  useEffect(() => {
    load();
    window.addEventListener("focus", load);
    return () => window.removeEventListener("focus", load);
  }, []);

  const showMsg = (msg) => {
    setConfirmMsg(msg);
    setTimeout(() => setConfirmMsg(""), 3000);
  };

  // ── Admin konfirmasi ────────────────────────────────────
  const handleConfirm = (bookingId, ownerName, service, isMember) => {
    crmStore.confirmBooking(bookingId);
    load();
    const pts = SERVICE_POINTS[service] || 0;
    if (isMember && pts > 0) {
      showMsg(`✅ Booking dikonfirmasi! +${pts} poin dikirim ke akun ${ownerName}.`);
    } else {
      showMsg(`✅ Booking dikonfirmasi! (Booking Guest — tidak ada poin)`);
    }
  };

  // ── Admin tolak ─────────────────────────────────────────
  const handleReject = (bookingId) => {
    if (!window.confirm("Tolak booking ini?")) return;
    crmStore.rejectBooking(bookingId);
    load();
    showMsg("❌ Booking ditolak.");
  };

  // ── Hapus ────────────────────────────────────────────────
  const handleDelete = (bookingId) => {
    if (!window.confirm("Hapus data booking ini?")) return;
    crmStore.deleteBooking(bookingId);
    load();
  };

  // ── Summary ──────────────────────────────────────────────
  const menunggu    = bookings.filter((b) => b.status === "Menunggu Konfirmasi").length;
  const dikonfirmasi = bookings.filter((b) => b.status === "Dikonfirmasi").length;
  const ditolak     = bookings.filter((b) => b.status === "Ditolak").length;

  return (
    <div className="p-6 space-y-6">

      {/* ── Header ── */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Data Transaksi & Booking</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Konfirmasi booking member — poin & riwayat transaksi member akan otomatis diperbarui.
            {lastRefresh && <span className="ml-2">Terakhir: {lastRefresh}</span>}
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => {
              if (!window.confirm("Reset SEMUA data booking? Data lama yang corrupt akan dihapus.")) return;
              crmStore.clearAllBookings();
              load();
            }}
            className="flex items-center gap-2 bg-red-100 hover:bg-red-200 text-red-600 font-semibold px-4 py-2 rounded-xl text-sm transition cursor-pointer"
          >
            Reset Data
          </button>
          <button
            onClick={load}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl text-sm transition cursor-pointer"
          >
            <FaSync size={12} /> Refresh
          </button>
        </div>
      </div>

      {/* ── Notifikasi aksi ── */}
      {confirmMsg && (
        <div className="bg-indigo-50 border border-indigo-200 text-indigo-700 px-5 py-3 rounded-2xl text-sm font-medium">
          {confirmMsg}
        </div>
      )}

      {/* ── Summary Cards ── */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-xs text-slate-400 font-bold uppercase">Total Booking</p>
          <p className="text-3xl font-extrabold text-slate-800 mt-1">{bookings.length}</p>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
          <p className="text-xs text-amber-600 font-bold uppercase flex items-center gap-1">
            <FaClock size={10} /> Menunggu
          </p>
          <p className="text-3xl font-extrabold text-amber-700 mt-1">{menunggu}</p>
        </div>
        <div className="bg-green-50 border border-green-100 rounded-2xl p-4">
          <p className="text-xs text-green-600 font-bold uppercase flex items-center gap-1">
            <FaCheckCircle size={10} /> Dikonfirmasi
          </p>
          <p className="text-3xl font-extrabold text-green-700 mt-1">{dikonfirmasi}</p>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-2xl p-4">
          <p className="text-xs text-red-500 font-bold uppercase flex items-center gap-1">
            <FaTimes size={10} /> Ditolak
          </p>
          <p className="text-3xl font-extrabold text-red-600 mt-1">{ditolak}</p>
        </div>
      </div>

      {/* ── Alert jika ada yang menunggu ── */}
      {menunggu > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-3 flex items-center justify-between gap-4">
          <p className="text-amber-800 text-sm font-medium">
            ⏳ <strong>{menunggu} booking</strong> sedang menunggu konfirmasi admin.
            Konfirmasi untuk mengirim poin ke member secara otomatis.
          </p>
          <span className="bg-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full animate-pulse">
            Perlu Aksi
          </span>
        </div>
      )}

      {/* ── Tabel ── */}
      {bookings.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-100 p-16 text-center text-slate-400">
          <FaCoins className="mx-auto text-4xl mb-3 text-slate-200" />
          <p className="font-medium">Belum ada booking masuk.</p>
          <p className="text-xs mt-1">Booking dari member akan muncul di sini secara otomatis.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-400 font-bold uppercase text-[11px] tracking-wider border-b border-slate-100">
                  <th className="p-4">No</th>
                  <th className="p-4">No. Invoice</th>
                  <th className="p-4">Member</th>
                  <th className="p-4">Layanan & Hewan</th>
                  <th className="p-4">Tgl Kunjungan</th>
                  <th className="p-4">Total</th>
                  <th className="p-4">Poin</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-center">Aksi Admin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-slate-600 font-medium">
                {bookings.map((bkg, index) => (
                  <tr
                    key={bkg.id}
                    className={`hover:bg-slate-50/50 transition-colors ${
                      bkg.status === "Menunggu Konfirmasi" ? "bg-amber-50/20" :
                      bkg.status === "Dikonfirmasi" ? "bg-green-50/20" : ""
                    }`}
                  >
                    <td className="p-4 text-slate-400 text-xs">{index + 1}</td>

                    <td className="p-4">
                      <span className="font-mono text-xs text-slate-500">{bkg.invoice}</span>
                    </td>

                    <td className="p-4">
                      <p className="font-semibold text-slate-800">{bkg.ownerName}</p>
                      <p className="text-xs text-slate-400">@{bkg.ownerUsername}</p>
                      {!bkg.isMember && (
                        <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-semibold mt-0.5 inline-block">
                          Guest
                        </span>
                      )}
                    </td>

                    <td className="p-4">
                      <p className="font-semibold text-slate-800">{bkg.service}</p>
                      <p className="text-xs text-slate-400">{bkg.petName} ({bkg.petType})</p>
                      {bkg.timeSlot && (
                        <p className="text-xs text-indigo-500 mt-0.5">⏰ {bkg.timeSlot}</p>
                      )}
                    </td>

                    <td className="p-4 text-xs text-slate-500 font-mono">
                      {bkg.dateFormatted}
                    </td>

                    <td className="p-4 text-blue-600 font-bold">
                      {bkg.totalFormatted}
                    </td>

                    <td className="p-4">
                      {bkg.isMember && bkg.points > 0 ? (
                        <span className="flex items-center gap-1 text-amber-600 font-bold text-xs">
                          <FaCoins size={11} /> +{bkg.points} pts
                        </span>
                      ) : (
                        <span className="text-slate-300 text-xs font-medium">— (Guest)</span>
                      )}
                    </td>

                    <td className="p-4">
                      <StatusBadge status={bkg.status} />
                      {bkg.confirmedAt && (
                        <p className="text-[10px] text-slate-400 mt-1">✓ {bkg.confirmedAt}</p>
                      )}
                    </td>

                    {/* Aksi Admin */}
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-2">
                        {bkg.status === "Menunggu Konfirmasi" && (
                          <>
                            {/* Konfirmasi */}
                            <button
                              onClick={() => handleConfirm(bkg.id, bkg.ownerName, bkg.service, bkg.isMember)}
                              className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition cursor-pointer"
                              title="Konfirmasi Booking"
                            >
                              <FaCheck size={10} /> Konfirmasi
                            </button>
                            {/* Tolak */}
                            <button
                              onClick={() => handleReject(bkg.id)}
                              className="flex items-center gap-1 bg-red-100 hover:bg-red-200 text-red-600 text-xs font-bold px-3 py-1.5 rounded-xl transition cursor-pointer"
                              title="Tolak Booking"
                            >
                              <FaTimes size={10} /> Tolak
                            </button>
                          </>
                        )}
                        {(bkg.status === "Dikonfirmasi" || bkg.status === "Ditolak") && (
                          <button
                            onClick={() => handleDelete(bkg.id)}
                            className="text-red-300 hover:text-red-500 p-1.5 rounded-xl hover:bg-red-50 transition cursor-pointer"
                            title="Hapus"
                          >
                            <FaTrash size={13} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── Info CRM Pipeline ── */}
      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
        <p className="text-xs font-bold text-slate-500 uppercase mb-3">🔗 Alur CRM Pipeline</p>
        <div className="grid md:grid-cols-4 gap-3 text-xs text-slate-600">
          {[
            { step: "1", label: "Member booking", desc: "Data masuk dengan status Menunggu Konfirmasi" },
            { step: "2", label: "Admin konfirmasi", desc: "Klik tombol Konfirmasi di tabel ini" },
            { step: "3", label: "Poin otomatis", desc: "Poin langsung masuk ke akun member" },
            { step: "4", label: "Riwayat member", desc: "Transaksi muncul di dashboard member" },
          ].map((s) => (
            <div key={s.step} className="bg-white rounded-xl p-3 border border-slate-100">
              <span className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold mb-2">
                {s.step}
              </span>
              <p className="font-bold text-slate-700">{s.label}</p>
              <p className="text-slate-400 mt-0.5 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
