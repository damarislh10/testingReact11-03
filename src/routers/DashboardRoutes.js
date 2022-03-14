import { Routes, Route, Navigate } from "react-router-dom";
import { Carrito } from "../components/Carrito";
import { SubNavbar } from "../components/SubNavbar";
export const DashboardRoutes = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/*" element={<SubNavbar/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};
