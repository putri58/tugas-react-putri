import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCalendarAlt, FaClock, FaCheckCircle, FaPaw } from "react-icons/fa";

export default function BookingPage() {
  const navigate = useNavigate();
  
  // State Form Manajemen
  const [formData, setFormData] = useState({
    petName: "",
    petType: "Kucing",
    service: "Konsultasi Medis",
    date: "",
    timeSlot: "",
    notes: ""
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi pengiriman data booking ke CRM/Database
    console.log("Data Booking Berhasil Disimpan:", formData);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center p-6">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl max-w-md w-full text-center border border-slate-100">
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
            <FaCheckCircle />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Booking Berhasil!</h2>
          <p className="text-slate-500 mt-4 text-sm leading-relaxed">
            Jadwal kunjungan untuk <strong className="text-indigo-600">{formData.petName}</strong> telah tercatat di sistem VetCare. Silakan lakukan registrasi member untuk mengaktifkan notifikasi pengingat otomatis.
          </p>
          <div className="mt-8 bg-slate-50 p-4 rounded-2xl text-left text-xs text-slate-600 space-y-2">
            <div><strong>Layanan:</strong> {formData.service}</div>
            <div><strong>Tanggal:</strong> {formData.date}</div>
            <div><strong>Jam Kunjungan:</strong> {formData.timeSlot}</div>
          </div>
          <button 
            onClick={() => navigate("/")} 
            className="w-full mt-8 bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-100 cursor-pointer"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Tombol Back */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all mb-8 cursor-pointer"
        >
          <FaArrowLeft /> Kembali
        </button>

        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100 grid md:grid-cols-5">
          {/* Info Side Banner */}
          <div className="md:col-span-2 bg-gradient-to-br from-[#071330] to-[#13255e] text-white p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-yellow-400 font-bold tracking-wider uppercase text-xs">
                <FaPaw /> VetCare Booking
              </div>
              <h2 className="text-3xl font-bold mt-4 leading-tight">Atur Jadwal Sehat Anabul</h2>
              <p className="text-slate-300 text-sm mt-4 leading-relaxed">
                Hindari antrean panjang di klinik. Ambil kuota dan pesan penanganan medis terbaik secara instan di platform tamu kami.
              </p>
            </div>
            
            <div className="mt-8 border-t border-slate-700 pt-6 space-y-4 text-xs text-slate-400">
              <p>💡 Harap datang 15 menit lebih awal dari jadwal konsultasi yang Anda pilih.</p>
              <p>📞 Butuh bantuan darurat? Hubungi tim medis kami via tombol WhatsApp mengambang di beranda.</p>
            </div>
          </div>

          {/* Form Side */}
          <form onSubmit={handleSubmit} className="md:col-span-3 p-8 md:p-10 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Formulir Kunjungan Klinik</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Nama Hewan */}
              <div>
                <label className="block text-slate-700 text-xs font-bold uppercase mb-2">Nama Anabul</label>
                <input 
                  type="text" 
                  required
                  placeholder="Misal: Luna, Meong"
                  value={formData.petName}
                  onChange={(e) => setFormData({...formData, petName: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:outline-indigo-600"
                />
              </div>

              {/* Jenis Hewan */}
              <div>
                <label className="block text-slate-700 text-xs font-bold uppercase mb-2">Jenis Hewan</label>
                <select 
                  value={formData.petType}
                  onChange={(e) => setFormData({...formData, petType: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-white focus:outline-indigo-600"
                >
                  <option>Kucing</option>
                  <option>Anjing</option>
                  <option>Kelinci</option>
                  <option>Burung/Eksotis</option>
                </select>
              </div>
            </div>

            {/* Pilihan Layanan */}
            <div>
              <label className="block text-slate-700 text-xs font-bold uppercase mb-2">Pilih Layanan</label>
              <select 
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-white focus:outline-indigo-600"
              >
                <option>Konsultasi Medis</option>
                <option>Vaksinasi & Steril</option>
                <option>Pet Grooming</option>
                <option>Rawat Inap (Hospital)</option>
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Tanggal */}
              <div>
                <label className="block text-slate-700 text-xs font-bold uppercase mb-2 flex items-center gap-1">
                  <FaCalendarAlt className="text-slate-400" /> Pilih Tanggal
                </label>
                <input 
                  type="date" 
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:outline-indigo-600"
                />
              </div>

              {/* Sesi Jam */}
              <div>
                <label className="block text-slate-700 text-xs font-bold uppercase mb-2 flex items-center gap-1">
                  <FaClock className="text-slate-400" /> Pilih Jam
                </label>
                <select 
                  required
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({...formData, timeSlot: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-white focus:outline-indigo-600"
                >
                  <option value="">Pilih Sesi Waktu</option>
                  <option>09:00 - 11:00 (Pagi)</option>
                  <option>11:00 - 13:00 (Siang)</option>
                  <option>14:00 - 16:00 (Sore)</option>
                  <option>19:00 - 21:00 (Malam)</option>
                </select>
              </div>
            </div>

            {/* Catatan Medis Singkat */}
            <div>
              <label className="block text-slate-700 text-xs font-bold uppercase mb-2">Catatan/Keluhan Singkat</label>
              <textarea 
                rows="3"
                placeholder="Ceritakan keluhan anabul atau instruksi khusus untuk grooming..."
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:outline-indigo-600 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-100 cursor-pointer"
            >
              Konfirmasi Selesai & Ambil Tiket
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}