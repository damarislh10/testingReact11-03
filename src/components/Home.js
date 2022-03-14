import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/styleHome.css";

export const Home = () => {

  return (
    <div className="container-home">
      <Container className="container-categ">
        <Row className="rowHome rowHome1">
          <Col className="colHome px-5 py-3">
            <Link to="/categoria/todo">
              <h3>Todo</h3>

              <img
                className="imgHome"
                src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646662221/amazonasApp/Sin_t_C3_ADtulo_3_jxxjbv_ux8ncb.png"
                alt="imgAll"
              />
            </Link>
          </Col>
          <Col className="colHome px-5 py-3">
            <h3>Lo mas vendido</h3>

            <img
              className="imgHome"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646662712/amazonasApp/x1-lenovo_kslzrq_e67xgu.png"
              alt="imgVent"
            />
          </Col>
          <Col className="colHome px-5 py-3">
            <h3>Lo màs Regalado</h3>

            <img
              className="imgHome"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646662854/amazonasApp/portatil-caja-regalo-blanco-ilustracion-3d-aislada_356060-96_yxewb4_n4hdx2.jpg"
              alt="imgRega"
            />
          </Col>
        </Row>
        <Row className="rowHome">
          <Col className="colHome px-5 py-3">
            <h3>Computo y tabletas</h3>

            <img
              className="imgHome"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646663850/amazonasApp/Janus-Gamer-Intel-Corei5-Teclado-Gamer_icxhfl_ltvbns.png"
              alt="imgCompu"
            />
          </Col>
          <Col className="colHome px-5 py-3">
            <h3>Televisiòn y video</h3>

            <img
              className="imgHome"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646663971/amazonasApp/464-4642640_tv-png-clipart-background-hoodoos-above-the-bow_o35qxx_o8t8j8.png"
              alt="imgTele"
            />
          </Col>
          <Col className="colHome px-5 py-3">
            <h3>Audio y equipos de sonido</h3>

            <img
              className="imgHome"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646664041/amazonasApp/SC-AKX400PS-Product_ImageGlobal-1_pe_es_wfpp9q_sh1wwl.png"
              alt="imgAudi"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
