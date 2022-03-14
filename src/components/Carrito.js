import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { BorrarCarrito } from "../redux/actions/actionCarrito";
import "../styles/styleCarrito.css";

export const Carrito = () => {
  const { carrito } = useSelector((state) => state.carrito);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(BorrarCarrito(id));
  };

  return (
    <div className="pt-5" style={{ backgroundColor: "#EAEDED" }}>
      <Container className="container-carrito">
        <h1 className="mb-5">Carrito</h1>
        {carrito.map((product) => (
          <Card key={product.id} style={{ width: "63rem" }}>
            <Card.Body>
              <Row>
                <Col className="container-img-car" xs={3}>
                  <Card.Img
                    className="img-car ms-3"
                    src={product.imagenes[0]}
                  />
                </Col>
                <Col xs={6}>
                  <div className="d-flex">
                    <Card.Title>{product.nombre}</Card.Title>
                  </div>
                  <Card.Text>
                    <label className="enabled">Disponible</label>
                    <br />
                    <label>Envio Gratis a Colombia</label>
                    <br />
                    <label>
                      <span className="fw-bold">Color: </span>
                      <span>{product.color}</span>
                    </label>
                    <br />
                    <label>
                      <span className="fw-bold">Tipo: </span>
                      <span>{product.tipo}</span>
                    </label>
                  </Card.Text>
                  <input
                    className="cantidad"
                    type="number"
                    placeholder="Cantidad"
                  />
                  <Button
                    className="btn btndelete"
                    onClick={() => handleDelete(product.id)}
                  >
                    Eliminar
                  </Button>
                </Col>
                <Col xs={3}>
                  <h5>COP $ {product.precio}</h5>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
};
