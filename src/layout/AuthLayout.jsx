import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f7fe]">

      <div className="bg-white w-[450px] p-10 rounded-3xl shadow-sm">

        <h1 className="text-4xl font-extrabold text-center mb-8">
          Vet<span className="text-[#5b5ce2]">Care</span>
        </h1>

        <Outlet />

      </div>

    </div>
  );
}