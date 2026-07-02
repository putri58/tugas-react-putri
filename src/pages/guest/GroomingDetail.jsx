import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaWhatsapp,
  FaCut,
  FaStar,
  FaPaw,
  FaHome,
  FaChevronRight,
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
          <button onClick={() => navigate("/grooming")} className="text-yellow-400 font-bold cursor-pointer">Grooming</button>
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
const packages = [
  {
    name: "Basic Grooming",
    price: "Rp 75.000",
    priceNote: "/ sesi",
    color: "border-slate-200",
    badgeColor: "bg-slate-100 text-slate-600",
    btnColor: "bg-slate-700 hover:bg-slate-800",
    popular: false,
    benefits: [
      "Mandi dengan shampoo standar",
      "Pengeringan dengan hair dryer",
      "Pemotongan kuku",
      "Pembersihan telinga",
      "Parfum ringan",
    ],
    notIncluded: ["Potong bulu / styling", "Treatment kutu & jamur"],
  },
  {
    name: "Full Grooming",
    price: "Rp 150.000",
    priceNote: "/ sesi",
    color: "border-pink-400 ring-2 ring-pink-300",
    badgeColor: "bg-pink-100 text-pink-700",
    btnColor: "bg-pink-600 hover:bg-pink-700",
    popular: true,
    benefits: [
      "Mandi dengan shampoo premium",
      "Pengeringan & blow dry styling",
      "Pemotongan bulu sesuai breed",
      "Pemotongan kuku & kikir",
      "Pembersihan telinga mendalam",
      "Parfum tahan lama",
      "Bandana / aksesoris gratis",
    ],
    notIncluded: ["Treatment kutu & jamur"],
  },
  {
    name: "Medicated Grooming",
    price: "Rp 220.000",
    priceNote: "/ sesi",
    color: "border-purple-200",
    badgeColor: "bg-purple-100 text-purple-700",
    btnColor: "bg-purple-600 hover:bg-purple-700",
    popular: false,
    benefits: [
      "Semua layanan Full Grooming",
      "Shampoo medis anti-jamur / anti-kutu",
      "Treatment kulit sensitif atau bermasalah",
      "Konsultasi groomer berpengalaman",
      "Laporan kondisi kulit hewan",
      "Follow-up WA setelah sesi",
    ],
    notIncluded: [],
  },
];

const reviews = [
  {
    name: "Rina Wulandari",
    pet: "Anjing Poodle (Coco)",
    rating: 5,
    text: "Anabul saya yang biasanya susah diajak grooming malah senang di sini! Petugasnya sangat sabar dan hasilnya rapi banget. Poodle saya jadi kaya habis ke salon!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    date: "3 hari yang lalu",
    package: "Full Grooming",
  },
  {
    name: "Deni Firmansyah",
    pet: "Kucing Persia (Sultan)",
    rating: 5,
    text: "Saya pilih Medicated Grooming karena kucing saya ada masalah kulit. Hasilnya luar biasa! Dalam 2 sesi, kulitnya sudah jauh lebih baik. Groomer-nya juga kasih saran yang berguna.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    date: "1 minggu yang lalu",
    package: "Medicated Grooming",
  },
  {
    name: "Sari Dewi",
    pet: "Kucing Ragdoll (Mochi)",
    rating: 4,
    text: "Pelayanan cepat dan bersih. Tempat tunggunya juga nyaman. Mochi saya selesai dalam 1.5 jam dan pulang dengan bandana lucu!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    date: "2 minggu yang lalu",
    package: "Full Grooming",
  },
];

// ─── MAIN COMPONENT ──────────────────────────────────────────────
export default function GroomingDetail() {
  const navigate = useNavigate();
  const [activePackage, setActivePackage] = useState(1); // default: Full Grooming

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
          <span className="text-pink-600 font-semibold">Grooming</span>
        </nav>

        {/* ── Hero Section ── */}
        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100 mb-10">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-80 md:h-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&auto=format&fit=crop"
                alt="Grooming & Spa Premium"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute top-6 left-6 bg-pink-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase shadow">
                Pet Spa
              </span>
            </div>
            <div className="flex flex-col justify-center p-10">
              <span className="text-pink-500 font-bold text-sm uppercase tracking-wider mb-2">
                Grooming & Spa
              </span>
              <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">
                Grooming & Spa <span className="text-pink-600">Premium</span>
              </h1>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Manjakan anabul Anda dengan perawatan spa terbaik. Dari mandi
                wangi, potong bulu, hingga pembersihan telinga — kami
                memastikan hewan Anda pulang bersih, wangi, dan bahagia.
              </p>
              <div className="mt-6 space-y-2.5">
                {["Stylist grooming berpengalaman 5+ tahun", "Shampoo & kondisioner premium ramah hewan", "Ruang grooming bersih & steril", "Antrean online — tanpa menunggu lama"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-700 text-sm">
                    <FaCheckCircle className="text-pink-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => navigate("/booking")}
                  className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-3.5 rounded-2xl font-bold transition shadow-lg shadow-pink-200 cursor-pointer"
                >
                  Ambil Antrean
                </button>
                <a
                  href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20tanya%20tentang%20layanan%20Grooming."
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

        {/* ── Paket Grooming ── */}
        <div className="mb-14">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Pilih <span className="text-pink-600">Paket Grooming</span>
            </h2>
            <p className="text-slate-500 mt-2 text-sm max-w-xl mx-auto">
              Kami menyediakan 3 paket yang bisa disesuaikan dengan kebutuhan dan kondisi hewan peliharaan Anda.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            {packages.map((pkg, i) => (
              <button
                key={i}
                onClick={() => setActivePackage(i)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition cursor-pointer ${
                  activePackage === i
                    ? "bg-pink-600 text-white shadow-lg shadow-pink-200"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-pink-300"
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
                    <p className="text-4xl font-extrabold text-pink-600">{pkg.price}</p>
                    <p className="text-slate-400 text-sm">{pkg.priceNote}</p>
                  </div>
                </div>

                <div className="space-y-2.5 mb-6">
                  {pkg.benefits.map((b) => (
                    <div key={b} className="flex items-center gap-3 text-slate-700 text-sm">
                      <FaCheckCircle className="text-green-500 flex-shrink-0" /> {b}
                    </div>
                  ))}
                  {pkg.notIncluded.map((b) => (
                    <div key={b} className="flex items-center gap-3 text-slate-400 text-sm line-through">
                      <span className="w-4 h-4 border border-slate-300 rounded-full flex-shrink-0" /> {b}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => navigate("/booking")}
                  className={`w-full ${pkg.btnColor} text-white py-3.5 rounded-2xl font-bold transition cursor-pointer`}
                >
                  Pesan Paket Ini
                </button>
              </div>
            ) : null
          )}
        </div>

        {/* ── Testimoni ── */}
        <div className="mb-10">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-2 text-center">
            Ulasan <span className="text-pink-600">Pelanggan</span>
          </h2>
          <p className="text-slate-500 text-sm text-center mb-8">
            Apa kata mereka setelah mencoba layanan grooming kami?
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
                  <span className="text-xs bg-pink-50 text-pink-600 px-2 py-1 rounded-full font-medium">
                    {r.package}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100 mt-auto">
                  <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-pink-100" />
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
