import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

export default function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [dataForm, setDataForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.username,
        password: dataForm.password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      })
      .catch((err) => {
        setError(err.response?.data?.message || "Login failed");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-[#f5f7ff] flex items-center justify-center px-6">
      
      <div className="w-full max-w-md">
        
        {/* Logo */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-black tracking-tight text-[#1e1e2f]">
            Vet<span className="text-[#5b5ce2]">Care</span>
          </h1>

          <p className="text-gray-500 mt-3 text-sm">
            Login to continue your account
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-[32px] p-8 shadow-[0_10px_40px_rgba(91,92,226,0.08)]">
          
          <h2 className="text-3xl font-bold text-center text-[#1e1e2f]">
            Welcome Back 👋
          </h2>

          <p className="text-center text-gray-400 mt-2 mb-8 text-sm">
            Please enter your account details
          </p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-500 p-4 rounded-2xl flex items-center text-sm mb-5">
              <BsFillExclamationDiamondFill className="mr-2 text-lg" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div>
              <label className="text-sm font-semibold text-gray-600 mb-2 block">
                Username
              </label>

              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                onChange={handleChange}
                required
                className="w-full bg-[#f4f7fe] p-4 rounded-2xl outline-none border border-transparent focus:border-[#5b5ce2] focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-600 mb-2 block">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                required
                className="w-full bg-[#f4f7fe] p-4 rounded-2xl outline-none border border-transparent focus:border-[#5b5ce2] focus:bg-white transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#5b5ce2] hover:bg-[#4b4cd3] text-white p-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center shadow-lg shadow-indigo-100 mt-2"
            >
              {loading ? (
                <ImSpinner2 className="animate-spin text-2xl" />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}