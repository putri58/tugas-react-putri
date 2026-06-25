import React, { useState } from "react";
import { FaTrash, FaStar, FaCheckCircle } from "react-icons/fa";

export default function KelolaFeedback() {
  // Data Dummy Feedback
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, name: "putriagustin", service: "Tindakan Vaksinasi / Booster", rating: 5, comment: "Pelayanan cepat sekali untuk member gold, drh. Sarah sangat ramah dan teliti.", date: "10 Mei 2026", status: "Disetujui" },
    { id: 2, name: "Jeon Jungkook", service: "Pet Grooming Premium", rating: 4, comment: "Hasil potongan rambut rapi, wangi banget. Antrean kasir aja agak ramai.", date: "12 Juni 2026", status: "Pending" },
  ]);

  const handleApprove = (id) => {
    setFeedbacks(feedbacks.map(fb => fb.id === id ? { ...fb, status: "Disetujui" } : fb));
  };

  const handleDelete = (id) => {
    if (window.confirm("Hapus ulasan feedback ini?")) {
      setFeedbacks(feedbacks.filter(fb => fb.id !== id));
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Kelola Feedback Pelanggan</h2>
        <p className="text-xs text-slate-400 mt-1">Moderasi ulasan bintang dan testimoni kiriman member.</p>
      </div>

      {/* Grid Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedbacks.map((fb) => (
          <div key={fb.id} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between space-y-4 relative">
            {/* Status Tag */}
            <span className={`absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full ${
              fb.status === "Disetujui" ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-600"
            }`}>
              {fb.status}
            </span>

            <div className="space-y-2">
              <div>
                <h4 className="font-bold text-slate-800">{fb.name}</h4>
                <span className="text-[11px] text-slate-400 block">{fb.service} • {fb.date}</span>
              </div>

              {/* Bintang */}
              <div className="flex text-amber-400 text-xs gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < fb.rating ? "text-amber-400" : "text-slate-200"} />
                ))}
              </div>

              {/* Isi Komentar */}
              <p className="text-xs text-slate-600 leading-relaxed font-medium italic bg-slate-50 p-3 rounded-xl border border-slate-100">
                "{fb.comment}"
              </p>
            </div>

            {/* Aksi */}
            <div className="pt-3 border-t border-slate-50 flex justify-between items-center text-xs font-semibold">
              <button 
                onClick={() => handleDelete(fb.id)}
                className="text-red-500 hover:text-red-700 flex items-center gap-1"
              >
                <FaTrash /> Hapus
              </button>

              {fb.status === "Pending" && (
                <button 
                  onClick={() => handleApprove(fb.id)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-xl flex items-center gap-1 shadow-sm transition-all"
                >
                  <FaCheckCircle /> Setujui
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}