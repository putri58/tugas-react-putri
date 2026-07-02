import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaWhatsapp,
  FaBed,
  FaStar,
  FaPaw,
  FaHome,
  FaChevronRight,
  FaVideo,
  FaThermometerHalf,
  FaUtensils,
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
          <button onClick={() => navigate("/ranap")} className="text-yellow-400 font-bold cursor-pointer">Rawat Inap</button>
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
const rooms = [
  {
    name: "Kandang Standar",
    price: "Rp 80.000",
    priceNote: "/ hari",
    color: "border-slate-200",
    badgeColor: "bg-slate-100 text-slate-600",
    btnColor: "bg-slate-700 hover:bg-slate-800",
    popular: false,
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&auto=format&fit=crop",
    desc: "Kandang bersih dan nyaman untuk perawatan pasca operasi ringan atau observasi singkat.",
    fasilitas: [
      "Kandang stainless steel anti-karat",
      "Alas tidur bersih & diganti setiap hari",
      "Pemberian makan 2x sehari",
      "Monitoring kondisi oleh perawat",
      "Laporan harian via WhatsApp",
    ],
    notIncluded: ["AC individu", "CCTV di kandang", "Ruang isolasi khusus"],
  },
  {
    name: "Kamar Premium",
    price: "Rp 150.000",
    priceNote: "/ hari",
    color: "border-blue-400 ring-2 ring-blue-300",
    badgeColor: "bg-blue-100 text-blue-700",
    btnColor: "bg-blue-600 hover:bg-blue-700",
    popular: true,
    img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&auto=format&fit=crop",
    desc: "Kamar rawat inap ber-AC dengan pengawasan CCTV 24 jam dan fasilitas lengkap.",
    fasilitas: [
      "Kamar ber-AC & bebas stres",
      "CCTV live monitoring (akses owner)",
      "Tempat tidur khusus hewan nyaman",
      "Pemberian makan 3x sehari (sesuai diet)",
      "Pemeriksaan dokter harian",
      "Laporan kondisi 2x sehari via WA",
    ],
    notIncluded: ["Ruang isolasi khusus penyakit menular"],
  },
  {
    name: "Ruang Isolasi",
    price: "Rp 200.000",
    priceNote: "/ hari",
    color: "border-red-200",
    badgeColor: "bg-red-100 text-red-700",
    btnColor: "bg-red-600 hover:bg-red-700",
    popular: false,
    img: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?w=600&auto=format&fit=crop",
    desc: "Ruang isolasi khusus untuk hewan dengan penyakit infeksius atau pasca operasi besar dengan pengawasan intensif.",
    fasilitas: [
      "Ruangan terpisah & tersegel — bebas kontaminasi",
      "Monitoring intensif 24 jam oleh dokter",
      "Infus, obat-obatan & terapi khusus",
      "CCTV & sensor suhu ruangan",
      "Protokol sterilisasi ketat",
      "Laporan kondisi real-time via WA",
    ],
    notIncluded: [],
  },
];

const facilities = [
  { icon: FaVideo, title: "CCTV Monitoring 24 Jam", desc: "Pantau kondisi hewan Anda secara langsung melalui link akses CCTV yang kami kirimkan." },
  { icon: FaThermometerHalf, title: "Sensor Suhu & Kelembaban", desc: "Setiap ruang dilengkapi sensor otomatis untuk memastikan kondisi lingkungan tetap ideal." },
  { icon: FaUtensils, title: "Diet & Nutrisi Terjadwal", desc: "Program makan harian disesuaikan dengan kebutuhan medis dan kondisi kesehatan hewan." },
  { icon: FaShieldAlt, title: "Protokol Sterilisasi Ketat", desc: "Seluruh kandang dan ruang perawatan disterilkan setiap hari dengan disinfektan standar medis." },
];

const reviews = [
  {
    name: "Hendra Wijaya",
    pet: "Anjing Labrador (Zeus)",
    rating: 5,
    text: "Zeus harus rawat inap 5 hari pasca operasi. Fasilitas Kamar Premium-nya luar biasa, saya bisa pantau lewat CCTV kapan saja. Laporan hariannya juga sangat detail dan reassuring!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    date: "1 minggu yang lalu",
    room: "Kamar Premium",
  },
  {
    name: "Fitri Handayani",
    pet: "Kucing Anggora (Bella)",
    rating: 5,
    text: "Bella kena infeksi dan harus isolasi. Staf sangat profesional dalam menangani situasi darurat. Setiap 12 jam saya dapat update kondisi Bella. Alhamdulillah cepat sembuh!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    date: "2 minggu yang lalu",
    room: "Ruang Isolasi",
  },
  {
    name: "Taufik Rahman",
    pet: "Kelinci (Bubu)",
    rating: 4,
    text: "Harga Kandang Standar sangat terjangkau tapi pelayanannya tidak murahan. Bubu dirawat dengan baik dan dipantau secara rutin. Tempatnya bersih dan tidak bau.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    date: "3 minggu yang lalu",
    room: "Kandang Standar",
  },
];

// ─── MAIN COMPONENT ──────────────────────────────────────────────
export default function RawatInapDetail() {
  const navigate = useNavigate();
  const [activeRoom, setActiveRoom] = useState(1); // default: Kamar Premium

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
          <span className="text-blue-600 font-semibold">Rawat Inap</span>
        </nav>

        {/* ── Hero Section ── */}
        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100 mb-10">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-80 md:h-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?w=800&auto=format&fit=crop"
                alt="Rawat Inap Hewan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase shadow">
                24/7 Monitoring
              </span>
            </div>
            <div className="flex flex-col justify-center p-10">
              <span className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-2">
                Rawat Inap
              </span>
              <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">
                Rawat Inap <span className="text-blue-600">Eksklusif & Aman</span>
              </h1>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Kami menyediakan fasilitas rawat inap yang tenang dengan
                pengawasan tenaga medis 24 jam. Setiap ruang dijaga
                kebersihannya dan disesuaikan dengan kebutuhan pemulihan hewan.
              </p>
              <div className="mt-6 space-y-2.5">
                {["CCTV live monitoring — owner bisa pantau kapan saja", "AC & sensor suhu di setiap ruangan", "Pemeriksaan dokter minimal 1x sehari", "Laporan kondisi berkala via WhatsApp"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-700 text-sm">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => navigate("/booking")}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-2xl font-bold transition shadow-lg shadow-blue-200 cursor-pointer"
                >
                  Cek Ketersediaan
                </button>
                <a
                  href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20tanya%20tentang%20rawat%20inap%20untuk%20hewan%20saya."
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

        {/* ── Fasilitas Unggulan ── */}
        <div className="mb-12">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6 text-center">
            Sistem <span className="text-blue-600">Pemantauan 24 Jam</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-5">
            {facilities.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="bg-white rounded-2xl shadow-md border border-slate-100 p-6 text-center hover:shadow-lg transition">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm mb-2">{f.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Pilih Kamar ── */}
        <div className="mb-14">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Pilih <span className="text-blue-600">Tipe Kamar</span>
            </h2>
            <p className="text-slate-500 mt-2 text-sm max-w-xl mx-auto">
              Tersedia 3 pilihan kamar rawat inap yang dapat disesuaikan dengan kebutuhan medis hewan Anda.
            </p>
          </div>

          {/* Room Tabs */}
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            {rooms.map((room, i) => (
              <button
                key={i}
                onClick={() => setActiveRoom(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition cursor-pointer ${
                  activeRoom === i
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300"
                }`}
              >
                <FaBed size={13} />
                {room.name}
                {room.popular && (
                  <span className="ml-1 bg-yellow-400 text-black text-xs px-2 py-0.5 rounded-full font-bold">
                    Populer
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Active Room Card */}
          {rooms.map((room, i) =>
            activeRoom === i ? (
              <div
                key={i}
                className={`max-w-3xl mx-auto bg-white rounded-[2rem] shadow-lg border-2 ${room.color} overflow-hidden`}
              >
                {/* Room Image */}
                <div className="relative h-52 overflow-hidden">
                  <img src={room.img} alt={room.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-6 text-white">
                    <h3 className="text-xl font-extrabold">{room.name}</h3>
                    <p className="text-sm text-white/80">{room.desc}</p>
                  </div>
                </div>
                {/* Details */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className={`${room.badgeColor} px-3 py-1 rounded-full text-xs font-bold uppercase`}>
                      {room.popular ? "⭐ Paling Diminati" : "Tersedia"}
                    </span>
                    <div className="text-right">
                      <p className="text-4xl font-extrabold text-blue-600">{room.price}</p>
                      <p className="text-slate-400 text-sm">{room.priceNote}</p>
                    </div>
                  </div>
                  <div className="space-y-2.5 mb-6">
                    {room.fasilitas.map((f) => (
                      <div key={f} className="flex items-center gap-3 text-slate-700 text-sm">
                        <FaCheckCircle className="text-green-500 flex-shrink-0" /> {f}
                      </div>
                    ))}
                    {room.notIncluded.map((f) => (
                      <div key={f} className="flex items-center gap-3 text-slate-400 text-sm line-through">
                        <span className="w-4 h-4 border border-slate-300 rounded-full flex-shrink-0" /> {f}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => navigate("/booking")}
                    className={`w-full ${room.btnColor} text-white py-3.5 rounded-2xl font-bold transition cursor-pointer`}
                  >
                    Pesan Kamar Ini
                  </button>
                </div>
              </div>
            ) : null
          )}
        </div>

        {/* ── Testimoni ── */}
        <div className="mb-10">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-2 text-center">
            Ulasan <span className="text-blue-600">Pelanggan</span>
          </h2>
          <p className="text-slate-500 text-sm text-center mb-8">
            Pengalaman pemilik hewan yang telah menggunakan layanan rawat inap kami.
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
                  <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-medium">
                    {r.room}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100 mt-auto">
                  <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-100" />
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
