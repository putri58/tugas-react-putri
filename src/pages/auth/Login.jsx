import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { IoCloseOutline } from "react-icons/io5";

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

    setDataForm({
      ...dataForm,
      [name]: value,
    });
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
    <div className="min-h-screen bg-[#1b12c9] flex items-center justify-center relative px-4">

      {/* Close Button */}
      <button className="absolute top-10 text-white border border-white rounded-full p-2">
        <IoCloseOutline size={22} />
      </button>

      {/* Form Box */}
      <div className="bg-[#f5f5f5] w-full max-w-md rounded-[30px] px-10 py-12">



        {/* Title */}
        <h2 className="text-center text-[20px] font-bold text-gray-800 mb-8">
          Login
        </h2>

        {/* Error */}
        {error && (
          <div className="flex items-center gap-2 bg-red-100 border border-red-300 text-red-600 text-sm p-3 rounded-xl mb-5">
            <BsFillExclamationDiamondFill />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Username */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Username
            </label>

            <input
              type="text"
              name="username"
              placeholder="Enter username"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-full px-5 py-4 text-sm outline-none bg-transparent"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-full px-5 py-4 text-sm outline-none bg-transparent"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <input type="checkbox" className="accent-[#1b12c9]" />

            <p>
              I accept the{" "}
              <span className="text-[#1b12c9] underline cursor-pointer">
                Terms & Conditions
              </span>
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1b12c9] hover:bg-[#140da1] text-white py-4 rounded-full font-semibold transition"
          >
            {loading ? (
              <ImSpinner2 className="animate-spin mx-auto text-xl" />
            ) : (
              "LOGIN"
            )}
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <span className="text-[#1b12c9] cursor-pointer">
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}