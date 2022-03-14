import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import Login from "../components/Login";
import NavBar from "../components/NavBar";
import { Registro } from "../components/Registro";
import { Producto } from "../components/Producto";
import Footer from "../components/Footer";
import { Detalle } from "../components/Detalle";
import { PerfilUser } from "../components/PerfilUser";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, []);

  if (checking) {
    return <h1>Espere...</h1>;
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <PublicRouter isAuthenticated={isLoggedIn}>
              <Login />
            </PublicRouter>
          }
        />
        <Route
          path="/registro"
          element={
            <PublicRouter isAuthenticated={isLoggedIn}>
              <Registro />
            </PublicRouter>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRouter isAuthenticated={isLoggedIn}>
              <DashboardRoutes />
            </PrivateRouter>
          }
        />
        <Route path="/categoria/:category" element={<Producto />} />
        <Route path="/product/:id" element={<Detalle />} />
        <Route path="/perfil" element={<PerfilUser />} />
      </Routes>
      <Footer />
    </Router>
  );
};
