import { useState } from "react";
import { AgregarProduct } from "./AgregarProduct";
import "../styles/styleSubNavBar.css";
import { Link } from "react-router-dom";

export const SubNavbar = () => {
  const [modal, setModal] = useState(false);

  const agregar = () => {
    setModal(true);
  };

  return (
    <div>
      <div className="containersubmenu">
        <Link to="/categoria/todo">
          <button className="btnSubmenu">Todo</button>
        </Link>
        <button className="btnSubmenu" onClick={agregar}>
          Agregar nuevo producto
        </button>
      </div>
      {modal === true ? <AgregarProduct /> : ""}
    </div>
  );
};
