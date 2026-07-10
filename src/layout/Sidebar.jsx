import { NavLink, useNavigate } from "react-router-dom";

import {
  FaHome,
  FaCalendarAlt,
  FaCog,
  FaSignOutAlt,
  FaUser,
  FaStethoscope,
  FaUserCheck,
  FaBox,
  FaUserTie,
  FaUserCog,
  FaReceipt,
  FaRegCommentDots,
} from "react-icons/fa";

import Container from "../components/layout/Container";

export default function Sidebar() {
  const navigate = useNavigate();

  const menuClass = ({ isActive }) =>
    `flex items-center gap-4 p-4 rounded-2xl transition-all
    ${
      isActive
        ? "bg-[#eef1ff] text-[#5b5ce2] font-bold"
        : "text-gray-500 hover:bg-[#eef1ff]"
    }`;

  const handleLogout = () => {
    localStorage.removeItem("user_session");
    navigate("/loginGuest", { replace: true });
  };

  // Ambil nama admin dari session
  const session = JSON.parse(localStorage.getItem("user_session") || "{}");
  const adminName = session?.name || session?.username || "Admin";

  return (
    <Container className="w-[260px] bg-white border-r min-h-screen flex flex-col">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold">
          Vet<span className="text-[#5b5ce2]">Care</span>
        </h1>
        <p className="text-xs text-slate-400 mt-1">Admin Panel</p>
      </div>

      {/* Menu */}
      <div className="space-y-1 flex-1">
        <NavLink to="/admin" end className={menuClass}>
          <FaHome />
          <span>Overview</span>
        </NavLink>

        <NavLink to="/admin/appointments" className={menuClass}>
          <FaCalendarAlt />
          <span>Appointments</span>
        </NavLink>

        <NavLink to="/admin/pelanggan" className={menuClass}>
          <FaUser />
          <span>Pelanggan</span>
        </NavLink>

        <NavLink to="/admin/layanan" className={menuClass}>
          <FaStethoscope />
          <span>Layanan</span>
        </NavLink>

        <NavLink to="/admin/membership" className={menuClass}>
          <FaUserCheck />
          <span>Membership</span>
        </NavLink>

        <NavLink to="/admin/inventory" className={menuClass}>
          <FaBox />
          <span>Inventory</span>
        </NavLink>

        <NavLink to="/admin/staff" className={menuClass}>
          <FaUserTie />
          <span>Staff</span>
        </NavLink>

        <NavLink to="/admin/user" className={menuClass}>
          <FaUserCog />
          <span>User</span>
        </NavLink>

        <NavLink to="/admin/transaksi" className={menuClass}>
          <FaReceipt />
          <span>Data Transaksi</span>
        </NavLink>

        <NavLink to="/admin/feedback" className={menuClass}>
          <FaRegCommentDots />
          <span>Kelola Feedback</span>
        </NavLink>
      </div>

      {/* Bottom — Admin Info + Logout */}
      <div className="mt-8 border-t border-slate-100 pt-6">
        {/* Admin info */}
        <div className="flex items-center gap-3 px-4 mb-4">
          <div className="w-9 h-9 rounded-full bg-[#5b5ce2]/10 text-[#5b5ce2] flex items-center justify-center font-extrabold text-sm flex-shrink-0">
            {adminName[0].toUpperCase()}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-slate-700 truncate">{adminName}</p>
            <p className="text-[10px] text-slate-400">Administrator</p>
          </div>
        </div>

        <div className="space-y-1">
          <NavLink to="/admin/settings" className={menuClass}>
            <FaCog />
            <span>Settings</span>
          </NavLink>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 p-4 rounded-2xl transition-all text-red-400 hover:bg-red-50 hover:text-red-600 cursor-pointer"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </Container>
  );
}
