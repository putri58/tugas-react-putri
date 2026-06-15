import { useNavigate } from "react-router-dom";

export default function RegisterGuest() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    alert("Registrasi Berhasil!");
    navigate("/guest/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#071330] to-indigo-700">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-[500px]">

        <h1 className="text-4xl font-bold text-center mb-2">
          Daftar Member
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Bergabung dengan VetCare CRM
        </p>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-full border p-4 rounded-xl mb-4"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-4 rounded-xl mb-4"
          />

          <input
            type="text"
            placeholder="Nomor HP"
            className="w-full border p-4 rounded-xl mb-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-4 rounded-xl mb-6"
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold"
          >
            Daftar Sekarang
          </button>

        </form>

        <p className="text-center mt-6">
          Sudah punya akun?
          <span
            onClick={() => navigate("/guest/login")}
            className="text-indigo-600 font-semibold cursor-pointer ml-1"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}