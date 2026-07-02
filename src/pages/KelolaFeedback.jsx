import React, { useState, useEffect } from "react";
import { FaTrash, FaStar, FaCheckCircle, FaSync } from "react-icons/fa";
import { crmStore } from "../services/CrmStore";

// Data feedback dummy bawaan klinik
const DUMMY_FEEDBACKS = [
  {
    id: "dummy-1",
    name: "putriagustin",
    service: "Vaksinasi & Steril",
    rating: 5,
    comment: "Pelayanan cepat sekali untuk member gold, drh. Sarah sangat ramah dan teliti.",
    date: "10 Mei 2026",
    status: "Disetujui",
  },
  {
    id: "dummy-2",
    name: "Jeon Jungkook",
    service: "Pet Grooming",
    rating: 4,
    comment: "Hasil potongan rambut rapi, wangi banget. Antrean kasir aja agak ramai.",
    date: "12 Juni 2026",
    status: "Pending",
  },
];

export default function KelolaFeedback() {
  const [feedbacks, setFeedbacks] = useState(DUMMY_FEEDBACKS);
  const [crmCount, setCrmCount] = useState(0);
  const [lastRefresh, setLastRefresh] = useState(null);

  const loadFeedbacks = () => {
    const crmFeedbacks = crmStore.getFeedbacks();
    setCrmCount(crmFeedbacks.length);
    setFeedbacks([...crmFeedbacks, ...DUMMY_FEEDBACKS]);
    setLastRefresh(new Date().toLocaleTimeString("id-ID"));
  };

  useEffect(() => {
    loadFeedbacks();
    window.addEventListener("focus", loadFeedbacks);
    return () => window.removeEventListener("focus", loadFeedbacks);
  }, []);

  const handleApprove = (id) => {
    const isCrm = !String(id).startsWith("dummy");
    if (isCrm) crmStore.approveFeedback(id);
    setFeedbacks((prev) =>
      prev.map((fb) => (fb.id === id ? { ...fb, status: "Disetujui" } : fb))
    );
  };

  const handleDelete = (id) => {
    if (!window.confirm("Hapus ulasan feedback ini?")) return;
    const isCrm = !String(id).startsWith("dummy");
    if (isCrm) crmStore.deleteFeedback(id);
    setFeedbacks((prev) => prev.filter((fb) => fb.id !== id));
  };

  const pendingCount = feedbacks.filter((fb) => fb.status === "Pending").length;
  const approvedCount = feedbacks.filter((fb) => fb.status === "Disetujui").length;
  const avgRating =
    feedbacks.length > 0
      ? (feedbacks.reduce((s, fb) => s + fb.rating, 0) / feedbacks.length).toFixed(1)
      : 0;

  return (
    <div className="p-6 space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Kelola Feedback Pelanggan</h2>
          <p className="text-xs text-slate-400 mt-1">
            Moderasi ulasan dari member — data CRM tersinkron real-time.
            {lastRefresh && <span className="ml-2">Terakhir diperbarui: {lastRefresh}</span>}
          </p>
        </div>
        <button
          onClick={loadFeedbacks}
          className="flex items-center gap-2 bg-slate-700 hover:bg-slate-800 text-white text-sm font-semibold px-4 py-2 rounded-xl transition cursor-pointer"
        >
          <FaSync size={12} /> Refresh
        </button>
      </div>

      {/* CRM Alert */}
      {crmCount > 0 && (
        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl px-5 py-3 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-indigo-700 text-sm font-medium">
            🔗 <strong>{crmCount} feedback baru</strong> dikirim member dari halaman FeedbackMember — menunggu moderasi admin.
          </p>
          <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            CRM Live
          </span>
        </div>
      )}

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-xs text-slate-400 font-bold uppercase">Total Ulasan</p>
          <p className="text-3xl font-extrabold text-slate-800 mt-1">{feedbacks.length}</p>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
          <p className="text-xs text-amber-600 font-bold uppercase">Menunggu Moderasi</p>
          <p className="text-3xl font-extrabold text-amber-700 mt-1">{pendingCount}</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-4">
          <p className="text-xs text-yellow-700 font-bold uppercase flex items-center gap-1">
            <FaStar size={11} /> Rata-rata Rating
          </p>
          <p className="text-3xl font-extrabold text-yellow-600 mt-1">{avgRating} / 5</p>
        </div>
      </div>

      {/* Grid Feedback Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedbacks.map((fb) => {
          const isCrm = !String(fb.id).startsWith("dummy");
          return (
            <div
              key={fb.id}
              className={`bg-white border rounded-2xl p-5 shadow-sm flex flex-col justify-between space-y-4 relative ${
                isCrm ? "border-indigo-200 bg-indigo-50/20" : "border-slate-100"
              }`}
            >
              {/* CRM Badge */}
              {isCrm && (
                <span className="absolute top-3 left-3 bg-indigo-100 text-indigo-600 text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                  CRM Live
                </span>
              )}

              {/* Status Tag */}
              <span className={`absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                fb.status === "Disetujui"
                  ? "bg-green-50 text-green-600"
                  : "bg-amber-50 text-amber-600"
              }`}>
                {fb.status}
              </span>

              <div className={`space-y-2 ${isCrm ? "mt-4" : ""}`}>
                <div>
                  <h4 className="font-bold text-slate-800">{fb.name}</h4>
                  <span className="text-[11px] text-slate-400 block">
                    {fb.service} • {fb.date}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex text-amber-400 text-xs gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < fb.rating ? "text-amber-400" : "text-slate-200"} />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs text-slate-600 leading-relaxed font-medium italic bg-slate-50 p-3 rounded-xl border border-slate-100">
                  "{fb.comment || "(Tidak ada komentar)"}"
                </p>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-slate-50 flex justify-between items-center text-xs font-semibold">
                <button
                  onClick={() => handleDelete(fb.id)}
                  className="text-red-500 hover:text-red-700 flex items-center gap-1 cursor-pointer"
                >
                  <FaTrash /> Hapus
                </button>

                {fb.status === "Pending" && (
                  <button
                    onClick={() => handleApprove(fb.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-xl flex items-center gap-1 shadow-sm transition cursor-pointer"
                  >
                    <FaCheckCircle /> Setujui
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {feedbacks.length === 0 && (
        <div className="text-center py-16 text-slate-400">
          <FaStar className="mx-auto text-4xl mb-3 text-slate-200" />
          <p className="font-medium">Belum ada feedback masuk.</p>
          <p className="text-xs mt-1">Feedback dari member akan muncul di sini secara real-time.</p>
        </div>
      )}
    </div>
  );
}
