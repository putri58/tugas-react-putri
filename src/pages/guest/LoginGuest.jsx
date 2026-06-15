import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginGuest() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulasi Login Member
    if (email && password) {
      localStorage.setItem("role", "member");
      navigate("/member");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#071330] to-indigo-700">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-[420px]">

        <h1 className="text-4xl font-bold text-center mb-2">
          Login Member
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Masuk ke akun VetCare Anda
        </p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-4 rounded-xl mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-4 rounded-xl mb-6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-4 rounded-xl font-semibold"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6">
          Belum punya akun?
          <span
            onClick={() => navigate("/guest/register")}
            className="text-indigo-600 font-semibold cursor-pointer ml-1"
          >
            Daftar
          </span>
        </p>

      </div>
    </div>
  );
}