import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function MainLayout() {
  // STATE ANIMASI: Mengontrol kapan efek masuk dimulai
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Memberikan jeda super singkat (50ms) agar browser siap mengeksekusi transisi CSS
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
      {/* Komponen Sidebar bawaan kamu */}
      <Sidebar />

      <div className="flex-1 p-6">
        {/* Komponen Header bawaan kamu */}
        <Header />

        <div className="mt-6">
          {/* Tempat munculnya halaman dashboard / notes */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}