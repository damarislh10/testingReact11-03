import React from "react";
import { Container } from "react-bootstrap";
import { UserPerfil } from "../hooks/UserPerfil";
import { useDispatch } from "react-redux";
import { logoutAsync } from "../redux/actions/actionLogin";
import { useNavigate } from "react-router-dom";
import '../styles/stylePerfil.css'

export const PerfilUser = () => {
  const user = UserPerfil();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAsync());
    navigate("/login");
  };
  return (
    <div>
      <Container className="w-50 mt-5 container-login container-perfil shadow rounded text-center">
        <div className="contain-logout">
        <h3>Mi cuenta</h3>
        <button className="btnLogout" onClick={() => handleLogout()}><img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646792196/amazonasApp/external-logout-social-media-basic-1-sbts2018-outline-sbts2018_qvxhch.png" alt="btnLogout"/></button>
        </div>
        <img className="imgUser" src={user.foto} alt="fotoPerfil" />
        <h3>Nombre de usuario</h3>
        <h2>{user.nombre}</h2>
        <h4>{user.correo}</h4>
      </Container>
    </div>
  );
};
