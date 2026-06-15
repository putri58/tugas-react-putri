import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

/* Layout */
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";

/* Loading */
import Loading from "./components/Loading";
// import { Home } from "lucide-react";

/* Lazy Pages */
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

const Appointments = React.lazy(() => import("./pages/appointments"));

const Pelanggan = React.lazy(() => import("./pages/Pelanggan"));

const Layanan = React.lazy(() => import("./pages/Layanan"));

const Membership = React.lazy(() => import("./pages/Membership"));

const InventoryManagement = React.lazy(
  () => import("./pages/InventoryManagement"),
);

const StaffManagement = React.lazy(() => import("./pages/StaffManagement"));

const Components = React.lazy(() => import("./pages/Components"));

const Login = React.lazy(() => import("./pages/auth/Login"));

const Register = React.lazy(() => import("./pages/auth/Register"));

const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

const Home = React.lazy(() => import("./pages/member/Home"));

const HomeGuest = React.lazy(() => import("./pages/guest/HomeGuest"));

const LoginGuest = React.lazy(() => import("./pages/guest/LoginGuest"));

const RegisterGuest = React.lazy(() => import("./pages/guest/RegisterGuest"));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
<Routes>

  {/* Guest */}
  <Route path="guest" element={<HomeGuest />} />
  <Route path="loginGuest" element={<LoginGuest />} />
  <Route path="registrasiGuest" element={<RegisterGuest />} />


  {/* Main Layout */}
  <Route path="admin" element={<MainLayout />}>
  <Route index element={<Dashboard />} />

  <Route path="appointments" element={<Appointments />} />
  <Route path="pelanggan" element={<Pelanggan />} />
  <Route path="layanan" element={<Layanan />} />
  <Route path="membership" element={<Membership />} />
  <Route path="inventory" element={<InventoryManagement />} />
  <Route path="staff" element={<StaffManagement />} />
  <Route path="components" element={<Components />} />
</Route>

  {/* Member */}
  <Route path="member" element={<Home />} />

  {/* Auth Layout */}
  <Route element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
    <Route path="forgot" element={<Forgot />} />
  </Route>

</Routes>
    </Suspense>
  );
}
