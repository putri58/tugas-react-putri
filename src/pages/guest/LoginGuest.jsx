import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../../services/LoginApi";
import { FaPaw, FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginGuest() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const [dataForm, setDataForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      setLoading(true);
      const user = await loginAPI.loginUser(dataForm.username, dataForm.password);

      if (user.length > 0) {
        const userData = user[0];
        const role = userData.role || "user";

        setSuccess(`Selamat datang, ${userData.name || userData.username}!`);
        setDataForm({ username: "", password: "" });

        if (role === "admin") {
          // ── Admin → simpan ke user_session, masuk ke /admin ──
          localStorage.setItem("user_session", JSON.stringify(userData));
          setTimeout(() => setIsExiting(true), 1000);
          setTimeout(() => navigate("/admin"), 1500);
        } else {
          // ── User/Member → simpan ke member_session, masuk ke /member ──
          localStorage.setItem("member_session", JSON.stringify(userData));
          const redirectTo = sessionStorage.getItem("booking_redirect") || "/member";
          sessionStorage.removeItem("booking_redirect");
          setTimeout(() => setIsExiting(true), 1000);
          setTimeout(() => navigate(redirectTo), 1500);
        }
      } else {
        setError("Username atau password salah. Akun tidak ditemukan.");
      }
    } catch (err) {
      const msg = err.response?.data?.message || err.message;
      setError(`Login gagal: ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-[#071330] via-[#13255e] to-[#3730a3] px-4 transition-all duration-500 ${
        isExiting ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
      }`}
    >
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
          <h2 className="text-xl font-bold text-slate-800 mt-3">Login</h2>
          <p className="text-slate-500 text-sm mt-1">Masuk dengan username atau nama terdaftar</p>
        </div>

        {/* Alerts */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-2xl mb-5">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-2xl mb-5">
            ✅ {success} Mengarahkan ke {JSON.parse(localStorage.getItem("user_session") || localStorage.getItem("member_session") || "{}").role === "admin" ? "dashboard admin" : "dashboard member"}...
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Username</label>
            <input
              type="text"
              name="username"
              value={dataForm.username}
              onChange={handleChange}
              placeholder="Username atau nama terdaftar"
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
                value={dataForm.password}
                onChange={handleChange}
                placeholder="Masukkan password"
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
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold text-base transition shadow-lg shadow-indigo-200 disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Memeriksa Akun..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Belum punya akun?{" "}
          <button
            onClick={() => navigate("/registrasiGuest")}
            className="text-indigo-600 font-bold hover:underline cursor-pointer"
          >
            Daftar Member
          </button>
        </p>

        <p className="text-center text-xs text-slate-400 mt-4">
          <button onClick={() => navigate("/guest")} className="hover:text-indigo-600 cursor-pointer">
            ← Kembali ke beranda
          </button>
          {" · "}
          <button onClick={() => navigate("/setup")} className="hover:text-indigo-600 cursor-pointer">
            Setup Admin
          </button>
        </p>
      </div>
    </div>
  );
}
