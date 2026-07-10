import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function MainLayout() {
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // ── Guard: hanya role 'admin' yang boleh akses ──
    const session = localStorage.getItem("user_session");
    if (!session) {
      navigate("/loginGuest", { replace: true });
      return;
    }
    const user = JSON.parse(session);
    if (user.role !== "admin") {
      navigate("/loginGuest", { replace: true });
      return;
    }

    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex bg-[#f4f7fe] min-h-screen transition-all duration-700 ease-out ${
        isMounted
          ? "opacity-100 translate-y-0 filter blur-none"
          : "opacity-0 translate-y-4 filter blur-sm"
      }`}
    >
      <Sidebar />
      <div className="flex-1 p-6">
        <Header />
        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}