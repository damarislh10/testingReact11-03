import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserPerfil from "../hooks/UserPerfil";
import "../styles/StyleNavBar.css";
import { Search } from "./Search";
import { SubNavbar } from "./SubNavbar";
const NavBar = () => {
  const [ubicacion, setUbicacion] = useState("");
  const user = UserPerfil();

  let url = "";
  const getCoordenadas = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      url =
        "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        latitude +
        "," +
        longitude +
        "&key=AIzaSyDvS3_rBwM7RJYjDOnPzquTpJVlskDs7nI";
      getUbicacion(url);
    });
  };

  const getUbicacion = async (endpoint) => {
    const resp = await fetch(endpoint);
    const { results } = await resp.json();
    console.log(results);
    setUbicacion(results[0].formatted_address);
  };

  return (
    <div>
      <Navbar className="navBg navbar-dark" bg="dark">
        <Container fluid className="container-nav">
          <Navbar.Brand as={Link} to="/">
            <img
              style={{ width: "150px" }}
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646535524/amazonasApp/icono_amazonas_jezf6j_ourpk5.png"
              alt="imgamzonas"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="ms-1" id="navbarScroll">
            <Nav
              className="me-0 my-2 my-lg-0 nav-contain"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Navbar.Brand className="fs-7" onClick={getCoordenadas}>
                <img
                  src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646535701/amazonasApp/worldwide-location--v1_fak89g.png"
                  alt="direction"
                />
                <label className="labelDireccion direccion">
                  {ubicacion !== "" ? ubicacion : "Elige tu dirección"}
                </label>
              </Navbar.Brand>

              <div className="contain-search">
                <NavDropdown
                  className="text-drop d-flex "
                  title="Todos"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action3">Todos</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Computo y tabletas
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Televisiòn y Video
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Audio y Equipos de Sonido
                  </NavDropdown.Item>
                </NavDropdown>
                <Search />
              </div>
              <Navbar.Brand className="ms-3" as={Link} to="/login">
                Hola,
                {user.nombre !== undefined
                  ? user.nombre
                  : (user.nombre = " Identificate")}
              </Navbar.Brand>
              <Navbar.Brand className="ms-2" href="#">
                Devoluciones y pedidos
              </Navbar.Brand>
            </Nav>
            <div className="ms-3">
              <Navbar.Brand as={Link} to="/carrito">
                <img
                  src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646535797/amazonasApp/shopping-cart_muujty.png"
                  alt="car"
                />
                <span></span>
                <div>Carrito</div>
              </Navbar.Brand>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SubNavbar />
    </div>
  );
};

export default NavBar;
