import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/styleFooter.css";

const Footer = () => {
  return (
    <div>
      <Container className="container-footer">
        <Row className="row-footer">
          <Col xs={3}>
            <ul>
              <h5 className="fs-6 fw-bold">Conocenos</h5>
              <li>Trabajar en Amazonas</li>
              <li>Información corporativa</li>
              <li>Departamento de prensa</li>
            </ul>
          </Col>
          <Col xs={4}>
            <ul>
              <h5 className="fs-6 fw-bold">Podemos ayudarte</h5>
              <li>Amazonas y COVID-19</li>
              <li>Devolver o reemplazar productos</li>
              <li>Gestionar contenido y dispositivos</li>
              <li>Ayuda</li>
            </ul>
          </Col>
          <Col xs={4}>
            <ul>
              <h5 className="fs-6 fw-bold">Metodos de pago</h5>
              <li>Tarjetas de credito y debito</li>
              <li>Tarjetas de regalo</li>
              <li>Meses sin intereses</li>
              <li>Amazonas Cash</li>
              <li>Amazonas Recargable</li>
            </ul>
          </Col>
        </Row>
        <div className="container-img">
        <img style={{width:'120px'}} src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646535524/amazonasApp/icono_amazonas_jezf6j_ourpk5.png" alt="img-logo" />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
