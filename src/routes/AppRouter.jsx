import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "../components/Layout/Layout";

// Futuras páginas
// import Login from "../pages/Login/Login";
// import Register from "../pages/Register/Register";

export default function AppRouter() {
  return (
    <Routes>
      {/* Chat */}
      <Route path="/" element={<Layout />} />

      {/* Futuras rotas */}
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/register" element={<Register />} /> */}

      {/* Qualquer rota inválida */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}