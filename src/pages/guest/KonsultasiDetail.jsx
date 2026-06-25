import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle, FaWhatsapp, FaUserMd } from "react-icons/fa";

export default function KonsultasiDetail() {
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
              <img src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800" alt="Konsultasi" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-xs font-bold uppercase w-fit">Medical Checkup</span>
              <h1 className="text-4xl font-bold text-slate-900 mt-4 leading-tight">Konsultasi Medis Profesional</h1>
              <p className="text-slate-600 mt-6 leading-relaxed">
                Kesehatan anabul dimulai dari diagnosa yang tepat. Tim dokter kami siap mendengarkan keluhan dan melakukan pemeriksaan fisik menyeluruh untuk memastikan hewan kesayangan Anda tetap sehat.
              </p>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-slate-700"><FaCheckCircle className="text-green-500" /> Diagnosa Akurat & Cepat</div>
                <div className="flex items-center gap-3 text-slate-700"><FaCheckCircle className="text-green-500" /> Dokter Spesialis Berpengalaman</div>
                <div className="flex items-center gap-3 text-slate-700"><FaCheckCircle className="text-green-500" /> Rekam Medis Digital Terintegrasi</div>
              </div>
              <div className="mt-10 flex gap-4">
                <button onClick={() => navigate("/booking")} className="flex-1 bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">Booking Konsultasi</button>
                <a href="https://wa.me/081234567890" className="bg-green-500 text-white p-4 rounded-2xl hover:bg-green-600 transition flex items-center justify-center"><FaWhatsapp size={24} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}