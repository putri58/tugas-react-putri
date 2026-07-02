import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { regisAPI } from "../../services/RegisApi";
import { FaPaw, FaWhatsapp, FaEye, FaEyeSlash } from "react-icons/fa";

export default function RegisterGuest() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    namaLengkap: "",
    email: "",
    noHp: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password.length < 6) {
      setError("Password minimal 6 karakter.");
      return;
    }

    try {
      setLoading(true);
      await regisAPI.registerUser({
        username: formData.username,
        password: formData.password,
        namaLengkap: formData.namaLengkap,
        email: formData.email,
        noHp: formData.noHp,
        role: "member",
      });

      setSuccess("Registrasi berhasil! Silakan login untuk melanjutkan.");
      setTimeout(() => navigate("/loginGuest"), 1800);
    } catch (err) {
      const msg = err.response?.data?.message || err.message;
      setError(`Registrasi gagal: ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#071330] via-[#13255e] to-[#3730a3] py-12 px-4">
      <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md p-10">

        {/* Logo */}
        <div className="text-center mb-8">
          <button
            onClick={() => navigate("/guest")}
            className="inline-flex items-center gap-2 text-2xl font-extrabold text-[#071330] cursor-pointer"
          >
            <FaPaw className="text-yellow-400" />
            Putri<span className="text-indigo-600">PetCare</span>
          </button>
          <h2 className="text-xl font-bold text-slate-800 mt-3">Daftar Member</h2>
          <p className="text-slate-500 text-sm mt-1">Bergabung untuk akses booking & loyalty program</p>
        </div>

        {/* Alerts */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-2xl mb-5">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-2xl mb-5">
            {success}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Nama Lengkap</label>
            <input
              type="text"
              name="namaLengkap"
              value={formData.namaLengkap}
              onChange={handleChange}
              placeholder="Masukkan nama lengkap"
              required
              disabled={loading}
              className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-sm focus:outline-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="nama@email.com"
              required
              disabled={loading}
              className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-sm focus:outline-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Nomor HP / WhatsApp</label>
            <input
              type="tel"
              name="noHp"
              value={formData.noHp}
              onChange={handleChange}
              placeholder="0812-xxxx-xxxx"
              required
              disabled={loading}
              className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-sm focus:outline-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username unik Anda"
              required
              disabled={loading}
              className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-sm focus:outline-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Minimal 6 karakter"
                required
                disabled={loading}
                className="w-full bg-slate-50 border border-slate-200 p-3.5 pr-11 rounded-xl text-sm focus:outline-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold text-base transition shadow-lg shadow-indigo-200 disabled:opacity-50 mt-2 cursor-pointer"
          >
            {loading ? "Mendaftar..." : "Daftar Sekarang"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-slate-200" />
          <span className="text-xs text-slate-400">atau</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {/* WhatsApp Register */}
        <a
          href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20daftar%20member%20VetCare."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 border border-green-300 text-green-600 hover:bg-green-50 py-3 rounded-2xl font-semibold text-sm transition"
        >
          <FaWhatsapp size={16} />
          Daftar via WhatsApp
        </a>

        <p className="text-center text-sm text-slate-500 mt-6">
          Sudah punya akun?{" "}
          <button
            onClick={() => navigate("/loginGuest")}
            className="text-indigo-600 font-bold hover:underline cursor-pointer"
          >
            Login di sini
          </button>
        </p>

        <p className="text-center text-xs text-slate-400 mt-4">
          <button onClick={() => navigate("/guest")} className="hover:text-indigo-600 cursor-pointer">
            ← Kembali ke beranda
          </button>
        </p>
      </div>
    </div>
  );
}
