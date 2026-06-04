import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaCalendarAlt,
  FaCog,
  FaSignOutAlt,
  FaUser,
  FaStethoscope,
} from "react-icons/fa";

import Container from "../components/layout/Container";

export default function Sidebar() {

  const menuClass = ({ isActive }) =>
    `flex items-center gap-4 p-4 rounded-2xl transition-all
    ${
      isActive
        ? "bg-[#eef1ff] text-[#5b5ce2] font-bold"
        : "text-gray-500 hover:bg-[#eef1ff]"
    }`;

  return (

    <Container className="w-[260px] bg-white border-r min-h-screen">

      {/* Logo */}
      <div className="mb-10">

        <h1 className="text-3xl font-extrabold">
          Vet<span className="text-[#5b5ce2]">Care</span>
        </h1>

      </div>

      {/* Menu */}
      <div className="space-y-3">

        <NavLink to="/" className={menuClass}>
          <FaHome />
          <span>Overview</span>
        </NavLink>

        <NavLink
          to="/appointments"
          className={menuClass}
        >
          <FaCalendarAlt />
          <span>Appointments</span>
        </NavLink>

        <NavLink
          to="/Pelanggan"
          className={menuClass}
        >
          <FaUser />
          <span>Pelanggan</span>
        </NavLink>

                <NavLink
          to="/Layanan"
          className={menuClass}
        >
          <FaStethoscope />
          <span>Layanan</span>
        </NavLink>

      </div>

      {/* Bottom */}
      <div className="mt-12">

        <p className="text-gray-400 text-sm mb-3">
          ACCOUNT
        </p>

        <div className="space-y-3">

          <NavLink to="/" className={menuClass}>
            <FaCog />
            <span>Settings</span>
          </NavLink>

          <NavLink to="/login" className={menuClass}>
            <FaSignOutAlt />
            <span>Logout</span>
          </NavLink>

        </div>

      </div>

    </Container>
  );
}