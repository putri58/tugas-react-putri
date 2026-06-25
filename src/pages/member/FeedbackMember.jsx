import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaStar, FaCheckCircle, FaPaperPlane } from "react-icons/fa";

export default function FeedbackMember() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Di sini biasanya proses kirim ke database
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center p-6">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl max-w-md w-full text-center border border-slate-100">
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
            <FaCheckCircle />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Terima Kasih!</h2>
          <p className="text-slate-500 mt-4 text-sm leading-relaxed">
            Feedback Anda sangat berharga bagi kami untuk terus meningkatkan layanan di VetCare.
          </p>
          <button 
            onClick={() => navigate("/member")} // Asumsi ke dashboard member
            className="w-full mt-8 bg-[#071330] text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition cursor-pointer"
          >
            Kembali ke Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-6">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-[#071330] font-semibold hover:gap-3 transition-all mb-8 cursor-pointer"
        >
          <FaArrowLeft /> Kembali
        </button>

        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100 p-8 md:p-12">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-slate-900">Berikan Feedback</h1>
            <p className="text-slate-500 mt-2">Bagikan pengalaman Anda selama menggunakan layanan VetCare</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* RATING BINTANG */}
            <div className="flex flex-col items-center">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4">Rating Layanan</label>
              <div className="flex gap-2">
                {[...Array(5)].map((star, index) => {
                  index += 1;
                  return (
                    <button
                      type="button"
                      key={index}
                      className={`text-4xl transition-colors cursor-pointer ${
                        index <= (hover || rating) ? "text-yellow-400" : "text-slate-200"
                      }`}
                      onClick={() => setRating(index)}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(rating)}
                    >
                      <FaStar />
                    </button>
                  );
                })}
              </div>
              <p className="mt-3 text-xs font-medium text-slate-400">
                {rating > 0 ? `Anda memberikan ${rating} bintang` : "Klik pada bintang untuk menilai"}
              </p>
            </div>

            {/* PILIH LAYANAN */}
            <div>
              <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">Layanan yang Dinilai</label>
              <select required className="w-full p-4 rounded-2xl border border-slate-200 bg-slate-50 focus:outline-[#071330] text-sm">
                <option value="">Pilih Layanan</option>
                <option>Konsultasi Medis</option>
                <option>Vaksinasi</option>
                <option>Pet Grooming</option>
                <option>Rawat Inap</option>
              </select>
            </div>

            {/* KOMENTAR */}
            <div>
              <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">Ceritakan Pengalaman Anda</label>
              <textarea
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows="5"
                placeholder="Tuliskan ulasan Anda di sini..."
                className="w-full p-4 rounded-2xl border border-slate-200 bg-slate-50 focus:outline-[#071330] text-sm resize-none"
              ></textarea>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={rating === 0}
              className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition shadow-lg ${
                rating > 0 
                ? "bg-[#071330] text-white hover:bg-slate-800 cursor-pointer" 
                : "bg-slate-100 text-slate-400 cursor-not-allowed"
              }`}
            >
              <FaPaperPlane /> Kirim Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}