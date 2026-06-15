import { useNavigate } from "react-router-dom";

import {
  FaPaw,
  FaStethoscope,
  FaCut,
  FaHospital,
  FaWhatsapp,
  FaStar,
} from "react-icons/fa";

export default function HomeGuest() {
  const navigate = useNavigate();

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
            <a href="#contact">Kontak</a>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => navigate("/loginGuest")}
              className="border px-4 py-2 rounded-xl hover:bg-white hover:text-black transition"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/registrasiGuest")}
              className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-semibold hover:bg-yellow-300 transition"
            >
              Daftar
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
                  className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
                >
                  Daftar Member
                </button>

                <button className="border border-white px-8 py-4 rounded-xl">
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
        <h2 className="text-center text-4xl font-bold mb-14">
          Layanan Unggulan
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-8">
          <div className="bg-slate-50 p-8 rounded-3xl shadow hover:scale-105 transition">
            <FaStethoscope size={40} />
            <h3 className="font-bold mt-4">Konsultasi</h3>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl shadow hover:scale-105 transition">
            <FaPaw size={40} />
            <h3 className="font-bold mt-4">Vaksinasi</h3>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl shadow hover:scale-105 transition">
            <FaCut size={40} />
            <h3 className="font-bold mt-4">Grooming</h3>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl shadow hover:scale-105 transition">
            <FaHospital size={40} />
            <h3 className="font-bold mt-4">Rawat Inap</h3>
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
  onClick={() => navigate("/register")}
  className="w-full mt-8 bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700"
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

              <button className="bg-yellow-400 text-black rounded-xl font-bold">
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

      {/* TESTIMONI */}
      <section className="py-20 bg-slate-100">
        <h2 className="text-center text-4xl font-bold mb-14">
          Testimoni Pelanggan
        </h2>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 shadow text-center">
          <div className="flex justify-center gap-1 text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p className="text-xl mt-6">
            Pelayanan sangat ramah dan profesional. Kucing saya cepat pulih
            setelah perawatan.
          </p>

          <h4 className="font-bold mt-4">- Putri Agustin</h4>
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

            <button className="bg-yellow-400 text-black px-8 rounded-xl font-bold">
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
        href="#"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-5 rounded-full shadow-2xl animate-bounce"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}
