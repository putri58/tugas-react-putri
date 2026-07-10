import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { regisAPI } from "../../services/RegisApi";
import { FaPaw, FaEye, FaEyeSlash } from "react-icons/fa";

export default function RegisterGuest() {
  const navigate = useNavigate();

  const [loading, setLoading]           = useState(false);
  const [error, setError]               = useState("");
  const [success, setSuccess]           = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name:     "",
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

      // Kirim hanya kolom yang ada di tabel Supabase: username, password, name, role
      await regisAPI.registerUser({
        username: formData.username,
        password: formData.password,
        name:     formData.name,
        role:     "user",
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
          <p className="text-slate-500 text-sm mt-1">Bergabung untuk akses booking & layanan klinik</p>
        </div>

        {/* Alerts */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-2xl mb-5">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-2xl mb-5">
            ✅ {success}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">

          {/* Nama */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Masukkan nama lengkap"
              required
              disabled={loading}
              className="w-full bg-[#f4f7fe] p-4 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5b5ce2]"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Buat username unik"
              required
              disabled={loading}
              className="w-full bg-[#f4f7fe] p-4 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5b5ce2]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Minimal 6 karakter"
                required
                disabled={loading}
                className="w-full bg-[#f4f7fe] p-4 pr-12 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5b5ce2]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#5b5ce2] hover:bg-[#4a4bc7] text-white py-4 rounded-2xl font-bold text-base transition-all active:scale-95 disabled:opacity-50 cursor-pointer mt-2"
          >
            {loading ? "Mendaftar..." : "Daftar Sekarang"}
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Sudah punya akun?{" "}
          <button
            onClick={() => navigate("/loginGuest")}
            className="text-[#5b5ce2] font-bold hover:underline cursor-pointer"
          >
            Login di sini
          </button>
        </p>

        <p className="text-center text-xs text-slate-400 mt-4">
          <button
            onClick={() => navigate("/guest")}
            className="hover:text-[#5b5ce2] cursor-pointer"
          >
            ← Kembali ke beranda
          </button>
        </p>

      </div>
    </div>
  );
}
