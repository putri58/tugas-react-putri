import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

/* Layout */
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";

/* Loading */
import Loading from "./components/Loading";

/* Lazy Pages */
const Dashboard        = React.lazy(() => import("./pages/Dashboard"));
const Appointments     = React.lazy(() => import("./pages/appointments"));
const Pelanggan        = React.lazy(() => import("./pages/Pelanggan"));
const Layanan          = React.lazy(() => import("./pages/Layanan"));
const Membership       = React.lazy(() => import("./pages/Membership"));
const UsersList        = React.lazy(() => import("./pages/UsersList"));
const InventoryManagement = React.lazy(() => import("./pages/InventoryManagement"));
const StaffManagement  = React.lazy(() => import("./pages/StaffManagement"));
const Components       = React.lazy(() => import("./pages/Components"));
const Login            = React.lazy(() => import("./pages/auth/Login"));
const Register         = React.lazy(() => import("./pages/auth/Register"));
const Forgot           = React.lazy(() => import("./pages/auth/Forgot"));
const Home             = React.lazy(() => import("./pages/member/Home"));
const HomeGuest        = React.lazy(() => import("./pages/guest/HomeGuest"));
const LoginGuest       = React.lazy(() => import("./pages/guest/LoginGuest"));
const RegisterGuest    = React.lazy(() => import("./pages/guest/RegisterGuest"));
const KonsultasiDetail = React.lazy(() => import("./pages/guest/KonsultasiDetail"));
const RawatInapDetail  = React.lazy(() => import("./pages/guest/RawatInapDetail"));
const GroomingDetail   = React.lazy(() => import("./pages/guest/GroomingDetail"));
const VaksinasiDetail  = React.lazy(() => import("./pages/guest/VaksinasiDetail"));
const BookingPage      = React.lazy(() => import("./pages/guest/BookingPage"));
const About            = React.lazy(() => import("./pages/guest/About"));
const FeedbackMember   = React.lazy(() => import("./pages/member/FeedbackMember"));
const DataTransaksi    = React.lazy(() => import("./pages/DataTransaksi"));
const KelolaFeedback   = React.lazy(() => import("./pages/KelolaFeedback"));
const Setup            = React.lazy(() => import("./pages/Setup"));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        {/* Root → redirect ke halaman guest */}
        <Route path="/" element={<Navigate to="/guest" replace />} />

        {/* ── Setup Admin Pertama (akses sekali) ── */}
        <Route path="setup" element={<Setup />} />

        {/* ── Guest ── */}
        <Route path="guest"          element={<HomeGuest />} />
        <Route path="loginGuest"     element={<LoginGuest />} />
        <Route path="registrasiGuest" element={<RegisterGuest />} />
        <Route path="konsul"         element={<KonsultasiDetail />} />
        <Route path="ranap"          element={<RawatInapDetail />} />
        <Route path="grooming"       element={<GroomingDetail />} />
        <Route path="vaksin"         element={<VaksinasiDetail />} />
        <Route path="booking"        element={<BookingPage />} />
        <Route path="About"          element={<About />} />

        {/* ── Admin (guard ada di MainLayout) ── */}
        <Route path="admin" element={<MainLayout />}>
          <Route index                   element={<Dashboard />} />
          <Route path="appointments"     element={<Appointments />} />
          <Route path="pelanggan"        element={<Pelanggan />} />
          <Route path="layanan"          element={<Layanan />} />
          <Route path="membership"       element={<Membership />} />
          <Route path="inventory"        element={<InventoryManagement />} />
          <Route path="staff"            element={<StaffManagement />} />
          <Route path="user"             element={<UsersList />} />
          <Route path="transaksi"        element={<DataTransaksi />} />
          <Route path="feedback"         element={<KelolaFeedback />} />
          <Route path="components"       element={<Components />} />
        </Route>

        {/* ── Member ── */}
        <Route path="member"   element={<Home />} />
        <Route path="feedback" element={<FeedbackMember />} />

        {/* ── Auth Layout (admin login) ── */}
        <Route element={<AuthLayout />}>
          <Route path="login"    element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot"   element={<Forgot />} />
        </Route>

        {/* ── 404 Not Found ── */}
        <Route path="*" element={<Navigate to="/guest" replace />} />

      </Routes>
    </Suspense>
  );
}
