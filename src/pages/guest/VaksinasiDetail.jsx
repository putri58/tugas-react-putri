import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaWhatsapp,
  FaSyringe,
  FaStar,
  FaPaw,
  FaHome,
  FaChevronRight,
  FaCat,
  FaDog,
  FaCalendarAlt,
  FaShieldAlt,
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
          <button onClick={() => navigate("/konsul")} className="hover:text-yellow-400 transition cursor-pointer">Konsultasi</button>
          <button onClick={() => navigate("/grooming")} className="hover:text-yellow-400 transition cursor-pointer">Grooming</button>
          <button onClick={() => navigate("/ranap")} className="hover:text-yellow-400 transition cursor-pointer">Rawat Inap</button>
          <button onClick={() => navigate("/vaksin")} className="text-yellow-400 font-bold cursor-pointer">Vaksinasi</button>
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
const vaccineCats = [
  {
    type: "cat",
    name: "Vaksin F3 (FVRCP)",
    target: "Kucing",
    price: "Rp 120.000",
    schedule: "Mulai usia 8 minggu, diulang setiap 1 tahun",
    diseases: ["Feline Viral Rhinotracheitis (FVR)", "Calicivirus (FCV)", "Panleukopenia (FPV)"],
    color: "border-purple-200 bg-purple-50",
    badgeColor: "bg-purple-100 text-purple-700",
    icon: "🐱",
  },
  {
    type: "cat",
    name: "Vaksin F4 (FVRCP + Chlamydia)",
    target: "Kucing",
    price: "Rp 160.000",
    schedule: "Mulai usia 9 minggu, diulang setiap 1 tahun",
    diseases: ["Semua perlindungan F3", "Chlamydophila felis (infeksi mata & pernapasan)"],
    color: "border-indigo-200 bg-indigo-50",
    badgeColor: "bg-indigo-100 text-indigo-700",
    icon: "🐱",
  },
  {
    type: "cat",
    name: "Vaksin Rabies (Kucing)",
    target: "Kucing",
    price: "Rp 90.000",
    schedule: "Usia 3 bulan ke atas, diulang setiap 1–3 tahun",
    diseases: ["Virus Rabies (Lyssavirus)", "Wajib untuk kucing yang sering keluar rumah"],
    color: "border-red-200 bg-red-50",
    badgeColor: "bg-red-100 text-red-700",
    icon: "🐱",
  },
];

const vaccineDogs = [
  {
    type: "dog",
    name: "Vaksin DHPPiL (5 in 1)",
    target: "Anjing",
    price: "Rp 180.000",
    schedule: "Mulai usia 6–8 minggu (puppy series), booster tahunan",
    diseases: ["Distemper", "Hepatitis", "Parvovirus", "Parainfluenza", "Leptospirosis"],
    color: "border-amber-200 bg-amber-50",
    badgeColor: "bg-amber-100 text-amber-700",
    icon: "🐶",
  },
  {
    type: "dog",
    name: "Vaksin Rabies (Anjing)",
    target: "Anjing",
    price: "Rp 90.000",
    schedule: "Usia 3 bulan ke atas, wajib diulang setiap tahun",
    diseases: ["Virus Rabies — zoonosis berbahaya", "Kewajiban hukum di beberapa daerah"],
    color: "border-orange-200 bg-orange-50",
    badgeColor: "bg-orange-100 text-orange-700",
    icon: "🐶",
  },
  {
    type: "dog",
    name: "Vaksin Bordetella",
    target: "Anjing",
    price: "Rp 110.000",
    schedule: "Anjuran untuk anjing yang sering ke tempat penitipan / grooming",
    diseases: ["Bordetella bronchiseptica (Kennel Cough)", "Batuk menular antar anjing"],
    color: "border-teal-200 bg-teal-50",
    badgeColor: "bg-teal-100 text-teal-700",
    icon: "🐶",
  },
];

const packages = [
  {
    name: "Paket Starter (Anak Hewan)",
    price: "Rp 350.000",
    priceNote: "/ paket lengkap",
    color: "border-emerald-200",
    badgeColor: "bg-emerald-100 text-emerald-700",
    btnColor: "bg-emerald-600 hover:bg-emerald-700",
    includes: ["3x suntik vaksin dasar (series)", "Konsultasi pra-vaksin gratis", "Sertifikat vaksin resmi", "Kartu jadwal vaksin berikutnya"],
  },
  {
    name: "Paket Tahunan (Dewasa)",
    price: "Rp 280.000",
    priceNote: "/ tahun",
    color: "border-indigo-400 ring-2 ring-indigo-300",
    badgeColor: "bg-indigo-100 text-indigo-700",
    btnColor: "bg-indigo-600 hover:bg-indigo-700",
    includes: ["Vaksin tahunan komplit (F4 / DHPPiL)", "Pemeriksaan fisik sebelum vaksin", "Sertifikat vaksin resmi", "Pengingat jadwal otomatis via WA", "Diskon 10% untuk vaksin kedua"],
    popular: true,
  },
  {
    name: "Paket Lengkap + Rabies",
    price: "Rp 380.000",
    priceNote: "/ tahun",
    color: "border-red-200",
    badgeColor: "bg-red-100 text-red-700",
    btnColor: "bg-red-600 hover:bg-red-700",
    includes: ["Semua benefit Paket Tahunan", "Vaksin Rabies termasuk", "Sertifikat Rabies untuk perjalanan", "Rekam medis digital terintegrasi"],
  },
];

const reviews = [
  {
    name: "Putri Agustin",
    pet: "Kucing Persia (Luna)",
    rating: 5,
    text: "Sangat terbantu dengan fitur pengingat jadwal vaksin otomatis via WA! Dokternya juga ramah dan sabar menjelaskan jenis vaksin yang tepat untuk Luna yang usianya baru 3 bulan.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    date: "4 hari yang lalu",
    package: "Paket Starter",
  },
  {
    name: "Agus Mulyadi",
    pet: "Anjing Siberian Husky (Thor)",
    rating: 5,
    text: "Thor sudah vaksin DHPPiL dan Rabies sekaligus dengan Paket Lengkap. Prosesnya cepat, tidak perlu antri lama. Sertifikatnya juga langsung jadi untuk keperluan perjalanan.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    date: "1 minggu yang lalu",
    package: "Paket Lengkap + Rabies",
  },
  {
    name: "Nisa Aulia",
    pet: "Kucing Ragdoll (Mochi)",
    rating: 5,
    text: "Sudah 3 tahun berturut-turut vaksin tahunan di sini. Selalu diingatkan via WA sebelum jadwal tiba. Pelayanannya konsisten bagus dan harganya sangat worth it!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    date: "2 minggu yang lalu",
    package: "Paket Tahunan",
  },
];

// ─── MAIN COMPONENT ──────────────────────────────────────────────
export default function VaksinasiDetail() {
  const navigate = useNavigate();
  const [activeAnimal, setActiveAnimal] = useState("cat"); // "cat" | "dog"
  const [activePackage, setActivePackage] = useState(1);    // default: Paket Tahunan

  const displayedVaccines = activeAnimal === "cat" ? vaccineCats : vaccineDogs;

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
          <span className="text-emerald-600 font-semibold">Vaksinasi</span>
        </nav>

        {/* ── Hero Section ── */}
        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100 mb-10">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-80 md:h-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop"
                alt="Vaksinasi Hewan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute top-6 left-6 bg-emerald-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase shadow">
                Immunization
              </span>
            </div>
            <div className="flex flex-col justify-center p-10">
              <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider mb-2">
                Program Vaksinasi
              </span>
              <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">
                Vaksinasi <span className="text-emerald-600">Lengkap & Terjadwal</span>
              </h1>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Mencegah lebih baik daripada mengobati. Lindungi hewan
                kesayangan Anda dari virus berbahaya dengan program vaksinasi
                yang tepat waktu, aman, dan berstandar internasional.
              </p>
              <div className="mt-6 space-y-2.5">
                {["Vaksin berkualitas standar internasional", "Sertifikat vaksin resmi & diakui", "Konsultasi pra-vaksin gratis", "Pengingat jadwal otomatis via WhatsApp"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-700 text-sm">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => navigate("/booking")}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-2xl font-bold transition shadow-lg shadow-emerald-200 cursor-pointer"
                >
                  Daftar Vaksin Sekarang
                </button>
                <a
                  href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20tanya%20tentang%20jadwal%20vaksinasi."
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

        {/* ── Daftar Jenis Vaksin ── */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Jenis <span className="text-emerald-600">Vaksin Tersedia</span>
            </h2>
            <p className="text-slate-500 mt-2 text-sm max-w-xl mx-auto">
              Pilih jenis hewan peliharaan Anda untuk melihat daftar vaksin yang kami sediakan.
            </p>
          </div>

          {/* Animal Toggle */}
          <div className="flex justify-center gap-3 mb-8">
            <button
              onClick={() => setActiveAnimal("cat")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition cursor-pointer ${
                activeAnimal === "cat"
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-200"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-purple-300"
              }`}
            >
              <FaCat /> Kucing
            </button>
            <button
              onClick={() => setActiveAnimal("dog")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition cursor-pointer ${
                activeAnimal === "dog"
                  ? "bg-amber-500 text-white shadow-lg shadow-amber-200"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-amber-300"
              }`}
            >
              <FaDog /> Anjing
            </button>
          </div>

          {/* Vaccine Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {displayedVaccines.map((vaccine, i) => (
              <div
                key={i}
                className={`bg-white rounded-[1.8rem] shadow-md border-2 ${vaccine.color} p-7 hover:shadow-lg transition flex flex-col`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`${vaccine.badgeColor} px-3 py-1 rounded-full text-xs font-bold uppercase`}>
                      {vaccine.icon} {vaccine.target}
                    </span>
                    <h3 className="font-extrabold text-slate-900 text-lg mt-3 leading-tight">{vaccine.name}</h3>
                  </div>
                  <div className="text-right flex-shrink-0 ml-3">
                    <p className="text-2xl font-extrabold text-emerald-600">{vaccine.price}</p>
                    <p className="text-xs text-slate-400">/ dosis</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-slate-400 mb-2 flex items-center gap-1">
                    <FaCalendarAlt className="text-emerald-500" /> Jadwal
                  </p>
                  <p className="text-sm text-slate-600 bg-emerald-50 px-3 py-2 rounded-xl leading-relaxed">
                    {vaccine.schedule}
                  </p>
                </div>

                <div className="flex-1">
                  <p className="text-xs text-slate-400 mb-2 flex items-center gap-1">
                    <FaShieldAlt className="text-emerald-500" /> Perlindungan terhadap
                  </p>
                  <div className="space-y-1.5">
                    {vaccine.diseases.map((d) => (
                      <div key={d} className="flex items-start gap-2 text-slate-700 text-sm">
                        <FaCheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={12} />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => navigate("/booking")}
                  className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-2xl font-bold text-sm transition cursor-pointer"
                >
                  Daftar Vaksin Ini
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ── Paket Vaksin ── */}
        <div className="mb-14">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Paket <span className="text-emerald-600">Hemat Vaksinasi</span>
            </h2>
            <p className="text-slate-500 mt-2 text-sm max-w-xl mx-auto">
              Hemat lebih banyak dengan memilih paket vaksinasi yang sudah kami rancang khusus.
            </p>
          </div>

          {/* Package Tabs */}
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            {packages.map((pkg, i) => (
              <button
                key={i}
                onClick={() => setActivePackage(i)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition cursor-pointer ${
                  activePackage === i
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-emerald-300"
                }`}
              >
                {pkg.name}
                {pkg.popular && (
                  <span className="ml-2 bg-yellow-400 text-black text-xs px-2 py-0.5 rounded-full font-bold">
                    Terlaris
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Active Package Card */}
          {packages.map((pkg, i) =>
            activePackage === i ? (
              <div
                key={i}
                className={`max-w-2xl mx-auto bg-white rounded-[2rem] shadow-lg border-2 ${pkg.color} p-8`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className={`${pkg.badgeColor} px-3 py-1 rounded-full text-xs font-bold uppercase`}>
                      {pkg.popular ? "⭐ Paling Populer" : "Paket"}
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 mt-2">{pkg.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-extrabold text-emerald-600">{pkg.price}</p>
                    <p className="text-slate-400 text-sm">{pkg.priceNote}</p>
                  </div>
                </div>
                <div className="space-y-2.5 mb-6">
                  {pkg.includes.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-slate-700 text-sm">
                      <FaCheckCircle className="text-green-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => navigate("/booking")}
                  className={`w-full ${pkg.btnColor} text-white py-3.5 rounded-2xl font-bold transition cursor-pointer`}
                >
                  Pilih Paket Ini
                </button>
              </div>
            ) : null
          )}
        </div>

        {/* ── Testimoni ── */}
        <div className="mb-10">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-2 text-center">
            Ulasan <span className="text-emerald-600">Pelanggan</span>
          </h2>
          <p className="text-slate-500 text-sm text-center mb-8">
            Mereka sudah melindungi hewan peliharaan mereka dengan program vaksinasi kami.
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
                  <span className="text-xs bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full font-medium">
                    {r.package}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100 mt-auto">
                  <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-100" />
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
