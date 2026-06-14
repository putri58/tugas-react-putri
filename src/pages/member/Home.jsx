import React from "react";
import {
  FaPaw,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStar,
  FaGift,
  FaUserMd,
  FaStethoscope,
  FaSyringe,
  FaHospital,
  FaCut,
  FaCheckCircle,
  FaArrowRight
} from "react-icons/fa";

export default function MemberPage() {
  // Data membership
  const memberships = [
    {
      name: "Silver",
      price: "Rp 50.000",
      period: "/ Tahun",
      benefits: ["Diskon layanan 5%", "Reminder vaksin", "Promo bulanan"],
      popular: false,
      theme: {
        card: "bg-white border border-slate-200 hover:border-indigo-300",
        accent: "text-slate-600",
        priceColor: "text-slate-800",
        button: "bg-slate-800 hover:bg-slate-900 text-white shadow-md",
        tag: "hidden"
      }
    },
    {
      name: "Gold",
      price: "Rp 150.000",
      period: "/ Tahun",
      benefits: [
        "Diskon layanan 10%",
        "Prioritas booking",
        "Voucher ulang tahun hewan",
        "Loyalty Point 2x",
      ],
      popular: true,
      theme: {
        card: "bg-white border-2 border-amber-500 relative shadow-xl md:scale-105 z-10 ring-4 ring-amber-500/10",
        accent: "text-amber-600",
        priceColor: "text-slate-900",
        button: "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg shadow-amber-500/20",
        tag: "block"
      }
    },
    {
      name: "Platinum",
      price: "Rp 300.000",
      period: "/ Tahun",
      benefits: [
        "Diskon layanan 15%",
        "Check-up gratis tahunan",
        "Konsultasi prioritas",
        "Loyalty Point 3x",
      ],
      popular: false,
      theme: {
        card: "bg-slate-900 text-white border border-slate-800 shadow-xl",
        accent: "text-indigo-400",
        priceColor: "text-white",
        button: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30",
        tag: "hidden"
      }
    },
  ];

  // Data Layanan
  const services = [
    { title: "Pemeriksaan Umum", icon: FaStethoscope, desc: "Cek kesehatan berkala oleh dokter hewan berpengalaman." },
    { title: "Vaksinasi", icon: FaSyringe, desc: "Perlindungan imun komprehensif dari berbagai virus berbahaya." },
    { title: "Rawat Inap", icon: FaHospital, desc: "Fasilitas observasi intensif 24 jam yang aman dan higienis." },
    { title: "Grooming", icon: FaCut, desc: "Perawatan kecantikan luar, spa, dan pembersihan kutu/jamur." },
  ];

  // ========================================================
  // BAGIAN ARTIKEL DENGAN GAMBAR ASLI DARI INTERNET
  // (Kamu bisa ganti URL di bawah ini dengan link hasil copy kamu)
  // ========================================================
  const articles = [
    { 
      title: "Cara Merawat Anak Kucing dengan Benar", 
      category: "Kucing", 
      time: "5 Menit Baca", 
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      title: "Jadwal Vaksin Wajib untuk Anjing Kesayangan", 
      category: "Anjing", 
      time: "4 Menit Baca", 
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      title: "Daftar Makanan yang Berbahaya Bagi Kucing", 
      category: "Edukasi", 
      time: "6 Menit Baca", 
      image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=600" 
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-700 antialiased scroll-smooth">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-2xl text-indigo-600 tracking-tight">
            <FaPaw className="rotate-12 text-indigo-500" />
            <span>VetCare<span className="text-slate-800">CRM</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a href="#home" className="text-slate-600 hover:text-indigo-600 transition-colors">Home</a>
            <a href="#services" className="text-slate-600 hover:text-indigo-600 transition-colors">Layanan</a>
            <a href="#membership" className="text-slate-600 hover:text-indigo-600 transition-colors">Membership</a>
            <a href="#articles" className="text-slate-600 hover:text-indigo-600 transition-colors">Artikel</a>
            <a href="#contact" className="text-slate-600 hover:text-indigo-600 transition-colors">Kontak</a>
            <div className="h-4 w-px bg-slate-200"></div>
            <a href="#login" className="text-slate-600 hover:text-indigo-600 transition-colors">Login</a>
            <a href="#register" className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition-all shadow-md shadow-indigo-600/10">Daftar</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-600 to-blue-700 text-white py-32">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block bg-white/10 backdrop-blur-md text-indigo-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            🐾 Solusi Kesehatan Hewan Terbaik
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Welcome to VetCare CRM
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Solusi modern untuk memantau kesehatan hewan peliharaan Anda secara real-time. 
            Nikmati kemudahan booking online, reward point melimpah, dan pengingat medis otomatis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#membership" className="w-full sm:w-auto bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
              Lihat Program Membership
            </a>
            <a href="#about" className="w-full sm:w-auto border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition-all">
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Layanan Medis Unggulan</h2>
          <p className="text-slate-500">Komitmen kami untuk memberikan kenyamanan dan penanganan medis terbaik bagi anabul kesayangan Anda.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv) => (
            <div key={srv.title} className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 text-2xl mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <srv.icon />
              </div>
              <h3 className="font-bold text-xl text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">{srv.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MEMBERSHIP SECTION */}
      <section id="membership" className="bg-slate-100 py-24 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Pilih Paket Membership Anda</h2>
            <p className="text-slate-500">Gabung menjadi bagian dari komunitas VIP VetCare dan dapatkan keuntungan eksklusif untuk perawatan harian hingga medis.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {memberships.map((member) => (
              <div
                key={member.name}
                className={`flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${member.theme.card}`}
              >
                <div>
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider shadow-sm ${member.theme.tag}`}>
                    Paling Populer ⭐
                  </div>

                  <h3 className="text-2xl font-bold mb-2 tracking-tight">{member.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className={`text-3xl font-extrabold ${member.theme.priceColor}`}>{member.price}</span>
                    <span className="text-slate-400 text-sm font-medium">{member.period}</span>
                  </div>

                  <hr className="border-slate-200/50 my-5" />

                  <ul className="space-y-4">
                    {member.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-sm">
                        <FaCheckCircle className={`text-base shrink-0 mt-0.5 ${member.theme.accent}`} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className={`w-full mt-8 py-3.5 px-4 rounded-xl font-bold text-sm tracking-wide transition-all ${member.theme.button}`}>
                  Pilih Paket {member.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOYALTY SECTION */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative overflow-hidden bg-white rounded-3xl border border-slate-100 shadow-xl p-8 md:p-12">
            <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-indigo-50 rounded-full blur-2xl opacity-60"></div>
            
            <div className="flex flex-col sm:flex-row items-center gap-5 mb-8 border-b border-slate-100 pb-6">
              <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center text-3xl shadow-sm">
                <FaGift />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Loyalty Point Program</h2>
                <p className="text-slate-400 text-sm">Kumpulkan poin di setiap transaksi dan tukar dengan voucher menarik!</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">🪙 Cara Mendapatkan Poin</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between border-b border-slate-200/60 pb-2"><span>Setiap Kelipatan Rp10.000</span> <strong className="text-indigo-600">+1 Point</strong></li>
                  <li className="flex justify-between border-b border-slate-200/60 pb-2"><span>Gold Member Bonus</span> <strong className="text-amber-600">2x Lipat Poin</strong></li>
                  <li className="flex justify-between"><span>Platinum Member Bonus</span> <strong className="text-indigo-500">3x Lipat Poin</strong></li>
                </ul>
              </div>

              <div className="bg-indigo-900/5 p-6 rounded-2xl border border-indigo-900/5">
                <h3 className="font-bold text-indigo-950 mb-4 flex items-center gap-2">🎁 Reward Spesial</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex justify-between border-b border-indigo-900/10 pb-2"><span>100 Point</span> <strong>Voucher Rp10.000</strong></li>
                  <li className="flex justify-between border-b border-indigo-900/10 pb-2"><span>300 Point</span> <strong>Voucher Rp35.000</strong></li>
                  <li className="flex justify-between"><span>500 Point</span> <strong className="text-indigo-600">Voucher Rp75.000</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES SECTION (SUDAH MENGGUNAKAN GAMBAR) */}
      <section id="articles" className="bg-slate-100 py-24 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Artikel & Edukasi Hewan</h2>
              <p className="text-slate-500 text-sm">Wawasan esensial dari tim medis kami untuk kebahagiaan anabul Anda.</p>
            </div>
            <button className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm bg-white px-5 py-2.5 rounded-xl shadow-sm border border-slate-200/60">
              Lihat Semua Artikel <FaArrowRight className="text-xs" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((art) => (
              <div key={art.title} className="group bg-white rounded-3xl shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Container Gambar */}
                  <div className="h-48 relative overflow-hidden bg-slate-200">
                    <img 
                      src={art.image} 
                      alt={art.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Tag Kategori Melayang di Atas Gambar */}
                    <span className="absolute top-4 left-4 bg-slate-900/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {art.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <span className="text-slate-400 text-xs font-semibold">{art.time}</span>
                    <h3 className="font-bold text-lg text-slate-800 mt-1 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {art.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button className="text-indigo-600 hover:text-indigo-700 text-sm font-bold inline-flex items-center gap-1.5 group/btn">
                    Baca Selengkapnya 
                    <FaArrowRight className="text-xs transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 max-w-4xl mx-auto px-6 text-center relative">
        <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-8 shadow-inner">
          <FaUserMd />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Tentang Sistem VetCare CRM</h2>
        <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
          VetCare berkomitmen mengawinkan dunia medis veteriner dengan kenyamanan digital. 
          Platform CRM terintegrasi ini menjamin rekam medis anabul Anda terpantau harmonis.
        </p>
      </section>

      {/* TESTIMONI SECTION */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Apa Kata Mereka?</h2>
            <p className="text-slate-400 text-sm">Testimoni nyata dari para pet parents.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "Pelayanan medis sangat ramah, dokternya komunikatif sekali saat anabul saya harus rawat inap.", user: "Siti R. - Pemilik Kucing" },
              { text: "Sistem pengingat otomatis di WhatsApp ngebantu banget biar anjing saya gak kelewat jadwal vaksin.", user: "Budi T. - Pemilik Siberian Husky" },
              { text: "Suka banget sama program loyalty point-nya, sering dapet potongan harga lumayan.", user: "Amalia - Pemilik Persi" }
            ].map((testi, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="flex text-amber-400 gap-1 mb-4 text-sm">
                    {[...Array(5)].map((_, idx) => <FaStar key={idx} />)}
                  </div>
                  <p className="text-slate-600 italic text-sm leading-relaxed">"{testi.text}"</p>
                </div>
                <h4 className="mt-6 text-xs font-bold uppercase tracking-wider text-slate-400">— {testi.user}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-slate-100 py-24 border-t border-slate-200/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Hubungi Tim Layanan Kami</h2>

          <div className="grid lg:grid-cols-5 gap-8 items-stretch">
            <div className="bg-white rounded-3xl shadow-sm p-8 lg:col-span-3 border border-slate-200/60">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <input className="w-full border border-slate-200 bg-slate-50 p-3.5 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm" placeholder="Nama Lengkap" />
                <input className="w-full border border-slate-200 bg-slate-50 p-3.5 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm" placeholder="Alamat Email" type="email" />
              </div>
              <textarea rows="4" className="w-full border border-slate-200 bg-slate-50 p-3.5 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm resize-none" placeholder="Tulis pesan atau keluhan medis umum di sini..."></textarea>
              <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md shadow-indigo-600/10 transition-colors w-full sm:w-auto text-sm">
                Kirim Pesan Sekarang
              </button>
            </div>

            <div className="bg-slate-900 text-white rounded-3xl p-8 lg:col-span-2 flex flex-col justify-center space-y-6 shadow-xl">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-indigo-400"><FaPhone /></div>
                <div><p className="text-xs text-slate-400">Hubungi Kami</p><p className="text-sm font-semibold">0812-3456-7890</p></div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-indigo-400"><FaEnvelope /></div>
                <div><p className="text-xs text-slate-400">Email Resmi</p><p className="text-sm font-semibold">info@vetcare.com</p></div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-indigo-400"><FaMapMarkerAlt /></div>
                <div><p className="text-xs text-slate-400">Lokasi Klinik</p><p className="text-sm font-semibold">Pekanbaru, Riau</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGIN SECTION */}
      <section id="login" className="py-24 bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950 text-white border-b border-slate-800">
        <div className="max-w-md mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Masuk Dashboard Member</h2>
            <p className="text-slate-400 text-sm">Akses dashboard monitoring rekam medis peliharaan Anda.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Alamat Email</label>
                <input type="email" placeholder="contoh@email.com" className="w-full bg-white/5 border border-white/10 p-3.5 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-sm text-white placeholder-slate-500" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Kata Sandi</label>
                <input type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 p-3.5 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-sm text-white placeholder-slate-500" />
              </div>
              <div className="text-right">
                <a href="#login" className="text-xs text-indigo-400 hover:underline">Lupa kata sandi?</a>
              </div>
              <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 rounded-xl transition-colors text-sm shadow-lg shadow-indigo-600/20 mt-2">
                Masuk Sekarang
              </button>
            </div>
            <p className="text-center text-xs text-slate-400 mt-6">
              Belum punya akun? <a href="#register" className="text-indigo-400 font-medium hover:underline">Daftar di bawah</a>
            </p>
          </div>
        </div>
      </section>

      {/* REGISTER SECTION */}
      <section id="register" className="py-24 bg-slate-100">
        <div className="max-w-lg mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Registrasi Member Baru</h2>
            <p className="text-slate-500 text-sm">Bergabung dan nikmati benefit instan serta point rewards dari VetCare CRM.</p>
          </div>

          <div className="bg-white text-slate-800 p-8 rounded-3xl border border-slate-200 shadow-xl">
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Nama Lengkap</label>
                  <input placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Nomor HP / WhatsApp</label>
                  <input placeholder="0812345678xx" className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Alamat Email Aktif</label>
                <input placeholder="nama@email.com" type="email" className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Buat Kata Sandi Baru</label>
                <input placeholder="Minimal 8 karakter" type="password" className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm" />
              </div>
              
              <div className="flex items-start gap-2 py-2">
                <input type="checkbox" id="terms" className="mt-1 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                <label htmlFor="terms" className="text-xs text-slate-500 leading-tight">Saya menyetujui Syarat & Ketentuan serta Kebijakan Privasi yang berlaku di VetCare CRM.</label>
              </div>

              <button className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold py-3.5 rounded-xl transition-all text-sm shadow-md shadow-indigo-600/10">
                Daftar & Ambil Keuntungan
              </button>
            </div>
            <p className="text-center text-xs text-slate-500 mt-6">
              Sudah memiliki akun? <a href="#login" className="text-indigo-600 font-medium hover:underline">Masuk ke dashboard</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}