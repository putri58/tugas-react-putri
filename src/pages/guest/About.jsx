import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaAward, FaHeartbeat, FaUserShield, FaStethoscope } from "react-icons/fa";

export default function AboutPage() {
  const navigate = useNavigate();

  // Data Dummy Dokter Hewan Spesialis
  const doctors = [
    {
      name: "drh. Anita Rahmawati",
      role: "Spesialis Bedah & Jaringan Lunak",
      exp: "8 Tahun Pengalaman",
      avatar: "https://images.unsplash.com/photo-1594824813573-246434e33963?w=300",
    },
    {
      name: "drh. Budi Setiawan",
      role: "Spesialis Penyakit Dalam Hewan",
      exp: "10 Tahun Pengalaman",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300",
    },
    {
      name: "drh. Chika Amanda",
      role: "Dokter Hewan Eksotis & Burung",
      exp: "5 Tahun Pengalaman",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Tombol Kembali */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all mb-8 cursor-pointer"
        >
          <FaArrowLeft /> Kembali ke Beranda
        </button>

        {/* SECTION 1: PROFIL KLINIK */}
        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100 p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* PERBAIKAN DI SINI: Tag dibuka dengan span dan ditutup dengan span */}
            <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Tentang VetCare
            </span>
            
            <h1 className="text-4xl font-bold text-slate-900 mt-4 leading-tight">
              Komitmen Kami untuk Kebahagiaan Anabul Anda
            </h1>
            <p className="text-slate-600 mt-6 leading-relaxed text-sm">
              Didirikan dengan cinta yang besar terhadap hewan, VetCare hadir sebagai pusat layanan kesehatan hewan modern terintegrasi di Pekanbaru. Kami mengombinasikan keahlian medis dokter hewan bersertifikasi dengan teknologi digital terkini untuk memberikan perawatan yang cepat, tepat, dan transparan.
            </p>
            <p className="text-slate-600 mt-4 leading-relaxed text-sm">
              Kami percaya bahwa setiap hewan peliharaan berhak mendapatkan penanganan medis yang ramah tanpa stres, itulah mengapa seluruh fasilitas kami dirancang dengan konsep *Fear-Free Clinic*.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600"
              alt="Klinik VetCare"
              className="rounded-3xl shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* SECTION 2: TIGA PILAR UTAMA (KEUNGGULAN) */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
            <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-xl">
              <FaHeartbeat />
            </div>
            <h3 className="font-bold text-lg text-slate-900">Fasilitas Modern</h3>
            <p className="text-slate-500 text-xs mt-3 leading-relaxed">
              Dilengkapi dengan alat X-Ray digital, USG, laboratorium darah mandiri, dan ruang operasi steril standar internasional.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
            <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-xl">
              <FaAward />
            </div>
            <h3 className="font-bold text-lg text-slate-900">Sertifikasi Resmi</h3>
            <p className="text-slate-500 text-xs mt-3 leading-relaxed">
              Seluruh paramedis dan dokter hewan kami terdaftar secara resmi di PDHI (Perhimpunan Dokter Hewan Indonesia).
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-xl">
              <FaUserShield />
            </div>
            <h3 className="font-bold text-lg text-slate-900">Rekam Medis Digital</h3>
            <p className="text-slate-500 text-xs mt-3 leading-relaxed">
              Sistem database terpusat yang aman, memudahkan Anda memantau riwayat vaksin, obat, dan diagnosa kapan saja melalui akun member.
            </p>
          </div>
        </div>

        {/* SECTION 3: TIM DOKTER HEWAN */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center justify-center gap-2">
              <FaStethoscope className="text-indigo-600 text-2xl" /> Tim Dokter Spesialis Kami
            </h2>
            <p className="text-slate-500 text-sm mt-3">
              Mengenal lebih dekat para tenaga medis ahli yang akan merawat sahabat berbulu Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doc, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 text-center hover:shadow-xl transition-all group"
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 ring-4 ring-indigo-50 group-hover:ring-indigo-200 transition-all">
                  <img src={doc.avatar} alt={doc.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg">{doc.name}</h4>
                <p className="text-indigo-600 text-xs font-semibold mt-1">{doc.role}</p>
                <div className="mt-4 pt-3 border-t border-slate-50 text-slate-400 text-xs">
                  {doc.exp}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION CTA BAWAH */}
        <div className="bg-[#071330] text-white rounded-[2.5rem] p-10 text-center mt-20 shadow-xl">
          <h3 className="text-2xl font-bold">Percayakan Kesehatan Hewan Bersama VetCare</h3>
          <p className="text-slate-300 text-sm mt-3 max-w-xl mx-auto">
            Kami siap memberikan penanganan medis darurat maupun perawatan rutin harian terbaik untuk anabul kesayangan Anda.
          </p>
          <button
            onClick={() => navigate("/booking")}
            className="mt-6 bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-300 transition shadow-lg shadow-yellow-500/10 cursor-pointer text-sm"
          >
            Booking Jadwal Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}