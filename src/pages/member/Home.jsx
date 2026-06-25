import React, { useState } from "react";
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
  FaGift,
  FaStar,
  FaPaperPlane,
  FaReceipt,
  FaWallet,
  FaCalendarPlus, // Icon Baru untuk Booking
  FaTimes        // Icon Baru untuk Tutup Modal
} from "react-icons/fa";

export default function MemberDashboardTopNav() {
  // ─── STATE UTAS ───
  const [activeTab, setActiveTab] = useState("dashboard"); 
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  
  // State Baru untuk Modal Booking
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Data Dummy Pengguna
  const memberProfile = {
    name: "Putri Agustin",
    email: "budi.santoso@email.com",
    memberId: "VET-GOLD-8821",
    tier: "Gold Member",
    joinDate: "12 Januari 2025",
    totalPoints: 320,
    totalSavings: "Rp 145.000",
  };

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

  const upcomingAppointment = {
    date: "22 Juni 2026",
    time: "10:00 WIB",
    activity: "Vaksinasi F4 (Tahunan)",
    vet: "drh. Sarah Amelia",
    room: "Ruang Poli A",
    status: "Terkonfirmasi"
  };

  const pointRewards = [
    { id: 1, title: "Snack Creamy Kucing (Isi 4)", pointsNeeded: 50, icon: FaGift, stock: "Tersedia" },
    { id: 2, title: "Potongan Harga Grooming Rp25rb", pointsNeeded: 120, icon: FaCut, stock: "Tersedia" },
    { id: 3, title: "Konsultasi Dokter Hewan Gratis", pointsNeeded: 250, icon: FaUserMd, stock: "Tersedia" },
    { id: 4, title: "Layanan Antar-Jemput Premium", pointsNeeded: 350, icon: FaPaw, stock: "Segera Hadir" },
  ];

  const activeVouchers = [
    { code: "GOLDGROOM10", title: "Diskon 10% Grooming Premium", expiry: "30 Juni 2026", type: "Grooming" },
    { code: "VACCINE50K", title: "Potongan Rp 50.000 Vaksin Tahunan", expiry: "15 Juli 2026", type: "Medis" }
  ];

  const currentBenefits = [
    "Diskon otomatis 10% untuk setiap layanan medis & grooming.",
    "Prioritas utama saat melakukan booking dokter (tanpa antre lama).",
    "Layanan Jemput Anabul Gratis (Maksimal radius 5 KM).",
    "Double Loyalty Point (2x) setiap transaksi kelipatan Kelipatan Rp 10.000."
  ];

  const medicalHistory = [
    { date: "10 Mei 2026", activity: "Vaksinasi Rabies Booster", vet: "drh. Sarah Amelia", status: "Selesai" },
    { date: "24 April 2026", activity: "Konsultasi & Pengobatan Jamur", vet: "drh. Rian Hidayat", status: "Selesai" },
    { date: "05 Maret 2026", activity: "Grooming Sehat & Potong Kuku", vet: "Groomer Aldi", status: "Selesai" },
  ];

  const transactionHistory = [
    { invoice: "INV/20260510/0042", date: "10 Mei 2026", service: "Vaksinasi Rabies Booster", total: "Rp 225.000", method: "QRIS", status: "Lunas" },
    { invoice: "INV/20260424/0019", date: "24 April 2026", service: "Konsultasi & Obat Jamur", total: "Rp 180.000", method: "Transfer BCA", status: "Lunas" },
    { invoice: "INV/20260305/0112", date: "05 Maret 2026", service: "Grooming Sehat Premium", total: "Rp 135.000", method: "Tunai", status: "Lunas" },
    { invoice: "INV/20260115/0005", date: "15 Januari 2026", service: "Beli Paket Membership Gold", total: "Rp 350.000", method: "Kartu Debit", status: "Lunas" }
  ];

  const articles = [
    { title: "Menu Makanan Diet Terbaik untuk Kucing Obesitas", category: "Kucing", time: "5 Menit Baca", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600" },
    { title: "Tanda-Tanda Anabul Mengalami Stres & Cara Mengatasinya", category: "Psikologi Hewan", time: "4 Menit Baca", image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600" },
    { title: "Pentingnya Menjaga Kebersihan Telinga Hewan Peliharaan", category: "Perawatan", time: "6 Menit Baca", image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=600" },
  ];

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setIsBookingOpen(false);
    }, 2000);
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-700 antialiased scroll-smooth">
      
      {/* ─── NAVBAR UTAS ─── */}
      <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div onClick={() => setActiveTab("dashboard")} className="flex items-center gap-2 font-bold text-2xl tracking-tight cursor-pointer">
            <FaPaw className="rotate-12 text-indigo-400" />
            <span>VetCare<span className="text-indigo-400">Member</span></span>
          </div>

          <div className="hidden lg:flex items-center gap-5 text-xs font-semibold text-slate-300">
            <button onClick={() => setActiveTab("dashboard")} className={`hover:text-white transition-colors cursor-pointer ${activeTab === "dashboard" ? "text-amber-400 border-b-2 border-amber-400 pb-1" : ""}`}>
              Ringkasan
            </button>
            {activeTab === "dashboard" && (
              <>
                <a href="#pet-profile" className="hover:text-white transition-colors">Profil Milo</a>
                <a href="#point-shop" className="hover:text-white transition-colors">Tukar Poin</a>
                <a href="#vouchers" className="hover:text-white transition-colors">Voucher</a>
                <a href="#history" className="hover:text-white transition-colors">Riwayat Medis</a>
                <a href="#transactions" className="hover:text-white transition-colors">Transaksi</a>
              </>
            )}
            
            <button onClick={() => setActiveTab("feedback")} className={`flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer ${activeTab === "feedback" ? "text-white bg-slate-800 px-3 py-1 rounded-xl" : ""}`}>
              <FaStar className="text-amber-400" />
              <span>Feedback</span>
            </button>

            {/* LETAK JALUR NAVBAR: TOMBOL BOOKING MINI */}
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="flex items-center gap-1.5 bg-indigo-600 text-white px-3 py-1.5 rounded-xl font-bold shadow-md hover:bg-indigo-700 transition-all cursor-pointer"
            >
              <FaCalendarPlus />
              <span>Booking Now</span>
            </button>
          </div>

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

      {/* ─── KONTEN UTAMA ─── */}
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        
        {activeTab === "dashboard" ? (
          <>
            {/* LETAK UTAMA: BANNER UTAMA DENGAN BUTTON BOOKING BESAR */}
            <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 shadow-xl">
              <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 opacity-5 text-[15rem] pointer-events-none"><FaPaw /></div>
              <div className="max-w-3xl space-y-4">
                <span className="inline-flex items-center gap-1.5 bg-amber-500 text-slate-900 font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-wider shadow-md">
                  👑 PROFIL MEMBER {memberProfile.tier}
                </span>
                <h1 className="text-3xl md:text-4xl font-black tracking-tight">Selamat Datang Kembali, {memberProfile.name}! 🐾</h1>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  Portal internal Anda telah siap. Seluruh jadwal vaksinasi, histori medis, dan tabungan diskon untuk anabul kesayangan terpantau secara otomatis di sini.
                </p>
                
                {/* BUTTON BOOKING UTAMA */}
                <div className="pt-2">
                  <button 
                    onClick={() => setIsBookingOpen(true)}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-orange-500 text-slate-900 font-black px-6 py-3.5 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm cursor-pointer"
                  >
                    <FaCalendarPlus className="text-base" />
                    Buat Janji Temu Medis / Grooming
                  </button>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-start gap-3 max-w-2xl text-xs text-amber-300">
                <FaExclamationTriangle className="shrink-0 mt-0.5 text-base text-amber-400" />
                <p><strong>Catatan Dokter Terakhir:</strong> Harap awasi diet harian {petProfile.name}. Pastikan pihak keluarga tidak memberikan camilan mengandung seafood karena riwayat hipersensitivitas.</p>
              </div>
            </section>

            {/* KARTU & DATA LAINNYA */}
            <section className="grid lg:grid-cols-5 gap-6 items-stretch">
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

            {/* SECTIONS LAIN: STATS, KATALOG POIN, VOUCHER, HISTORI MEDIS & TRANSAKSI */}
            <section className="grid lg:grid-cols-3 gap-6 items-stretch">
              <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Koin Loyalty</p>
                  <h3 className="text-4xl font-black text-slate-800 mt-2 flex items-center gap-2">
                    <FaCoins className="text-amber-500 text-3xl" /> {memberProfile.totalPoints} 
                    <span className="text-xs font-medium text-slate-400">Poin Aktif</span>
                  </h3>
                </div>
                <p className="text-[11px] text-slate-500 border-t border-slate-100 pt-3 mt-4">Koin dikumpulkan otomatis dari transaksi klinik.</p>
              </div>

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

            <section id="point-shop" className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <FaStore className="text-indigo-500 text-xl" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Katalog Penukaran Koin Member</h3>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {pointRewards.map((reward) => {
                  const canRedeem = memberProfile.totalPoints >= reward.pointsNeeded;
                  return (
                    <div key={reward.id} className="border border-slate-100 rounded-2xl p-4 bg-slate-50/50 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-lg"><reward.icon /></div>
                        <h4 className="font-bold text-sm text-slate-800 leading-snug">{reward.title}</h4>
                      </div>
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-black text-amber-600 font-mono">🪙 {reward.pointsNeeded} Pts</span>
                        <button disabled={!canRedeem} className={`text-[11px] font-bold px-3 py-1.5 rounded-lg ${canRedeem ? "bg-indigo-600 text-white shadow-sm" : "bg-slate-200 text-slate-400"}`}>
                          {canRedeem ? "Klaim" : "Poin Kurang"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4">🌟 Hak Eksklusif Keanggotaan Gold Anda</h3>
                <ul className="space-y-3">
                  {currentBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <FaCheckCircle className="text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div id="vouchers" className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-slate-900">🎁 Kupon Voucher Aktif Tersimpan</h3>
                <div className="space-y-3">
                  {activeVouchers.map((vch) => (
                    <div key={vch.code} className="flex border border-dashed border-indigo-300 rounded-2xl overflow-hidden bg-indigo-50/30">
                      <div className="bg-indigo-600 text-white p-4 flex flex-col justify-center items-center shrink-0 w-24">
                        <FaTicketAlt className="text-xl mb-1" />
                        <span className="text-[10px] font-mono bg-white/20 px-1.5 py-0.5 rounded font-bold">{vch.type}</span>
                      </div>
                      <div className="p-4 flex flex-col justify-between flex-1">
                        <h4 className="font-bold text-sm text-slate-800">{vch.title}</h4>
                        <p className="text-[10px] text-rose-500 font-semibold mt-2">📅 Berlaku s/d {vch.expiry}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="history" className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2"><FaHistory className="text-slate-400" /> Histori Rekam Medis Milo</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-400 font-bold border-b border-slate-100">
                      <th className="p-3">Tanggal</th>
                      <th className="p-3">Jenis Pelayanan</th>
                      <th className="p-3">Dokter</th>
                      <th className="p-3 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {medicalHistory.map((hist, i) => (
                      <tr key={i} className="hover:bg-slate-50/50">
                        <td className="p-3 text-slate-500 font-mono">{hist.date}</td>
                        <td className="p-3 text-slate-800 font-bold">{hist.activity}</td>
                        <td className="p-3 text-slate-600">{hist.vet}</td>
                        <td className="p-3 text-center"><span className="bg-emerald-100 text-emerald-700 text-xs px-2.5 py-1 rounded-full font-bold">{hist.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="transactions" className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2"><FaReceipt className="text-indigo-500" /> Riwayat Transaksi Pembayaran Layanan</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-400 font-bold border-b border-slate-100">
                      <th className="p-3">No. Invoice</th>
                      <th className="p-3">Tanggal</th>
                      <th className="p-3">Layanan</th>
                      <th className="p-3">Total</th>
                      <th className="p-3">Metode</th>
                      <th className="p-3 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {transactionHistory.map((tx, i) => (
                      <tr key={i} className="hover:bg-slate-50/50">
                        <td className="p-3 text-slate-500 font-mono text-xs">{tx.invoice}</td>
                        <td className="p-3 text-slate-600 font-mono">{tx.date}</td>
                        <td className="p-3 text-slate-800 font-bold">{tx.service}</td>
                        <td className="p-3 text-indigo-600 font-bold">{tx.total}</td>
                        <td className="p-3 text-slate-600 flex items-center gap-1.5 mt-1.5"><FaWallet className="text-slate-400 text-xs" /> {tx.method}</td>
                        <td className="p-3 text-center"><span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs px-2.5 py-1 rounded-md font-bold">{tx.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        ) : (
          /* KONTEN FEEDBACK */
          <section className="max-w-2xl mx-auto py-6">
            {feedbackSubmitted ? (
              <div className="bg-white p-10 rounded-[2.5rem] shadow-xl text-center border border-slate-100 space-y-6">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto text-3xl"><FaCheckCircle /></div>
                <h2 className="text-3xl font-black text-slate-900">Feedback Terkirim!</h2>
                <button onClick={() => { setFeedbackSubmitted(false); setActiveTab("dashboard"); }} className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-xs cursor-pointer">Kembali ke Dashboard</button>
              </div>
            ) : (
              <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-10 space-y-6">
                <h2 className="text-2xl font-black text-slate-900">📝 Berikan Ulasan Layanan</h2>
                <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center">
                    <div className="flex gap-1.5">
                      {[...Array(5)].map((s, idx) => {
                        idx += 1;
                        return (
                          <button type="button" key={idx} className={`text-3xl cursor-pointer ${idx <= (hover || rating) ? "text-amber-400" : "text-slate-200"}`} onClick={() => setRating(idx)} onMouseEnter={() => setHover(idx)} onMouseLeave={() => setHover(rating)}><FaStar /></button>
                        );
                      })}
                    </div>
                  </div>
                  <textarea required rows="4" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Tulis kritik dan saran..." className="w-full p-4 rounded-xl border border-slate-200 text-sm focus:outline-indigo-600 resize-none font-medium"></textarea>
                  <button type="submit" disabled={rating === 0} className="w-full py-3.5 bg-indigo-600 text-white rounded-xl text-sm font-bold cursor-pointer">Kirim Evaluasi</button>
                </form>
              </div>
            )}
          </section>
        )}

      </main>

      {/* ─── MODAL DIALOG POP-UP BOOKING JANJI TEMU (INTERAKTIF) ─── */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white w-full max-w-md rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden relative p-6 space-y-4">
            
            {/* Tombol Tutup Modal */}
            <button 
              onClick={() => setIsBookingOpen(false)}
              className="absolute right-5 top-5 text-slate-400 hover:text-slate-600 transition-colors p-1 cursor-pointer"
            >
              <FaTimes className="text-lg" />
            </button>

            {bookingSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl shadow-inner">
                  <FaCheckCircle />
                </div>
                <h3 className="text-xl font-black text-slate-900">Booking Berhasil Dibuat!</h3>
                <p className="text-xs text-slate-400">Sistem sedang mendaftarkan jadwal antrean prioritas Gold Member Anda...</p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl"><FaCalendarPlus /></div>
                  <div>
                    <h3 className="font-black text-base text-slate-900">Reservasi Kunjungan Instan</h3>
                    <p className="text-[11px] text-slate-400">Prioritas Antrean Tanpa Menunggu Lama</p>
                  </div>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4 text-xs font-semibold text-slate-600">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Pilih Pasien Anabul</label>
                    <select className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-indigo-600">
                      <option>{petProfile.name} ({petProfile.species} - {petProfile.breed})</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Kategori Tindakan</label>
                    <select required className="w-full p-3 rounded-xl border border-slate-200 text-slate-800 bg-white focus:outline-indigo-600">
                      <option value="">-- Pilih Jenis Layanan --</option>
                      <option>Konsultasi Dokter Spesialis</option>
                      <option>Vaksinasi Tahunan / Booster</option>
                      <option>Grooming Sehat & Potong Kuku</option>
                      <option>Sterilisasi / Operasi Minor</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Pilih Tanggal</label>
                      <input required type="date" className="w-full p-3 rounded-xl border border-slate-200 text-slate-800 bg-white focus:outline-indigo-600 font-mono" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Jam Kedatangan</label>
                      <input required type="time" className="w-full p-3 rounded-xl border border-slate-200 text-slate-800 bg-white focus:outline-indigo-600 font-mono" />
                    </div>
                  </div>

                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-100 text-[11px] text-amber-800 leading-relaxed font-medium">
                    ✨ Sebagai <strong>Gold Member</strong>, Anda tidak dikenakan biaya reservasi di muka dan mendapatkan prioritas dokter utama.
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button 
                      type="button" 
                      onClick={() => setIsBookingOpen(false)}
                      className="w-1/3 py-3 bg-slate-100 text-slate-500 rounded-xl font-bold hover:bg-slate-200 transition cursor-pointer text-center"
                    >
                      Batal
                    </button>
                    <button 
                      type="submit"
                      className="w-2/3 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 shadow-md transition cursor-pointer flex items-center justify-center gap-1"
                    >
                      Konfirmasi Booking
                    </button>
                  </div>
                </form>
              </>
            )}

          </div>
        </div>
      )}

      <footer className="bg-slate-900 text-slate-500 text-xs text-center py-8 border-t border-slate-800 mt-20">
        <p>© 2026 VetCare CRM Platform. All Rights Reserved.</p>
      </footer>
    </div>
  );
}