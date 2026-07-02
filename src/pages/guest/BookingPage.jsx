import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaPaw,
  FaUser,
  FaSignInAlt,
} from "react-icons/fa";
import { crmStore } from "../../services/CrmStore";

// Slot waktu yang tersedia
const TIME_SLOTS = [
  "09:00 – 10:00 (Pagi)",
  "10:00 – 11:00 (Pagi)",
  "11:00 – 12:00 (Siang)",
  "13:00 – 14:00 (Siang)",
  "14:00 – 15:00 (Sore)",
  "15:00 – 16:00 (Sore)",
  "19:00 – 20:00 (Malam)",
];

export default function BookingPage() {
  const navigate = useNavigate();

  // Cek apakah sudah login sebagai member
  const [member, setMember] = useState(null);

  useEffect(() => {
    const session = localStorage.getItem("member_session");
    if (session) {
      setMember(JSON.parse(session));
    }
  }, []);

  const [formData, setFormData] = useState({
    petName: "",
    petType: "Kucing",
    service: "Konsultasi Medis",
    date: "",
    timeSlot: "",
    notes: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [savedBooking, setSavedBooking] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.date || !formData.timeSlot) return;

    setLoading(true);

    // Simulasi delay pengiriman ke CRM
    setTimeout(() => {
      // Simpan ke CRM store (localStorage) — trigger pipeline admin
      const booking = crmStore.addBooking(formData);
      setSavedBooking(booking);
      setIsSuccess(true);
      setLoading(false);
    }, 800);
  };

  // ── REDIRECT TO LOGIN ─────────────────────────────────────
  const handleLoginRedirect = () => {
    sessionStorage.setItem("booking_redirect", "/booking");
    navigate("/loginGuest");
  };

  // ── SUCCESS SCREEN ────────────────────────────────────────
  if (isSuccess && savedBooking) {
    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center p-6">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl max-w-md w-full text-center border border-slate-100">
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
            <FaCheckCircle />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900">Booking Berhasil!</h2>
          <p className="text-slate-500 mt-3 text-sm leading-relaxed">
            Jadwal kunjungan untuk{" "}
            <strong className="text-indigo-600">{savedBooking.petName}</strong> telah
            terdaftar di sistem CRM VetCare dan siap diproses oleh tim klinik.
          </p>

          {/* Detail Booking */}
          <div className="mt-6 bg-slate-50 rounded-2xl p-5 text-left text-sm space-y-3 border border-slate-100">
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">No. Booking</span>
              <span className="font-mono text-xs text-indigo-600">{savedBooking.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Layanan</span>
              <span className="font-semibold text-slate-700">{savedBooking.service}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Hewan</span>
              <span className="font-semibold text-slate-700">{savedBooking.petName} ({savedBooking.petType})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Tanggal</span>
              <span className="font-semibold text-slate-700">{savedBooking.dateFormatted}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Jam</span>
              <span className="font-semibold text-slate-700">{savedBooking.timeSlot}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Status</span>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                {savedBooking.status}
              </span>
            </div>
          </div>

          {/* CRM Notice */}
          <div className="mt-4 bg-indigo-50 border border-indigo-100 rounded-2xl px-4 py-3 text-xs text-indigo-700 text-left">
            <p className="font-bold mb-1">🔗 CRM Pipeline Aktif:</p>
            <ul className="space-y-1 text-indigo-600">
              <li>✅ Jadwal masuk ke kalender admin</li>
              <li>✅ Profil pasien baru dibuat</li>
              <li>✅ Draft invoice otomatis diterbitkan</li>
              {savedBooking.service === "Vaksinasi & Steril" && (
                <li>✅ Stok vaksin berkurang 1 unit</li>
              )}
            </ul>
          </div>

          <button
            onClick={() => navigate("/guest")}
            className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 rounded-2xl font-bold transition shadow-lg shadow-indigo-100 cursor-pointer"
          >
            Kembali ke Beranda
          </button>

          {!member && (
            <button
              onClick={handleLoginRedirect}
              className="w-full mt-3 border border-indigo-200 text-indigo-600 hover:bg-indigo-50 py-3 rounded-2xl font-semibold text-sm transition cursor-pointer"
            >
              Login Member untuk Tracking Booking
            </button>
          )}
        </div>
      </div>
    );
  }

  // ── AUTH GATE: Tampilkan login prompt jika belum login ────
  const isLoggedIn = !!member;

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all mb-8 cursor-pointer"
        >
          <FaArrowLeft /> Kembali
        </button>

        {/* Login Banner — tampil jika belum login */}
        {!isLoggedIn && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4 mb-6 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <FaUser className="text-amber-500" />
              <p className="text-amber-800 text-sm font-medium">
                Login sebagai member untuk tracking booking & loyalty point otomatis.
              </p>
            </div>
            <button
              onClick={handleLoginRedirect}
              className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black text-sm font-bold px-4 py-2 rounded-xl transition cursor-pointer"
            >
              <FaSignInAlt /> Login Sekarang
            </button>
          </div>
        )}

        {/* Booking Card */}
        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100 grid md:grid-cols-5">

          {/* Left Banner */}
          <div className="md:col-span-2 bg-gradient-to-br from-[#071330] to-[#3730a3] text-white p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-yellow-400 font-bold text-xs uppercase tracking-wider mb-4">
                <FaPaw /> PutriPetCare Booking
              </div>
              <h2 className="text-2xl font-extrabold leading-tight">
                Atur Jadwal Sehat Anabul
              </h2>
              <p className="text-slate-300 text-sm mt-4 leading-relaxed">
                Booking online mudah & cepat. Data kunjungan langsung masuk ke sistem
                CRM klinik secara otomatis.
              </p>

              {/* CRM Benefits */}
              <div className="mt-8 space-y-3">
                {[
                  "Jadwal otomatis di kalender dokter",
                  "Profil rekam medis langsung dibuat",
                  "Invoice draf diterbitkan otomatis",
                  "Stok vaksin terupdate real-time",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-slate-300">
                    <FaCheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={11} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Member Info */}
            {isLoggedIn && (
              <div className="mt-8 bg-white/10 rounded-2xl p-4">
                <p className="text-xs text-slate-300 mb-1">Booking sebagai:</p>
                <p className="font-bold text-white">{member.namaLengkap || member.username}</p>
                <p className="text-xs text-yellow-400">{member.email || ""}</p>
              </div>
            )}

            <div className="mt-6 border-t border-white/10 pt-5 space-y-2 text-xs text-slate-400">
              <p>💡 Harap datang 15 menit lebih awal dari jadwal.</p>
              <p>📞 Darurat? Hubungi kami via WhatsApp kapan saja.</p>
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 p-8 md:p-10 space-y-5">
            <h3 className="text-2xl font-extrabold text-slate-900">Formulir Booking Kunjungan</h3>
            <p className="text-slate-500 text-sm -mt-2">
              Isi data hewan dan pilih layanan yang dibutuhkan.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Nama Hewan */}
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                  Nama Anabul <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="petName"
                  required
                  placeholder="Contoh: Luna, Milo"
                  value={formData.petName}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm focus:outline-indigo-500"
                />
              </div>

              {/* Jenis Hewan */}
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Jenis Hewan</label>
                <select
                  name="petType"
                  value={formData.petType}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm focus:outline-indigo-500"
                >
                  <option>Kucing</option>
                  <option>Anjing</option>
                  <option>Kelinci</option>
                  <option>Burung</option>
                  <option>Reptil / Eksotis</option>
                  <option>Hamster</option>
                </select>
              </div>
            </div>

            {/* Pilih Layanan */}
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                Pilih Layanan <span className="text-red-400">*</span>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm focus:outline-indigo-500"
              >
                <option>Konsultasi Medis</option>
                <option>Vaksinasi &amp; Steril</option>
                <option>Pet Grooming</option>
                <option>Rawat Inap (Hospital)</option>
              </select>
              {formData.service === "Vaksinasi & Steril" && (
                <p className="text-xs text-amber-600 mt-1.5 flex items-center gap-1">
                  ⚠️ Stok vaksin akan otomatis berkurang saat booking dikonfirmasi.
                </p>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Tanggal */}
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5 flex items-center gap-1">
                  <FaCalendarAlt className="text-slate-400" />
                  Tanggal Kunjungan <span className="text-red-400">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm focus:outline-indigo-500"
                />
              </div>

              {/* Sesi Jam */}
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5 flex items-center gap-1">
                  <FaClock className="text-slate-400" />
                  Slot Waktu <span className="text-red-400">*</span>
                </label>
                <select
                  name="timeSlot"
                  required
                  value={formData.timeSlot}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm focus:outline-indigo-500"
                >
                  <option value="">Pilih Sesi Waktu</option>
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Catatan */}
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                Catatan / Keluhan Singkat
              </label>
              <textarea
                name="notes"
                rows="3"
                placeholder="Ceritakan keluhan anabul atau instruksi khusus..."
                value={formData.notes}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm focus:outline-indigo-500 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-extrabold text-base transition shadow-lg shadow-indigo-100 disabled:opacity-60 cursor-pointer"
            >
              {loading ? "Memproses Booking..." : "✅ Konfirmasi Booking"}
            </button>

            <p className="text-xs text-slate-400 text-center">
              Dengan booking, Anda menyetujui data hewan disimpan dalam sistem CRM VetCare.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
