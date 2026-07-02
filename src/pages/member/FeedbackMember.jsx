import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaStar,
  FaCheckCircle,
  FaPaperPlane,
  FaPaw,
} from "react-icons/fa";
import { crmStore } from "../../services/CrmStore";

export default function FeedbackMember() {
  const navigate = useNavigate();

  const [rating, setRating]           = useState(0);
  const [hover, setHover]             = useState(0);
  const [service, setService]         = useState("");
  const [comment, setComment]         = useState("");
  const [submitted, setSubmitted]     = useState(false);
  const [loading, setLoading]         = useState(false);
  const [error, setError]             = useState("");
  const [savedFeedback, setSavedFeedback] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      setError("Silakan pilih rating bintang terlebih dahulu.");
      return;
    }
    if (!service) {
      setError("Silakan pilih layanan yang ingin dinilai.");
      return;
    }

    setError("");
    setLoading(true);

    // Simulasi delay pengiriman
    setTimeout(() => {
      // Kirim ke CRM store — data langsung muncul di KelolaFeedback admin
      const feedback = crmStore.addFeedback({ rating, service, comment });
      setSavedFeedback(feedback);
      setSubmitted(true);
      setLoading(false);
    }, 700);
  };

  // ── SUCCESS SCREEN ────────────────────────────────────────
  if (submitted && savedFeedback) {
    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center p-6">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl max-w-md w-full text-center border border-slate-100">
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
            <FaCheckCircle />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900">Terima Kasih!</h2>
          <p className="text-slate-500 mt-3 text-sm leading-relaxed">
            Feedback Anda telah terkirim dan langsung masuk ke panel admin untuk
            dianalisis demi peningkatan layanan VetCare.
          </p>

          {/* Rating Display */}
          <div className="mt-5 flex justify-center gap-1 text-yellow-400 text-2xl">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < savedFeedback.rating ? "text-yellow-400" : "text-slate-200"} />
            ))}
          </div>

          {/* CRM Notice */}
          <div className="mt-4 bg-indigo-50 border border-indigo-100 rounded-2xl px-4 py-3 text-xs text-indigo-700 text-left">
            <p className="font-bold mb-1">🔗 CRM Feedback Pipeline:</p>
            <ul className="space-y-1 text-indigo-600">
              <li>✅ Feedback masuk ke panel KelolaFeedback admin</li>
              <li>✅ Status: Pending — menunggu moderasi</li>
              <li>✅ Data tersimpan untuk analisis kualitas layanan</li>
            </ul>
          </div>

          <button
            onClick={() => navigate("/member")}
            className="w-full mt-6 bg-[#071330] hover:bg-slate-800 text-white py-3.5 rounded-2xl font-bold transition cursor-pointer"
          >
            Kembali ke Dashboard
          </button>
        </div>
      </div>
    );
  }

  // ── FORM ──────────────────────────────────────────────────
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-6">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#071330] font-semibold hover:gap-3 transition-all mb-8 cursor-pointer"
        >
          <FaArrowLeft /> Kembali
        </button>

        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100">

          {/* Top Banner */}
          <div className="bg-gradient-to-r from-[#071330] to-[#3730a3] text-white px-10 py-8">
            <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-2">
              <FaPaw /> PutriPetCare CRM
            </div>
            <h1 className="text-3xl font-extrabold">Berikan Feedback Anda</h1>
            <p className="text-slate-300 text-sm mt-2">
              Ulasan Anda langsung masuk ke dashboard admin untuk terus kami perbaiki.
            </p>
          </div>

          <div className="p-8 md:p-12">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-2xl mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Rating Bintang */}
              <div className="flex flex-col items-center">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4">
                  Rating Layanan <span className="text-red-400">*</span>
                </label>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => {
                    const star = i + 1;
                    return (
                      <button
                        type="button"
                        key={star}
                        className={`text-5xl transition-all cursor-pointer transform hover:scale-110 ${
                          star <= (hover || rating) ? "text-yellow-400" : "text-slate-200"
                        }`}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(rating)}
                      >
                        <FaStar />
                      </button>
                    );
                  })}
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-500">
                  {rating === 0 && "Klik bintang untuk menilai"}
                  {rating === 1 && "⭐ Sangat Buruk"}
                  {rating === 2 && "⭐⭐ Kurang Memuaskan"}
                  {rating === 3 && "⭐⭐⭐ Cukup Baik"}
                  {rating === 4 && "⭐⭐⭐⭐ Memuaskan"}
                  {rating === 5 && "⭐⭐⭐⭐⭐ Luar Biasa!"}
                </p>
              </div>

              {/* Pilih Layanan */}
              <div>
                <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">
                  Layanan yang Dinilai <span className="text-red-400">*</span>
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                  className="w-full p-4 rounded-2xl border border-slate-200 bg-slate-50 focus:outline-[#071330] text-sm"
                >
                  <option value="">— Pilih Layanan —</option>
                  <option>Konsultasi Medis</option>
                  <option>Vaksinasi & Steril</option>
                  <option>Pet Grooming</option>
                  <option>Rawat Inap (Hospital)</option>
                </select>
              </div>

              {/* Komentar */}
              <div>
                <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">
                  Ceritakan Pengalaman Anda
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows="5"
                  placeholder="Tuliskan ulasan Anda di sini — akan tampil di panel admin setelah disetujui..."
                  className="w-full p-4 rounded-2xl border border-slate-200 bg-slate-50 focus:outline-[#071330] text-sm resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={rating === 0 || loading}
                className={`w-full py-4 rounded-2xl font-extrabold text-base flex items-center justify-center gap-3 transition shadow-lg ${
                  rating > 0 && !loading
                    ? "bg-[#071330] hover:bg-slate-800 text-white cursor-pointer shadow-slate-900/20"
                    : "bg-slate-100 text-slate-400 cursor-not-allowed"
                }`}
              >
                <FaPaperPlane />
                {loading ? "Mengirim Feedback..." : "Kirim Feedback ke CRM"}
              </button>

              <p className="text-xs text-slate-400 text-center">
                Data feedback akan langsung tersinkron ke panel admin VetCare.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
