import React from "react";
import {
  FaPaw,
  FaCoins,
  FaTicketAlt,
  FaCheckCircle,
  FaArrowRight,
  FaUser,
  FaCalendarAlt,
  FaHistory,
  FaHeart,
  FaWeight,
  FaSyringe,
  FaCut,
  FaClock,
  FaUserMd,
  FaExclamationTriangle,
  FaStore,
  FaGift
} from "react-icons/fa";

export default function MemberDashboardTopNav() {
  // 1. Data Dummy Pengguna & Member
  const memberProfile = {
    name: "Putri Agustin",
    email: "budi.santoso@email.com",
    memberId: "VET-GOLD-8821",
    tier: "Gold Member",
    joinDate: "12 Januari 2025",
    totalPoints: 320,
    totalSavings: "Rp 145.000",
  };

  // 2. DATA BARU: Profil Lengkap Anabul (Pet Profile)
  const petProfile = {
    name: "Milo",
    species: "Kucing",
    breed: "Persia Longhair",
    age: "1 Tahun 4 Bulan",
    weight: "4.2 Kg",
    bloodType: "A",
    allergies: "Alergi makanan laut (Seafood)",
    status: "Sangat Sehat (Ideal Weight)"
  };

  // 3. DATA BARU: Pengingat Jadwal Medis Mendatang (Upcoming Appointment)
  const upcomingAppointment = {
    date: "22 Juni 2026",
    time: "10:00 WIB",
    activity: "Vaksinasi F4 (Tahunan)",
    vet: "drh. Sarah Amelia",
    room: "Ruang Poli A",
    status: "Terkonfirmasi"
  };

  // 4. DATA BARU: Toko Penukaran Poin (Point Redemption Shop)
  const pointRewards = [
    { id: 1, title: "Snack Creamy Kucing (Isi 4)", pointsNeeded: 50, icon: FaGift, stock: "Tersedia" },
    { id: 2, title: "Potongan Harga Grooming Rp25rb", pointsNeeded: 120, icon: FaCut, stock: "Tersedia" },
    { id: 3, title: "Konsultasi Dokter Hewan Gratis", pointsNeeded: 250, icon: FaUserMd, stock: "Tersedia" },
    { id: 4, title: "Layanan Antar-Jemput Premium", pointsNeeded: 350, icon: FaPaw, stock: "Segera Hadir" },
  ];

  // 5. Data Voucher Aktif Milik Member
  const activeVouchers = [
    { code: "GOLDGROOM10", title: "Diskon 10% Grooming Premium", expiry: "30 Juni 2026", type: "Grooming" },
    { code: "VACCINE50K", title: "Potongan Rp 50.000 Vaksin Tahunan", expiry: "15 Juli 2026", type: "Medis" }
  ];

  // 6. Keuntungan Paket Gold yang Sedang Aktif
  const currentBenefits = [
    "Diskon otomatis 10% untuk setiap layanan medis & grooming.",
    "Prioritas utama saat melakukan booking dokter (tanpa antre lama).",
    "Layanan Jemput Anabul Gratis (Maksimal radius 5 KM).",
    "Double Loyalty Point (2x) setiap transaksi kelipatan Kelipatan Rp 10.000."
  ];

  // 7. Riwayat Pemeriksaan Terakhir Anabul
  const medicalHistory = [
    { date: "10 Mei 2026", activity: "Vaksinasi Rabies Booster", vet: "drh. Sarah Amelia", status: "Selesai" },
    { date: "24 April 2026", activity: "Konsultasi & Pengobatan Jamur", vet: "drh. Rian Hidayat", status: "Selesai" },
    { date: "05 Maret 2026", activity: "Grooming Sehat & Potong Kuku", vet: "Groomer Aldi", status: "Selesai" },
  ];

  // 8. DATA ARTIKEL EDUKASI (DENGAN GAMBAR INTERNET)
  const articles = [
    { 
      title: "Menu Makanan Diet Terbaik untuk Kucing Obesitas", 
      category: "Kucing", 
      time: "5 Menit Baca", 
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      title: "Tanda-Tanda Anabul Mengalami Stres & Cara Mengatasinya", 
      category: "Psikologi Hewan", 
      time: "4 Menit Baca", 
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      title: "Pentingnya Menjaga Kebersihan Telinga Hewan Peliharaan", 
      category: "Perawatan", 
      time: "6 Menit Baca", 
      image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=600" 
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-700 antialiased scroll-smooth">
      
      {/* ─── NAVBAR UTAS (PENGGANTI SIDEBAR) ─── */}
      <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-2xl tracking-tight">
            <FaPaw className="rotate-12 text-indigo-400" />
            <span>VetCare<span className="text-indigo-400">Member</span></span>
          </div>

          {/* Menu Link Tengah */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <a href="#dashboard" className="hover:text-white transition-colors">Ringkasan</a>
            <a href="#pet-profile" className="hover:text-white transition-colors">Profil Milo</a>
            <a href="#point-shop" className="hover:text-white transition-colors">Tukar Poin</a>
            <a href="#vouchers" className="hover:text-white transition-colors">Voucher</a>
            <a href="#history" className="hover:text-white transition-colors">Riwayat Medis</a>
            <a href="#articles" className="hover:text-white transition-colors">Edukasi</a>
          </div>

          {/* User Quick Info Kanan */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <p className="text-xs font-bold text-white">{memberProfile.name}</p>
              <p className="text-[10px] text-amber-400 font-semibold font-mono">{memberProfile.memberId}</p>
            </div>
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-white shadow-md border-2 border-slate-700">
              <FaUser className="text-sm" />
            </div>
          </div>
        </div>
      </nav>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8" id="dashboard">
        
        {/* ─── BANNER SELAMAT DATANG (HERO STYLE) ─── */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 shadow-xl">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 opacity-5 text-[15rem] pointer-events-none"><FaPaw /></div>
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 bg-amber-500 text-slate-900 font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-wider shadow-md">
              👑 PROFIL MEMBER {memberProfile.tier}
            </span>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">Selamat Datang Kembali, {memberProfile.name}! 🐾</h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Portal internal Anda telah siap. Seluruh jadwal vaksinasi, histori medis, dan tabungan diskon untuk anabul kesayangan terpantau secara otomatis di sini.
            </p>
          </div>

          {/* Alert Khusus Catatan Alergi */}
          <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-start gap-3 max-w-2xl text-xs text-amber-300">
            <FaExclamationTriangle className="shrink-0 mt-0.5 text-base text-amber-400" />
            <p><strong>Catatan Dokter Terakhir:</strong> Harap awasi diet harian {petProfile.name}. Pastikan pihak keluarga tidak memberikan camilan mengandung seafood karena riwayat hipersensitivitas.</p>
          </div>
        </section>

        {/* ─── GRID BARIS 1: KARTU DIGITAL & PROFIL ANABUL LENGKAP ─── */}
        <section className="grid lg:grid-cols-5 gap-6 items-stretch">
          
          {/* 1. KARTU DIGITAL MEMBER (2 Kolom) */}
          <div className="lg:col-span-2 relative overflow-hidden bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 text-slate-900 rounded-3xl p-6 shadow-xl flex flex-col justify-between min-h-[220px]">
            <div className="absolute right-0 bottom-0 translate-x-6 translate-y-6 opacity-10 text-9xl pointer-events-none"><FaPaw /></div>
            
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] uppercase tracking-widest font-extrabold text-amber-950/70">Digital VIP Card</p>
                <h2 className="text-xl font-black tracking-wide text-white mt-0.5">{memberProfile.name}</h2>
              </div>
              <FaPaw className="text-3xl text-white/90 drop-shadow" />
            </div>

            <div className="mt-8">
              <p className="text-[9px] uppercase font-bold text-amber-950/60 tracking-wider">ID Registrasi Member</p>
              <p className="font-mono text-xl font-bold tracking-widest text-white">{memberProfile.memberId}</p>
              <p className="text-xs font-semibold text-amber-950/90 mt-1">🐱 Nama Anabul Utama: {petProfile.name}</p>
            </div>

            <div className="flex justify-between items-center border-t border-white/20 pt-4 mt-4 text-xs font-medium text-amber-950/70">
              <span>Masa Aktif: Seumur Hidup</span>
              <span className="bg-slate-900 text-amber-400 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider">GOLD TIER</span>
            </div>
          </div>

          {/* 2. PROFIL ANABUL MILO (3 Kolom) */}
          <div id="pet-profile" className="lg:col-span-3 bg-white border border-slate-200 p-6 rounded-3xl shadow-sm space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                🐱 Informasi Detail Pasien ({petProfile.name})
              </h3>
              <span className="bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold px-2.5 py-0.5 rounded-md text-[11px] uppercase">{petProfile.status}</span>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 text-sm font-medium">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="text-xs text-slate-400 block mb-0.5">Spesies & Ras</span>
                <span className="text-slate-800 font-bold">{petProfile.species} ({petProfile.breed})</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="text-xs text-slate-400 block mb-0.5">Umur Terhitung</span>
                <span className="text-slate-800 font-bold">{petProfile.age}</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block mb-0.5">Berat Badan Terakhir</span>
                  <span className="text-slate-800 font-bold">{petProfile.weight}</span>
                </div>
                <FaWeight className="text-slate-300 text-lg" />
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="text-xs text-slate-400 block mb-0.5">Golongan Darah</span>
                <span className="text-slate-800 font-bold">{petProfile.bloodType}</span>
              </div>
            </div>
            <div className="bg-rose-50 border border-rose-100 text-rose-800 p-3 rounded-xl text-xs font-semibold">
              ⚠️ Alergi Terdaftar: {petProfile.allergies}
            </div>
          </div>

        </section>

        {/* ─── GRID BARIS 2: LOYALTY STATS & REMINDER JADWAL MEDIS ─── */}
        <section className="grid lg:grid-cols-3 gap-6 items-stretch">
          
          {/* COUNTER POIN */}
          <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Koin Loyalty</p>
              <h3 className="text-4xl font-black text-slate-800 mt-2 flex items-center gap-2">
                <FaCoins className="text-amber-500 text-3xl" /> {memberProfile.totalPoints} 
                <span className="text-xs font-medium text-slate-400">Poin Aktif</span>
              </h3>
            </div>
            <p className="text-[11px] text-slate-500 border-t border-slate-100 pt-3 mt-4">
              Koin dikumpulkan otomatis dari transaksi klinik. Anda bisa menukarnya langsung pada katalog di bawah ini.
            </p>
          </div>

          {/* TOTAL SAVINGS */}
          <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Akumulasi Penghematan</p>
              <h3 className="text-4xl font-black text-emerald-600 mt-2">{memberProfile.totalSavings}</h3>
              <p className="text-xs text-slate-400 font-medium mt-1">Total potongan harga yang telah dinikmati.</p>
            </div>
            <div className="text-[11px] text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-100 font-semibold flex items-center gap-1 mt-4">
              <FaCheckCircle className="text-xs" /> Diskon otomatis member aktif 10%.
            </div>
          </div>

          {/* REMINDER JADWAL BOOKING MEDIS (UPCOMING APPOINTMENT) */}
          <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden border border-slate-800">
            <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 opacity-10 text-7xl"><FaCalendarAlt /></div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] bg-indigo-600 text-white font-extrabold px-2.5 py-0.5 rounded-md uppercase tracking-wider flex items-center gap-1">
                  <FaClock /> Jadwal Terdekat
                </span>
                <span className="text-emerald-400 text-xs font-bold">{upcomingAppointment.status}</span>
              </div>
              <h4 className="font-bold text-base text-white">{upcomingAppointment.activity}</h4>
              <p className="text-xs text-slate-400 mt-0.5">{upcomingAppointment.vet} • {upcomingAppointment.room}</p>
            </div>
            
            <div className="border-t border-slate-800 pt-3 mt-4 flex items-center justify-between text-xs font-mono font-bold text-indigo-300">
              <span>📅 {upcomingAppointment.date}</span>
              <span>⏰ {upcomingAppointment.time}</span>
            </div>
          </div>

        </section>

        {/* ─── DATA BARU: KATALOG REDEEM COIN MARKETPLACE ─── */}
        <section id="point-shop" className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <FaStore className="text-indigo-500 text-xl" />
            <div>
              <h3 className="text-lg font-bold text-slate-900">Katalog Penukaran Koin Member</h3>
              <p className="text-xs text-slate-400">Tukarkan saldo koin Anda dengan reward instan menarik di bawah.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pointRewards.map((reward) => {
              const canRedeem = memberProfile.totalPoints >= reward.pointsNeeded;
              return (
                <div key={reward.id} className="border border-slate-100 rounded-2xl p-4 bg-slate-50/50 flex flex-col justify-between space-y-4 hover:border-indigo-200 transition-colors">
                  <div className="space-y-2">
                    <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-lg shadow-inner">
                      <reward.icon />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-800 leading-snug">{reward.title}</h4>
                      <span className="text-[10px] text-slate-400 font-medium">Status stok: {reward.stock}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-black text-amber-600 font-mono flex items-center gap-1">
                      🪙 {reward.pointsNeeded} Pts
                    </span>
                    <button 
                      disabled={!canRedeem}
                      className={`text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all ${
                        canRedeem 
                        ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm" 
                        : "bg-slate-200 text-slate-400 cursor-not-allowed"
                      }`}
                    >
                      {canRedeem ? "Klaim Hadiah" : "Poin Kurang"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── GRID BARIS 3: BENEFIT PAKET & VOUCHER KUPON ─── */}
        <section className="grid md:grid-cols-2 gap-6">
          
          {/* LIST KEUNTUNGAN PAKET */}
          <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              🌟 Hak Eksklusif Keanggotaan Gold Anda
            </h3>
            <ul className="space-y-3">
              {currentBenefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-sm bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <FaCheckCircle className="text-amber-500 text-base shrink-0 mt-0.5" />
                  <span className="text-slate-600 leading-relaxed font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* VOUCHER SAYA */}
          <div id="vouchers" className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              🎁 Kupon Voucher Aktif Tersimpan
            </h3>
            <div className="space-y-3">
              {activeVouchers.map((vch) => (
                <div key={vch.code} className="flex border border-dashed border-indigo-300 rounded-2xl overflow-hidden bg-indigo-50/30 hover:bg-indigo-50 transition-colors">
                  <div className="bg-indigo-600 text-white p-4 flex flex-col justify-center items-center shrink-0 w-24 border-r border-dashed border-indigo-300">
                    <FaTicketAlt className="text-xl mb-1" />
                    <span className="text-[10px] font-mono tracking-wider bg-white/20 px-1.5 py-0.5 rounded font-bold">{vch.type}</span>
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                      <h4 className="font-bold text-sm text-slate-800 leading-tight">{vch.title}</h4>
                      <p className="text-[11px] text-slate-400 mt-1 font-mono">Kode: <span className="font-bold text-indigo-600 bg-indigo-100 px-1.5 py-0.5 rounded">{vch.code}</span></p>
                    </div>
                    <p className="text-[10px] text-rose-500 font-semibold mt-2 flex items-center gap-1">
                      <FaCalendarAlt /> Berlaku s/d {vch.expiry}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* ─── BARIS 4: TABEL RIWAYAT MEDIS ANABUL ─── */}
        <section id="history" className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <FaHistory className="text-slate-400" /> Histori Rekam Medis & Tindakan Terakhir Milo
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-400 font-bold border-b border-slate-100">
                  <th className="p-3">Tanggal Tindakan</th>
                  <th className="p-3">Jenis Pelayanan / Keluhan</th>
                  <th className="p-3">Dokter / Petugas Medis</th>
                  <th className="p-3 text-center">Status Berkas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {medicalHistory.map((hist, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-3 text-slate-500 font-mono">{hist.date}</td>
                    <td className="p-3 text-slate-800 font-bold">{hist.activity}</td>
                    <td className="p-3 text-slate-600">{hist.vet}</td>
                    <td className="p-3 text-center">
                      <span className="bg-emerald-100 text-emerald-700 text-xs px-2.5 py-1 rounded-full font-bold">
                        {hist.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── BARIS 5: EDUKASI ARTIKEL BERGAMBAR DARI INTERNET ─── */}
        <section id="articles" className="space-y-6 pt-4">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">📚 Artikel Kesehatan Khusus Member VIP</h2>
              <p className="text-slate-400 text-xs mt-1">Tips penting yang dikurasi berkala oleh dokter spesialis VetCare.</p>
            </div>
            <button className="text-indigo-600 font-bold flex items-center gap-1.5 hover:gap-2.5 transition-all text-xs bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm shrink-0">
              Lihat Semua <FaArrowRight className="text-[10px]" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((art) => (
              <div key={art.title} className="group bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* GAMBAR DARI INTERNET */}
                  <div className="h-44 relative overflow-hidden bg-slate-200">
                    <img 
                      src={art.image} 
                      alt={art.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {art.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <span className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">{art.time}</span>
                    <h3 className="font-bold text-base text-slate-800 mt-1 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {art.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button className="text-indigo-600 hover:text-indigo-700 text-xs font-bold inline-flex items-center gap-1 group/btn">
                    Mulai Membaca 
                    <FaArrowRight className="text-[10px] transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-500 text-xs text-center py-8 border-t border-slate-800 mt-20">
        <p>© 2026 VetCare CRM Platform. All Rights Reserved. Terintegrasi Layanan Klinik Hewan Berlisensi.</p>
      </footer>
    </div>
  );
}