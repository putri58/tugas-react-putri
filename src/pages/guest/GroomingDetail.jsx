import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle, FaWhatsapp, FaCut } from "react-icons/fa";

export default function GroomingDetail() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all mb-8">
          <FaArrowLeft /> Kembali ke Beranda
        </button>

        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100">
          <div className="grid md:grid-cols-2 gap-10 p-10">
            <div className="relative h-96 overflow-hidden rounded-3xl">
              <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800" alt="Grooming" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="bg-pink-100 text-pink-700 px-4 py-1 rounded-full text-xs font-bold uppercase w-fit">Pet Spa</span>
              <h1 className="text-4xl font-bold text-slate-900 mt-4 leading-tight">Grooming & Spa Premium</h1>
              <p className="text-slate-600 mt-6 leading-relaxed">
                Manjakan anabul Anda dengan perawatan spa terbaik. Dari mandi wangi, potong kuku, hingga pembersihan telinga, kami memastikan hewan Anda pulang dengan keadaan bersih, wangi, dan bahagia.
              </p>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-slate-700"><FaCheckCircle className="text-pink-500" /> Shampoo Khusus Kulit Sensitif</div>
                <div className="flex items-center gap-3 text-slate-700"><FaCheckCircle className="text-pink-500" /> Stylist Grooming Berpengalaman</div>
                <div className="flex items-center gap-3 text-slate-700"><FaCheckCircle className="text-pink-500" /> Treatment Kutu & Jamur</div>
              </div>
              <div className="mt-10 flex gap-4">
                <button onClick={() => navigate("/booking")} className="flex-1 bg-pink-600 text-white py-4 rounded-2xl font-bold hover:bg-pink-700 transition shadow-lg shadow-pink-200">Ambil Antrean Grooming</button>
                <a href="https://wa.me/081234567890" className="bg-green-500 text-white p-4 rounded-2xl hover:bg-green-600 transition flex items-center justify-center"><FaWhatsapp size={24} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}