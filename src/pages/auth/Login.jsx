import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { loginAPI } from "../../services/LoginApi";

export default function Login() {
  const navigate = useNavigate(); 

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  // STATE BARU: Untuk mengatur efek animasi menghilang (fade out)
  const [isExiting, setIsExiting] = useState(false);

  const [dataForm, setDataForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const user = await loginAPI.loginUser(dataForm.username, dataForm.password);

      if (user.length > 0) {
        const userData = user[0];
        const role = userData.role || "user";

        // Halaman ini khusus admin — tolak jika bukan admin
        if (role !== "admin") {
          setError("Akun ini bukan admin. Silakan login melalui halaman utama.");
          return;
        }

        setSuccess(`Selamat datang kembali, ${userData.username}! Login Berhasil.`);
        localStorage.setItem("user_session", JSON.stringify(userData));
        setDataForm({ username: "", password: "" });

        setTimeout(() => { setIsExiting(true); }, 1000);
        setTimeout(() => { navigate("/admin"); }, 1500);

      } else {
        setError("Username atau Password salah! Akun tidak ditemukan.");
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || err.message;
      setError(`Login Gagal: ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    // DI SINI KUNCINYA: Kita pasang class transition & opacity berdasarkan state isExiting
    <div className={`transition-all duration-500 ease-in-out ${isExiting ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-none"}`}>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Login Account</h1>

        {error && (
          <div className="p-4 mb-4 text-sm text-red-800 bg-red-100 rounded-2xl animate-pulse">
            {error}
          </div>
        )}

        {success && (
          <div className="p-4 mb-4 text-sm text-green-800 bg-green-100 rounded-2xl">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="username"           
            value={dataForm.username} 
            onChange={handleChange}   
            placeholder="Username"
            required
            disabled={loading}        
            className="w-full bg-[#f4f7fe] p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5b5ce2]"
          />

          <input
            type="password"
            name="password"           
            value={dataForm.password} 
            onChange={handleChange}   
            placeholder="Password"
            required
            disabled={loading}        
            className="w-full bg-[#f4f7fe] p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5b5ce2]"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#5b5ce2] text-white p-4 rounded-2xl font-semibold disabled:opacity-50 hover:bg-[#4a4bc7] transition-all transform active:scale-95"
          >
            {loading ? "Memeriksa Akun..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}