import { useState } from "react";
// JALUR API SUDAH BENAR: Naik 2 tingkat dari auth ke src, lalu masuk services
import { regisAPI } from "../../services/RegisApi";

export default function Register() {
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

      await regisAPI.registerUser([dataForm]); 

      setSuccess("Registrasi akun berhasil disimpan !");
      

      setDataForm({ username: "", password: "" });
    } catch (err) {
   
      const errorMsg = err.response?.data?.message || err.message;
      setError(`Registrasi Gagal: ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Create Account</h1>

      {/* Notifikasi Error menggunakan HTML biasa + Tailwind */}
      {error && (
        <div className="p-4 mb-4 text-sm text-red-800 bg-red-100 rounded-2xl">
          {error}
        </div>
      )}

      {/* Notifikasi Sukses menggunakan HTML biasa + Tailwind */}
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
          {loading ? "Mohon Tunggu..." : "Register"}
        </button>
      </form>
    </div>
  );
}