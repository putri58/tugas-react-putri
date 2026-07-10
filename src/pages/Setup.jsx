import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { regisAPI } from "../services/RegisApi";
import { usersAPI } from "../services/UserApi";
import { FaPaw, FaShieldAlt, FaEye, FaEyeSlash, FaCheckCircle, FaLock } from "react-icons/fa";

/**
 * Halaman Setup Admin Pertama
 * ─────────────────────────────────────────────────────────
 * Hanya bisa diakses jika BELUM ada akun dengan role 'admin'.
 * Setelah akun admin pertama dibuat, halaman ini dikunci
 * dan redirect ke /loginGuest.
 */
export default function Setup() {
  const navigate = useNavigate();

  const [checking, setChecking]     = useState(true);  // sedang cek apakah sudah ada admin
  const [hasAdmin, setHasAdmin]     = useState(false);  // sudah ada admin → kunci halaman
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState("");
  const [success, setSuccess]       = useState(false);
  const [showPass, setShowPass]     = useState(false);

  const [form, setForm] = useState({
    name:     "",
    username: "",
    password: "",
  });

  // ── Cek apakah sudah ada akun admin ──────────────────────
  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const users = await usersAPI.getAllUsers();
        const adminExists = users.some((u) => u.role === "admin");
        setHasAdmin(adminExists);
      } catch (_) {
        // Jika gagal fetch, tetap tampilkan form (lebih aman)
      } finally {
        setChecking(false);
      }
    };
    checkAdmin();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password.length < 6) {
      setError("Password minimal 6 karakter.");
      return;
    }

    try {
      setLoading(true);
      await regisAPI.registerUser({
        name:     form.name,
        username: form.username,
        password: form.password,
        role:     "admin",
      });
      setSuccess(true);
      // Redirect ke login setelah 2.5 detik
      setTimeout(() => navigate("/loginGuest", { replace: true }), 2500);
    } catch (err) {
      const msg = err.response?.data?.message || err.message;
      setError(`Gagal membuat akun: ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  // ── Loading state ─────────────────────────────────────────
  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f7fe]">
        <div className="text-center text-slate-400">
          <FaPaw className="mx-auto text-4xl mb-3 animate-bounce text-[#5b5ce2]" />
          <p className="font-semibold">Memeriksa sistem...</p>
        </div>
      </div>
    );
  }

  // ── Halaman terkunci — admin sudah ada ────────────────────
  if (hasAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f7fe] px-4">
        <div className="bg-white rounded-[2.5rem] shadow-xl max-w-md w-full p-10 text-center">
          <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-5 text-2xl">
            <FaLock />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-800">Akses Ditolak</h2>
          <p className="text-slate-500 text-sm mt-3 leading-relaxed">
            Halaman setup sudah terkunci karena akun admin sudah tersedia.
            Silakan login dengan akun admin yang ada.
          </p>
          <button
            onClick={() => navigate("/loginGuest")}
            className="w-full mt-6 bg-[#5b5ce2] hover:bg-[#4a4bc7] text-white py-3.5 rounded-2xl font-bold transition cursor-pointer"
          >
            Ke Halaman Login
          </button>
        </div>
      </div>
    );
  }

  // ── Success screen ────────────────────────────────────────
  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f7fe] px-4">
        <div className="bg-white rounded-[2.5rem] shadow-xl max-w-md w-full p-10 text-center">
          <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-5 text-2xl">
            <FaCheckCircle />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-800">Akun Admin Berhasil Dibuat!</h2>
          <p className="text-slate-500 text-sm mt-3">
            Mengarahkan ke halaman login...
          </p>
        </div>
      </div>
    );
  }

  // ── Form Setup ────────────────────────────────────────────
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#071330] via-[#13255e] to-[#3730a3] px-4 py-12">
      <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md p-10">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#5b5ce2]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <FaShieldAlt className="text-[#5b5ce2] text-3xl" />
          </div>
          <h1 className="text-2xl font-extrabold text-slate-800">Setup Admin Pertama</h1>
          <p className="text-slate-500 text-sm mt-2 leading-relaxed">
            Buat akun administrator pertama untuk mengakses dashboard klinik.
            Halaman ini akan terkunci setelah setup selesai.
          </p>
        </div>

        {/* Warning banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3 mb-6 text-xs text-amber-700 font-medium">
          ⚠️ Halaman ini hanya bisa diakses <strong>sekali</strong>. Simpan kredensial admin dengan baik!
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-2xl mb-5">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Nama Admin</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nama lengkap administrator"
              required
              disabled={loading}
              className="w-full bg-[#f4f7fe] p-4 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5b5ce2]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Username untuk login"
              required
              disabled={loading}
              className="w-full bg-[#f4f7fe] p-4 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5b5ce2]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Password</label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Minimal 6 karakter"
                required
                disabled={loading}
                className="w-full bg-[#f4f7fe] p-4 pr-12 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5b5ce2]"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer"
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#5b5ce2] hover:bg-[#4a4bc7] text-white py-4 rounded-2xl font-bold text-base transition disabled:opacity-50 cursor-pointer mt-2"
          >
            {loading ? "Membuat Akun Admin..." : "Buat Akun Admin"}
          </button>
        </form>

        <p className="text-center text-xs text-slate-400 mt-6">
          <button onClick={() => navigate("/guest")} className="hover:text-[#5b5ce2] cursor-pointer">
            ← Kembali ke beranda
          </button>
        </p>

      </div>
    </div>
  );
}
