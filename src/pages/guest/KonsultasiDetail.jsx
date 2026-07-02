import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaWhatsapp,
  FaUserMd,
  FaStar,
  FaPaw,
  FaHome,
  FaChevronRight,
  FaStethoscope,
  FaCertificate,
  FaClock,
} from "react-icons/fa";

// ─── SHARED NAVBAR ──────────────────────────────────────────────
function GuestNavbar() {
  const navigate = useNavigate();
  return (
    <nav className="bg-[#071330] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <button
          onClick={() => navigate("/guest")}
          className="text-xl font-bold flex items-center gap-2 cursor-pointer"
        >
          <FaPaw className="text-yellow-400" />
          Putri<span className="text-yellow-400">PetCare</span>
        </button>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <button onClick={() => navigate("/guest")} className="hover:text-yellow-400 transition cursor-pointer">Home</button>
          <button onClick={() => navigate("/konsul")} className="text-yellow-400 font-bold cursor-pointer">Konsultasi</button>
          <button onClick={() => navigate("/grooming")} className="hover:text-yellow-400 transition cursor-pointer">Grooming</button>
          <button onClick={() => navigate("/ranap")} className="hover:text-yellow-400 transition cursor-pointer">Rawat Inap</button>
          <button onClick={() => navigate("/vaksin")} className="hover:text-yellow-400 transition cursor-pointer">Vaksinasi</button>
        </div>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-xl text-sm font-semibold transition"
        >
          <FaWhatsapp /> Hubungi Kami
        </a>
      </div>
    </nav>
  );
}

// ─── DATA ────────────────────────────────────────────────────────
const doctors = [
  {
    name: "drh. Sarah Amelia, M.Si",
    title: "Dokter Hewan Umum & Internal Medicine",
    experience: "12 Tahun",
    specialty: ["Kucing", "Anjing", "Kelinci"],
    expertise: ["Diagnosa penyakit dalam", "Penanganan infeksi & virus", "Nutrisi hewan"],
    schedule: "Senin – Jumat, 08.00 – 15.00 WIB",
    education: "FKH Universitas Airlangga",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&auto=format&fit=crop",
    badge: "bg-indigo-100 text-indigo-700",
  },
  {
    name: "drh. Rizky Pratama, M.Vet",
    title: "Spesialis Bedah & Ortopedi Hewan",
    experience: "9 Tahun",
    specialty: ["Anjing", "Kucing", "Reptil"],
    expertise: ["Bedah ortopedi", "Operasi jaringan lunak", "Penanganan darurat trauma"],
    schedule: "Selasa, Kamis & Sabtu, 09.00 – 16.00 WIB",
    education: "FKH Institut Pertanian Bogor",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&auto=format&fit=crop",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    name: "drh. Maya Kusuma, Ph.D",
    title: "Spesialis Dermatologi & Eksotik",
    experience: "8 Tahun",
    specialty: ["Kucing", "Burung", "Reptil", "Hamster"],
    expertise: ["Penyakit kulit & bulu", "Hewan eksotik & non-konvensional", "Alergi & imunologi"],
    schedule: "Rabu & Jumat, 10.00 – 17.00 WIB",
    education: "FKH Universitas Gadjah Mada",
    avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&auto=format&fit=crop",
    badge: "bg-purple-100 text-purple-700",
  },
];

const reviews = [
  {
    name: "Budi Hartanto",
    pet: "Anjing Golden Retriever (Max)",
    rating: 5,
    text: "drh. Sarah sangat teliti dan sabar menjelaskan kondisi Max kepada saya. Diagnosa tepat, obat yang diberikan langsung terasa efeknya dalam 3 hari. Sangat profesional!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    date: "5 hari yang lalu",
    doctor: "drh. Sarah Amelia",
  },
  {
    name: "Lina Kusuma",
    pet: "Kucing British Shorthair (Oliver)",
    rating: 5,
    text: "Membawa Oliver konsultasi untuk masalah kulitnya. drh. Maya langsung bisa mengidentifikasi alerginya dan memberikan treatment yang tepat. Dalam 2 minggu sudah sembuh!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    date: "2 minggu yang lalu",
    doctor: "drh. Maya Kusuma",
  },
  {
    name: "Andi Prasetyo",
    pet: "Anjing Husky (Blu)",
    rating: 5,
    text: "Blu harus operasi ortopedi karena kecelakaan. drh. Rizky sangat berpengalaman dan prosedurnya berjalan lancar. Komunikasinya juga bagus, saya selalu diberitahu perkembangan Blu.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    date: "3 minggu yang lalu",
    doctor: "drh. Rizky Pratama",
  },
];

// ─── MAIN COMPONENT ──────────────────────────────────────────────
export default function KonsultasiDetail() {
  const navigate = useNavigate();
  const [activeDoctor, setActiveDoctor] = useState(0);

  return (
    <div className="bg-slate-50 min-h-screen">
      <GuestNavbar />

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* ── Breadcrumb ── */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
          <button onClick={() => navigate("/guest")} className="flex items-center gap-1 hover:text-indigo-600 transition cursor-pointer">
            <FaHome size={12} /> Home
          </button>
          <FaChevronRight size={10} />
          <span className="text-indigo-600 font-semibold">Konsultasi Dokter</span>
        </nav>

        {/* ── Hero Section ── */}
        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100 mb-10">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-80 md:h-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&auto=format&fit=crop"
                alt="Konsultasi Dokter Hewan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute top-6 left-6 bg-indigo-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase shadow">
                Medical Checkup
              </span>
            </div>
            <div className="flex flex-col justify-center p-10">
              <span className="text-indigo-600 font-bold text-sm uppercase tracking-wider mb-2">
                Konsultasi Medis
              </span>
              <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">
                Konsultasi Dokter Hewan <span className="text-indigo-600">Profesional</span>
              </h1>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Kesehatan anabul dimulai dari diagnosa yang tepat. Tim dokter
                kami siap mendengarkan keluhan dan melakukan pemeriksaan fisik
                menyeluruh untuk hewan kesayangan Anda.
              </p>
              <div className="mt-6 space-y-2.5">
                {["Diagnosa akurat dengan peralatan modern", "Rekam medis digital terintegrasi", "Konsultasi lanjutan via WhatsApp", "Jadwal fleksibel sesuai ketersediaan dokter"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-700 text-sm">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => navigate("/booking")}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 rounded-2xl font-bold transition shadow-lg shadow-indigo-200 cursor-pointer"
                >
                  Booking Konsultasi
                </button>
                <a
                  href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20konsultasi%20dengan%20dokter%20hewan."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white p-3.5 rounded-2xl transition flex items-center justify-center"
                >
                  <FaWhatsapp size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Tim Dokter ── */}
        <div className="mb-14">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Tim <span className="text-indigo-600">Dokter Kami</span>
            </h2>
            <p className="text-slate-500 mt-2 text-sm max-w-xl mx-auto">
              Kenali dokter-dokter hewan kami yang berpengalaman dan berdedikasi tinggi untuk kesehatan anabul Anda.
            </p>
          </div>

          {/* Doctor Tabs */}
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            {doctors.map((doc, i) => (
              <button
                key={i}
                onClick={() => setActiveDoctor(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition cursor-pointer ${
                  activeDoctor === i
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300"
                }`}
              >
                <FaUserMd size={13} />
                {doc.name.split(",")[0]}
              </button>
            ))}
          </div>

          {/* Active Doctor Card */}
          {doctors.map((doc, i) =>
            activeDoctor === i ? (
              <div
                key={i}
                className="max-w-3xl mx-auto bg-white rounded-[2rem] shadow-lg border border-slate-100 overflow-hidden"
              >
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Photo */}
                  <div className="md:col-span-2 relative h-64 md:h-auto">
                    <img
                      src={doc.avatar}
                      alt={doc.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  {/* Info */}
                  <div className="md:col-span-3 p-8">
                    <span className={`${doc.badge} px-3 py-1 rounded-full text-xs font-bold uppercase`}>
                      Dokter Aktif
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 mt-3">{doc.name}</h3>
                    <p className="text-indigo-600 font-semibold text-sm mt-1">{doc.title}</p>

                    <div className="grid grid-cols-2 gap-3 mt-5">
                      <div className="bg-slate-50 rounded-xl p-3">
                        <p className="text-xs text-slate-400 mb-1 flex items-center gap-1"><FaCertificate className="text-indigo-400" /> Pendidikan</p>
                        <p className="text-sm font-semibold text-slate-700">{doc.education}</p>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-3">
                        <p className="text-xs text-slate-400 mb-1 flex items-center gap-1"><FaStethoscope className="text-indigo-400" /> Pengalaman</p>
                        <p className="text-sm font-semibold text-slate-700">{doc.experience}</p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-xs text-slate-400 mb-2 flex items-center gap-1"><FaClock className="text-indigo-400" /> Jadwal Praktik</p>
                      <p className="text-sm font-semibold text-slate-700 bg-indigo-50 px-3 py-2 rounded-xl">{doc.schedule}</p>
                    </div>

                    <div className="mt-4">
                      <p className="text-xs text-slate-400 mb-2">Keahlian Khusus</p>
                      <div className="flex flex-wrap gap-2">
                        {doc.expertise.map((exp) => (
                          <span key={exp} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-xs text-slate-400 mb-2">Hewan Ditangani</p>
                      <div className="flex flex-wrap gap-2">
                        {doc.specialty.map((s) => (
                          <span key={s} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                            <FaPaw size={10} /> {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>

        {/* ── Testimoni ── */}
        <div className="mb-10">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-2 text-center">
            Ulasan <span className="text-indigo-600">Pelanggan</span>
          </h2>
          <p className="text-slate-500 text-sm text-center mb-8">
            Pengalaman nyata dari para pet parents yang mempercayakan hewan mereka kepada kami.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="bg-white rounded-[1.5rem] shadow-md border border-slate-100 p-6 flex flex-col gap-4 hover:shadow-lg transition"
              >
                <div className="flex justify-between items-center">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(r.rating)].map((_, j) => <FaStar key={j} size={14} />)}
                  </div>
                  <span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full font-medium">
                    {r.doctor}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100 mt-auto">
                  <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-100" />
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{r.name}</p>
                    <p className="text-xs text-slate-400">{r.pet} · {r.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Back Button ── */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/guest")}
            className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-semibold transition cursor-pointer"
          >
            <FaArrowLeft /> Kembali ke Beranda
          </button>
        </div>

      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi via WhatsApp"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-2xl z-50 transition"
      >
        <FaWhatsapp size={26} />
      </a>
    </div>
  );
}
