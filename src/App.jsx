import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

/* Layout */
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";

/* Loading */
import Loading from "./components/Loading";

/* Lazy Pages */
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

const Appointments = React.lazy(() =>
  import("./pages/appointments")
);

const Components = React.lazy(() =>
  import("./pages/Components")
);

const Login = React.lazy(() =>
  import("./pages/auth/Login")
);

const Register = React.lazy(() =>
  import("./pages/auth/Register")
);

const Forgot = React.lazy(() =>
  import("./pages/auth/Forgot")
);

export default function App() {
  return (
    <Suspense fallback={<Loading />}>

      <Routes>

        {/* Main Layout */}
        <Route element={<MainLayout />}>

          <Route path="/" element={<Dashboard />} />

          <Route
            path="/appointments"
            element={<Appointments />}
          />

          <Route
            path="/components"
            element={<Components />}
          />

        </Route>

        {/* Auth Layout */}
        <Route element={<AuthLayout />}>

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/forgot" element={<Forgot />} />

        </Route>

      </Routes>

    </Suspense>
  );
}