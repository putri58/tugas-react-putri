import { useState } from "react";
// 1. IMPORT useNavigate dari react-router-dom
import { useNavigate } from "react-router-dom"; 
import { loginAPI } from "../../services/LoginApi";

export default function Login() {
  // 2. INISIALISASI FUNGSI NAVIGASI
  const navigate = useNavigate(); 

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
        setSuccess(`Selamat datang kembali, ${user[0].username}! Login Berhasil.`);
        
        // Simpan data login ke localStorage browser
        localStorage.setItem("user_session", JSON.stringify(user[0]));
        
        setDataForm({ username: "", password: "" });

        // 3. DI SINI KUNCINYA: Berikan jeda 1,5 detik (1500ms) agar user sempat membaca 
        // boks sukses hijau, lalu otomatis lempar ke halaman /admin
        setTimeout(() => {
          navigate("/admin");
        }, 1500);

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
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Login Account</h1>

      {error && (
        <div className="p-4 mb-4 text-sm text-red-800 bg-red-100 rounded-2xl">
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
          className="w-full bg-[#5b5ce2] text-white p-4 rounded-2xl font-semibold disabled:opacity-50 hover:bg-[#4a4bc7] transition-all"
        >
          {loading ? "Memeriksa Akun..." : "Login"}
        </button>
      </form>
    </div>
  );
}