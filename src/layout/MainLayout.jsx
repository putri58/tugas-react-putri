import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function MainLayout() {
  return (
    <div className="flex bg-[#f4f7fe] min-h-screen">

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