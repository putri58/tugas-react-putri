import { useNavigate } from "react-router-dom";
import {
  FaPaw,
  FaWhatsapp,
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaCut,
  FaUserMd,
  FaBed,
  FaSyringe,
  FaCheckCircle,
  FaHeart,
  FaShieldAlt,
  FaAward,
} from "react-icons/fa";

export default function HomeGuest() {
  const navigate = useNavigate();

  // ─── DATA LAYANAN ───
  const services = [
    {
      title: "Grooming",
      subtitle: "Perawatan Bulu & Kuku",
      desc: "Layanan spa & grooming premium mulai dari mandi wangi, potong bulu, potong kuku, hingga pembersihan telinga. Anabul pulang bersih, wangi, dan bahagia!",
      icon: FaCut,
      color: "bg-pink-100 text-pink-600",
      border: "border-pink-200",
      badge: "bg-pink-100 text-pink-700",
      badgeText: "Pet Spa",
      path: "/grooming",
      img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500&auto=format&fit=crop",
    },
    {
      title: "Konsultasi Dokter Hewan",
      subtitle: "Vet Consultation",
      desc: "Pemeriksaan kesehatan menyeluruh oleh dokter hewan berpengalaman. Diagnosa tepat, penanganan cepat, dan rekam medis digital terintegrasi.",
      icon: FaUserMd,
      color: "bg-indigo-100 text-indigo-600",
      border: "border-indigo-200",
      badge: "bg-indigo-100 text-indigo-700",
      badgeText: "Medical",
      path: "/konsul",
      img: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=500&auto=format&fit=crop",
    },
    {
      title: "Rawat Inap",
      subtitle: "Pet Boarding & Isolation",
      desc: "Fasilitas rawat inap 24 jam dengan pengawasan ketat tenaga medis berpengalaman. Kandang steril, nyaman, dan dilengkapi pemantauan kondisi hewan.",
      icon: FaBed,
      color: "bg-blue-100 text-blue-600",
      border: "border-blue-200",
      badge: "bg-blue-100 text-blue-700",
      badgeText: "Inpatient",
      path: "/ranap",
      img: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?w=500&auto=format&fit=crop",
    },
    {
      title: "Vaksinasi",
      subtitle: "Vaccination Program",
      desc: "Program imunisasi lengkap dan terjadwal untuk melindungi hewan peliharaan Anda dari berbagai penyakit berbahaya. Dengan vaksin berstandar internasional.",
      icon: FaSyringe,
      color: "bg-green-100 text-green-600",
      border: "border-green-200",
      badge: "bg-green-100 text-green-700",
      badgeText: "Immunization",
      path: "/vaksin",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&auto=format&fit=crop",
    },
  ];

  // ─── DATA KEUNGGULAN ───
  const keunggulan = [
    {
      icon: FaUserMd,
      title: "Dokter Berpengalaman",
      desc: "Tim dokter hewan kami memiliki pengalaman 10+ tahun dan sertifikasi internasional.",
    },
    {
      icon: FaShieldAlt,
      title: "Fasilitas Modern",
      desc: "Peralatan medis berteknologi terkini untuk diagnostik yang akurat dan penanganan optimal.",
    },
    {
      icon: FaHeart,
      title: "Penuh Kasih Sayang",
      desc: "Kami memperlakukan setiap hewan seperti anggota keluarga sendiri dengan penuh kelembutan.",
    },
    {
      icon: FaAward,
      title: "Terpercaya Sejak 2010",
      desc: "Lebih dari 15 tahun melayani ribuan hewan peliharaan di Pekanbaru dan sekitarnya.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">

      {/* ═══════════════════════════════════════
          NAVBAR
      ═══════════════════════════════════════ */}
      <nav className="bg-[#071330] text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
          {/* Logo */}
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FaPaw className="text-yellow-400" />
            <span className="text-yellow-400">VetCare</span>
          </h1>

          {/* Menu Links */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-yellow-400 transition">Home</a>
            <a href="#about" className="hover:text-yellow-400 transition">Tentang Kami</a>
            <a href="#services" className="hover:text-yellow-400 transition">Layanan</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Kontak</a>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/loginGuest")}
              className="border border-white/50 px-4 py-2 rounded-xl text-sm hover:bg-white hover:text-[#071330] transition cursor-pointer"
            >
              Login Member
            </button>
            <button
              onClick={() => navigate("/registrasiGuest")}
              className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-semibold text-sm hover:bg-yellow-300 transition cursor-pointer"
            >
              Daftar Membership
            </button>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════ */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-[#071330] via-[#13255e] to-[#3730a3] text-white overflow-hidden"
      >
        {/* Decorative background circles */}
        <div className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px] bg-white/5 rounded-full pointer-events-none" />
        <div className="absolute bottom-[-120px] left-[-60px] w-[350px] h-[350px] bg-yellow-400/10 rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-8 py-28">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left — Text */}
            <div>
              <span className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <FaPaw size={14} /> Klinik Hewan Terpercaya di Pekanbaru
              </span>

              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                Kesehatan Terbaik Untuk{" "}
                <span className="text-yellow-400">Sahabat Berbulu</span> Anda
              </h1>

              <p className="text-lg text-slate-300 mt-6 leading-relaxed max-w-xl">
                VetCare hadir dengan tenaga medis profesional, fasilitas
                modern, dan pelayanan penuh kasih sayang untuk memastikan hewan
                peliharaan Anda selalu sehat dan bahagia.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-10">
                {/* CTA Utama — WhatsApp */}
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Putri%20Pet%20Care%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20layanan%20Anda."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-2xl font-bold text-base transition shadow-lg shadow-green-900/30"
                >
                  <FaWhatsapp size={22} />
                  Hubungi Kami
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold text-base transition"
                >
                  Lihat Layanan
                </a>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-8 mt-12">
                {[
                  ["10.000+", "Hewan Ditangani"],
                  ["98%", "Kepuasan Pelanggan"],
                  ["15+", "Tahun Pengalaman"],
                ].map(([num, label]) => (
                  <div key={label}>
                    <p className="text-3xl font-extrabold text-yellow-400">{num}</p>
                    <p className="text-sm text-slate-400 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-indigo-500/20 rounded-[2.5rem] blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&auto=format&fit=crop"
                alt="Hewan peliharaan sehat di VetCare"
                className="relative rounded-[2.5rem] shadow-2xl w-full object-cover h-[480px]"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white text-slate-800 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="text-green-500" />
                </div>
                <div>
                  <p className="font-bold text-sm">Buka Setiap Hari</p>
                  <p className="text-xs text-slate-500">08.00 – 20.00 WIB</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TENTANG KAMI (ABOUT US)
      ═══════════════════════════════════════ */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800&auto=format&fit=crop"
                alt="Tim Dokter VetCare"
                className="rounded-[2.5rem] shadow-xl w-full object-cover h-[460px]"
              />
              {/* Overlay card */}
              <div className="absolute -bottom-6 -right-6 bg-[#071330] text-white px-6 py-4 rounded-2xl shadow-xl">
                <p className="text-4xl font-extrabold text-yellow-400">15+</p>
                <p className="text-sm text-slate-300 mt-1">Tahun Melayani</p>
              </div>
            </div>

            {/* Right — Text */}
            <div>
              <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-xs font-bold uppercase mb-4">
                Tentang Kami
              </span>

              <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
                VetCare —{" "}
                <span className="text-indigo-600">Mitra Kesehatan</span>{" "}
                Hewan Peliharaan Anda
              </h2>

              <p className="text-slate-600 mt-6 leading-relaxed text-base">
                Berdiri sejak tahun 2010, <strong>VetCare</strong> adalah klinik hewan
                modern yang berkomitmen memberikan pelayanan medis terbaik untuk
                hewan peliharaan kesayangan Anda. Berlokasi di Rumbai, Pekanbaru,
                kami telah melayani lebih dari <strong>10.000 pasien hewan</strong> dengan
                tingkat kepuasan pelanggan mencapai 98%.
              </p>

              {/* Visi Misi */}
              <div className="mt-8 space-y-4">
                <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
                  <h3 className="font-bold text-indigo-700 mb-1">🎯 Visi</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Menjadi klinik hewan terpercaya dan terdepan di Riau yang
                    mengutamakan kesejahteraan hewan dan kepuasan pemiliknya.
                  </p>
                </div>
                <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-5">
                  <h3 className="font-bold text-yellow-700 mb-1">🚀 Misi</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Memberikan layanan medis veteriner berkualitas tinggi, membangun
                    hubungan jangka panjang berbasis kepercayaan, dan terus berinovasi
                    dalam teknologi kesehatan hewan.
                  </p>
                </div>
              </div>

              {/* Keunggulan */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {keunggulan.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="text-indigo-600 text-base" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm">{item.title}</p>
                      <p className="text-slate-500 text-xs leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          LAYANAN UTAMA (SERVICES SHOWCASE)
      ═══════════════════════════════════════ */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-xs font-bold uppercase mb-4">
              Layanan Kami
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900">
              Layanan Utama{" "}
              <span className="text-indigo-600">VetCare</span>
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed">
              Kami menyediakan 4 layanan kesehatan hewan komprehensif yang
              didukung oleh tenaga medis ahli dan fasilitas berstandar tinggi.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`group bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border ${service.border} flex flex-col`}
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    {/* Badge */}
                    <span className={`absolute top-4 left-4 ${service.badge} px-3 py-1 rounded-full text-xs font-bold`}>
                      {service.badgeText}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Icon + Title */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-9 h-9 ${service.color.split(" ")[0]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`${service.color.split(" ")[1]} text-base`} />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-slate-800 text-base leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-xs text-slate-400">{service.subtitle}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed mt-3 flex-1">
                      {service.desc}
                    </p>

                    {/* Detail Button */}
                    <button
                      onClick={() => navigate(service.path)}
                      className="mt-5 w-full border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm py-2.5 rounded-xl transition cursor-pointer"
                    >
                      Detail Layanan →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA WhatsApp bawah services */}
          <div className="text-center mt-14">
            <p className="text-slate-500 mb-5 text-sm">
              Butuh informasi lebih lanjut atau ingin membuat janji? Hubungi kami langsung.
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Putri%20Pet%20Care%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-2xl font-bold transition shadow-lg shadow-green-200"
            >
              <FaWhatsapp size={20} />
              Hubungi Kami via WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════ */}
      <footer id="contact" className="bg-[#071330] text-white">

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12">

            {/* Col 1 — Brand & About */}
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
                <FaPaw className="text-yellow-400" />
                Putri<span className="text-yellow-400">PetCare</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Klinik hewan modern dan terpercaya di Pekanbaru, Riau.
                Melayani dengan sepenuh hati sejak 2010 untuk kesehatan
                dan kebahagiaan hewan peliharaan Anda.
              </p>
              {/* Social Media */}
              <div className="flex gap-4 mt-6">
                <a
                  href="https://instagram.com/putripetcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram VetCare"
                  className="w-10 h-10 bg-white/10 hover:bg-pink-500 rounded-xl flex items-center justify-center transition"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="https://facebook.com/putripetcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook VetCare"
                  className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-xl flex items-center justify-center transition"
                >
                  <FaFacebook size={18} />
                </a>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp VetCare"
                  className="w-10 h-10 bg-white/10 hover:bg-green-500 rounded-xl flex items-center justify-center transition"
                >
                  <FaWhatsapp size={18} />
                </a>
              </div>
            </div>

            {/* Col 2 — Jam Operasional */}
            <div>
              <h3 className="font-bold text-base mb-5 text-white flex items-center gap-2">
                <FaClock className="text-yellow-400" /> Jam Operasional
              </h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex justify-between">
                  <span>Senin – Jumat</span>
                  <span className="text-white font-medium">08.00 – 20.00 WIB</span>
                </li>
                <li className="flex justify-between">
                  <span>Sabtu – Minggu</span>
                  <span className="text-white font-medium">08.00 – 17.00 WIB</span>
                </li>
                <li className="flex justify-between">
                  <span>Hari Libur Nasional</span>
                  <span className="text-yellow-400 font-medium">Buka (On-call)</span>
                </li>
              </ul>
              <div className="mt-6 bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                <p className="text-green-400 text-sm font-semibold">🟢 Saat Ini: Buka</p>
                <p className="text-slate-400 text-xs mt-1">
                  Untuk kondisi darurat, hubungi kami via WhatsApp kapan saja.
                </p>
              </div>
            </div>

            {/* Col 3 — Kontak & Alamat */}
            <div>
              <h3 className="font-bold text-base mb-5 text-white flex items-center gap-2">
                <FaMapMarkerAlt className="text-yellow-400" /> Kontak & Alamat
              </h3>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Jl. Umban Sari No. 1, Rumbai,<br />
                    Pekanbaru, Riau 28265
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhone className="text-yellow-400 flex-shrink-0" />
                  <a
                    href="tel:+6281234567890"
                    className="hover:text-white transition"
                  >
                    +62 812-3456-7890
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-yellow-400 flex-shrink-0" />
                  <a
                    href="mailto:info@putripetcare.com"
                    className="hover:text-white transition"
                  >
                    info@putripetcare.com
                  </a>
                </li>
              </ul>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/6281234567890?text=Halo%20Putri%20Pet%20Care%2C%20saya%20ingin%20konsultasi."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 bg-green-500 hover:bg-green-400 text-white px-5 py-3 rounded-xl text-sm font-semibold transition"
              >
                <FaWhatsapp size={16} />
                Chat WhatsApp
              </a>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-slate-500">
            <p>© 2025 VetCare. Semua hak cipta dilindungi.</p>
            <p className="flex items-center gap-1">
              Dibuat dengan <FaHeart className="text-red-400 text-xs" /> untuk kesehatan hewan peliharaan Anda
            </p>
          </div>
        </div>

      </footer>

      {/* ═══════════════════════════════════════
          FLOATING WHATSAPP BUTTON
      ═══════════════════════════════════════ */}
      <a
        href="https://wa.me/6281234567890?text=Halo%20Putri%20Pet%20Care%2C%20saya%20ingin%20bertanya."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi kami via WhatsApp"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-2xl shadow-green-900/40 transition z-50 flex items-center justify-center"
      >
        <FaWhatsapp size={28} />
      </a>

    </div>
  );
}
