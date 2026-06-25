import { useNavigate } from "react-router-dom";
import {
  FaPaw,
  FaWhatsapp,
  FaStar,
} from "react-icons/fa";

export default function HomeGuest() {
  const navigate = useNavigate();

  // Data Dummy Feedback/Review Pelanggan
  const reviews = [
    {
      name: "Putri Agustin",
      pet: "Kucing (Luna)",
      rating: 5,
      date: "2 hari yang lalu",
      text: "Pelayanan sangat ramah dan profesional. Kucing saya cepat pulih setelah perawatan intensif di sini. Dokter penjelasannya sangat detail!",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    },
    {
      name: "Rian Kurniawan",
      pet: "Anjing (Golden)",
      rating: 5,
      date: "1 minggu yang lalu",
      text: "Tempat grooming terbaik di Pekanbaru. Bersih, wangi tahan lama, dan pegawainya sangat sabar menghadapi anjing saya yang agak rewel.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    },
    {
      name: "Siti Rahma",
      pet: "Kelinci (Mochi)",
      rating: 4,
      date: "2 minggu yang lalu",
      text: "Sangat terbantu dengan fitur pengingat vaksin otomatisnya. Dokter hewannya juga suportif banget pas konsultasi tentang nutrisi kelinci.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* NAVBAR */}
      <nav className="bg-[#071330] text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
          <h1 className="text-3xl font-bold">
            VetCare<span className="text-yellow-400">Guest</span>
          </h1>

          <div className="hidden md:flex gap-8">
            <a href="#home">Home</a>
            <a href="#services">Layanan</a>
            <a href="#membership">Membership</a>
            <a href="#crm">Promo</a>
            <a href="#reviews">Review</a>
            <a href="#contact">Kontak</a>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => navigate("/loginGuest")}
              className="border px-4 py-2 rounded-xl hover:bg-white hover:text-black transition cursor-pointer"
            >
              Login Sebagai Member
            </button>

            <button
              onClick={() => navigate("/registrasiGuest")}
              className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-semibold hover:bg-yellow-300 transition cursor-pointer"
            >
              Daftar Membership
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="bg-gradient-to-r from-[#071330] via-[#13255e] to-[#4338ca] text-white"
      >
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
                🐾 Smart Veterinary
              </span>

              <h1 className="text-6xl font-bold mt-6 leading-tight">
                Kesehatan Terbaik Untuk
                <span className="text-yellow-400"> Sahabat Berbulu</span>
              </h1>

              <p className="text-xl mt-6 text-slate-300">
                Booking online, membership digital, loyalty point, promo
                personalisasi, dan pengingat kesehatan hewan otomatis.
              </p>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => navigate("/registrasiGuest")}
                  className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition cursor-pointer"
                >
                  Daftar Member
                </button>

                <button 
                onClick={() => navigate("/About")}
                className="border border-white px-8 py-4 rounded-xl cursor-pointer">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
                alt="pet"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATISTIK */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["10K+", "Hewan Ditangani"],
            ["98%", "Kepuasan Pelanggan"],
            ["25+", "Dokter Profesional"],
            ["15+", "Tahun Pengalaman"],
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow p-8 text-center"
            >
              <h2 className="text-5xl font-bold text-indigo-600">{item[0]}</h2>
              <p className="mt-3">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LAYANAN */}
      <section id="services" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">
              Layanan Unggulan Kami
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan perawatan kesehatan hewan
              komprehensif yang didukung oleh tenaga medis ahli dan fasilitas
              modern.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Konsultasi Medis",
                desc: "Pemeriksaan kesehatan menyeluruh oleh dokter hewan berpengalaman.",
                img: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=500&auto=format&fit=crop",
                path: "/konsul",
              },
              {
                title: "Vaksinasi & Steril",
                desc: "Perlindungan imunisasi lengkap dan prosedur sterilisasi aman untuk anabul.",
                img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&auto=format&fit=crop",
                path: "/vaksin",
              },
              {
                title: "Pet Grooming",
                desc: "Perawatan kecantikan dan kebersihan agar hewan tetap wangi dan sehat.",
                img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500&auto=format&fit=crop",
                path: "/grooming",
              },
              {
                title: "Rawat Inap (Hospital)",
                desc: "Fasilitas rawat inap 24 jam dengan pengawasan ketat tenaga medis.",
                img: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?w=500&auto=format&fit=crop",
                path: "/ranap",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100"
              >
                {/* Container Gambar */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Konten Teks */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                      <FaPaw className="text-indigo-600 text-xs" />
                    </div>
                    <h3 className="font-bold text-xl text-slate-800">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {service.desc}
                  </p>
                  
                  {/* PERBAIKAN UTAMA DI SINI: Ditambahkan onClick dan utilitas kursor */}
                  <button 
                    onClick={() => navigate(service.path)}
                    className="text-indigo-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-4 transition-all relative z-10 cursor-pointer"
                  >
                    Detail Layanan <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section id="membership" className="py-20 bg-slate-100">
        <h2 className="text-center text-4xl font-bold mb-14">
          Membership Program
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-8">
          {[
            {
              title: "Silver",
              price: "Rp50.000/Tahun",
              color: "border-slate-400",
            },
            {
              title: "Gold",
              price: "Rp150.000/Tahun",
              color: "border-yellow-500",
            },
            {
              title: "Platinum",
              price: "Rp300.000/Tahun",
              color: "border-indigo-500",
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 border-2 ${plan.color}`}
            >
              <h3 className="text-3xl font-bold">{plan.title}</h3>

              <p className="text-xl mt-4">{plan.price}</p>

              <ul className="mt-6 space-y-3">
                <li>✅ Loyalty Point</li>
                <li>✅ Reminder Vaksin</li>
                <li>✅ Riwayat Digital</li>
                <li>✅ Promo Member</li>
              </ul>

              <button
                onClick={() => navigate("/registrasiGuest")}
                className="w-full mt-8 bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition cursor-pointer"
              >
                Pilih Paket
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CRM LEAD CAPTURE */}
      <section id="crm" className="py-20">
        <div className="max-w-5xl mx-auto px-8">
          <div className="bg-indigo-600 text-white rounded-3xl p-10">
            <h2 className="text-4xl font-bold">🎁 Klaim Voucher Member Baru</h2>

            <p className="mt-4">
              Dapatkan diskon grooming 20% untuk kunjungan pertama Anda.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="p-4 rounded-xl text-black"
              />

              <input
                type="email"
                placeholder="Email"
                className="p-4 rounded-xl text-black"
              />

              <button className="bg-yellow-400 text-black rounded-xl font-bold cursor-pointer">
                Klaim Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PROMO */}
      <section className="py-20 bg-white">
        <h2 className="text-center text-4xl font-bold mb-14">Promo Spesial</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-8">
          <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-8 rounded-3xl">
            <h3 className="text-2xl font-bold">Grooming 30%</h3>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-3xl">
            <h3 className="text-2xl font-bold">Gratis Konsultasi</h3>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-8 rounded-3xl">
            <h3 className="text-2xl font-bold">Voucher Rp50.000</h3>
          </div>
        </div>
      </section>

      {/* SECTION FEEDBACK & REVIEWS */}
      <section id="reviews" className="py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900">
              Feedback & Review Pelanggan
            </h2>
            <p className="text-slate-600 mt-4 text-lg">
              Apa kata para pet parents tentang pelayanan kesehatan dan
              fasilitas di VetCare?
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 bg-white p-4 rounded-2xl shadow-sm max-w-md mx-auto">
              <div className="flex items-center gap-1 text-yellow-500 text-2xl">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <span className="text-slate-800 font-bold text-lg">
                4.9 / 5.0
              </span>
              <span className="text-slate-400 hidden sm:inline">|</span>
              <span className="text-slate-500 text-sm">
                (Dari 1,240+ Ulasan Pelanggan)
              </span>
            </div>
          </div>

          {/* Grid Card Testimoni */}
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} size={16} />
                      ))}
                    </div>
                    <span className="text-xs text-slate-400">
                      {review.date}
                    </span>
                  </div>

                  <p className="text-slate-600 italic leading-relaxed text-sm">
                    "{review.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-slate-100">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-100"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {review.name}
                    </h4>
                    <p className="text-xs text-indigo-600 font-medium">
                      {review.pet}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/loginGuest")}
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-indigo-700 transition cursor-pointer"
            >
              Lihat Semua Review
            </button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[#071330] text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-4xl font-bold">Dapatkan Tips Kesehatan Hewan</h2>

          <p className="mt-4 text-slate-300">
            Subscribe untuk menerima edukasi dan promo.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center">
            <input
              type="email"
              placeholder="Masukkan Email"
              className="p-4 rounded-xl text-black w-full md:w-96"
            />

            <button className="bg-yellow-400 text-black px-8 rounded-xl font-bold cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-black text-white text-center py-10">
        <h2 className="text-2xl font-bold">VetCare Guest</h2>
        <p className="mt-3">Jl. UmbanSari NO.1,Rumbai, Pekanbaru</p>
        <p className="mt-2">info@vetcare.com | 0812-3456-7890</p>
      </footer>

      {/* FLOATING BUTTON */}
      <a
        href="https://wa.me/081234567890"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-5 rounded-full shadow-2xl animate-bounce z-50"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}