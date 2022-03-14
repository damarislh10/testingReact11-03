import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listProductAsync } from "../redux/actions/actionProducts";
import "../styles/styleProduct.css";

export const Producto = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProductAsync());
  }, []);
  return (
    <div>
      <Container className="container-product">
        <div className="card-columns">
          {products.map((element, index) => (
            <Link
              className="link-card"
              key={index}
              to={`/product/${element.id}`}
            >
              <Card
                className="car-cont mt-3"
                style={{ width: "25rem", height: "27rem" }}
              >
                <Card.Img className="imgCard" src={element.imagenes[0]} />
                <Card.Body>
                  <Card.Title className="nombre">{element.nombre}</Card.Title>
                  <label>{element.calificacion}</label>

                  <div className="container-price">
                    <h3 className="preciotext">
                      <span>COP $</span>
                      {element.precio}
                    </h3>
                    <Card.Text className="entrega">Entrega gratis</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};
