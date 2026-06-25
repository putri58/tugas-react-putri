import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle, FaWhatsapp, FaHospital } from "react-icons/fa";

export default function RawatInapDetail() {
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
              <img src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?w=800" alt="Rawat Inap" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="bg-red-100 text-red-700 px-4 py-1 rounded-full text-xs font-bold uppercase w-fit">24/7 Monitoring</span>
              <h1 className="text-4xl font-bold text-slate-900 mt-4 leading-tight">Rawat Inap Eksklusif & Aman</h1>
              <p className="text-slate-600 mt-6 leading-relaxed">
                Kami menyediakan fasilitas rawat inap yang tenang dengan pengawasan tenaga medis 24 jam. Setiap kandang dijaga kebersihannya dan disesuaikan dengan kebutuhan pemulihan hewan Anda.
              </p>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-slate-700"><FaCheckCircle className="text-red-500" /> CCTV Monitoring 24 Jam</div>
                <div className="flex items-center gap-3 text-slate-700"><FaCheckCircle className="text-red-500" /> Ruangan Ber-AC & Bebas Stress</div>
                <div className="flex items-center gap-3 text-slate-700"><FaCheckCircle className="text-red-500" /> Laporan Kondisi Berkala via WA</div>
              </div>
              <div className="mt-10 flex gap-4">
                <button onClick={() => navigate("/booking")} className="flex-1 bg-red-600 text-white py-4 rounded-2xl font-bold hover:bg-red-700 transition shadow-lg shadow-red-200">Cek Ketersediaan Kamar</button>
                <a href="https://wa.me/081234567890" className="bg-green-500 text-white p-4 rounded-2xl hover:bg-green-600 transition flex items-center justify-center"><FaWhatsapp size={24} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}