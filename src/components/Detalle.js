import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ReactImageMagnify from "react-image-magnify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AddCarrito } from "../redux/actions/actionCarrito";
import Swal from "sweetalert2";
import {
  deleteProduct,
  listProductAsync,
} from "../redux/actions/actionProducts";
import "../styles/styleDetalle.css";
import Editar from "./Editar";
import { Producto } from "./Producto";

export const Detalle = () => {
  const { products } = useSelector((state) => state.products);

  const [modal, setModal] = useState(false);
  const [enviarDatosModal, setEnviarDatosModal] = useState([]);

  const navigate = useNavigate();
  const [detailProduct, setDetailProduct] = useState([]);
  const [images, setImages] = useState({
    imageMain: "",
    image1: "",
    image2: "",
    image3: "",
  });

  const [descripcion, setDescripcion] = useState({
    descr1: "",
    descr2: "",
    descr3: "",
    descr4: "",
  });

  const { id } = useParams();
  const dispatch = useDispatch();

  const editar = (id) => {
    const getProduct = products.find((p) => p.id === id);
    setModal(true);
    setEnviarDatosModal(getProduct);
  };

  useEffect(() => {
    dispatch(listProductAsync());
    const filterProduct = products.find((product) => product.id === id);

    if (filterProduct !== undefined) {
      setDetailProduct(filterProduct);
      setImages({
        imageMain: filterProduct.imagenes[0],
        image1: filterProduct.imagenes[1],
        image2: filterProduct.imagenes[2],
        image3: filterProduct.imagenes[3],
      });
      setDescripcion({
        descr1: filterProduct.acerca_de_este_articulo[0],
        descr2: filterProduct.acerca_de_este_articulo[1],
        descr3: filterProduct.acerca_de_este_articulo[2],
        descr4: filterProduct.acerca_de_este_articulo[3],
      });
    }
  }, []);

  return (
    <div>
      <Container className="container-detail my-5">
        <Row>
          <Col xs={1} className="col-img">
            <button className="mt-4">
              <img className="imgSecund" src={images.image1} alt="img1" />
            </button>
            <br />
            <button className="mt-4">
              <img className="imgSecund" src={images.image2} alt="img2" />
            </button>
            <br />
            <button className="mt-4">
              <img className="imgSecund" src={images.image3} alt="img3" />
            </button>
          </Col>
          <Col className="mt-5">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: images.imageMain,
                },
                largeImage: {
                  src: images.imageMain,
                  width: 1200,
                  height: 1800,
                },
              }}
            />
          </Col>
          <Col>
            <h2 className="fs-5 fw-bold">{detailProduct.nombre}</h2>
            <h4 className="stylBlue">
              <span>Marca: </span>
              {detailProduct.marca}
            </h4>
            <h4 className="calificacion">
              <span>
                <img
                  className="imgStar"
                  src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646778721/amazonasApp/icons8-estrella-48_s4emqg.png"
                  alt="imgStar"
                />
              </span>
              <span>
                <img
                  className="imgStar"
                  src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646778721/amazonasApp/icons8-estrella-48_s4emqg.png"
                  alt="imgStar"
                />
              </span>
              <span>
                <img
                  className="imgStar"
                  src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646778721/amazonasApp/icons8-estrella-48_s4emqg.png"
                  alt="imgStar"
                />
              </span>
              <span className="ms-3">{detailProduct.calificacion}</span>
            </h4>
            <p>
              <span>Precio:</span>{" "}
              <span className="precio">$ {detailProduct.precio}</span>
              <span className="fw-bold mx-3">Envio gratis.</span>
              <span className="stylBlue">Detalles</span>
            </p>

            <hr />
            <p>
              Hasta <span className="fw-bold">18 meses sin intereses</span> de
              $60.633.{" "}
              <span className="stylBlue">
                Ver mensuales Solicita tu tarjeta Amazon Recargable
              </span>{" "}
              y obtén $10.000 de descuento en tu primera compra mayor a $50.000
            </p>
            <span>Color:</span>
            <span className="fw-bold ms-2">{detailProduct.color}</span>
            <br />
            <span>Tipo:</span>
            <span className="fw-bold ms-2">{detailProduct.tipo}</span>
            <hr />
            <ul>
              <h3>Acerca de este articulo</h3>

              <li>- {descripcion.descr1}</li>
              <li>- {descripcion.descr2}</li>
              <li>- {descripcion.descr3}</li>
              <li>- {descripcion.descr4}</li>
            </ul>
          </Col>
          <Col xs lg="2">
            <div>
              <Button
                className="w-100"
                variant="warning"
                onClick={() => editar(detailProduct.id)}
              >
                Editar
              </Button>
              <Button
                onClick={() => {
                  dispatch(deleteProduct(detailProduct.id));
                  Swal.fire({
                    icon: "success",
                    title: "Eliminado con exito",
                    showConfirmButton: true,
                    timer: 1500,
                  });
                  navigate("/categoria/todo");
                }}
                className="w-100 mt-2"
                variant="danger"
              >
                Eliminar
              </Button>
            </div>
            <div className="container-car mt-3">
              <p className="car-price">$ {detailProduct.precio}</p>
              <p>
                Envio Gratis. <span className="stylBlue">Detalles</span>
              </p>
              <p>
                Llega: <span className="fw-bold">14/03/22 - 19/3/22</span>
              </p>
              <p>Lo recibiras entre estas fechas</p>
              <button
                onClick={() => {
                  dispatch(AddCarrito(detailProduct));
                  Swal.fire({
                    icon: "success",
                    title: "Agregado con exito",
                    showConfirmButton: true,
                    timer: 1500,
                  });
                }}
                className="btn-car w-100"
              >
                <div className="container-imgCar ms-1 me-2">
                  <img
                    src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646841839/amazonasApp/shopping-cart--v2_ezz0wb.png"
                    alt="carImg"
                  />
                </div>
                Agregar al carrito
              </button>
              <button className="btn-car w-100">
                <div className="container-imgCar ms-1 me-2">
                  <img
                    src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646841901/amazonasApp/circled-play_n9mvhu.png"
                    alt="comprarImg"
                  />
                </div>
                Comprar ahora
              </button>
              <p className="stylBlue text-center">Transaciòn segura</p>
            </div>
          </Col>
        </Row>
        {modal === true ? <Editar modal={enviarDatosModal} /> : ""}
      </Container>
      <h2 className="ms-5">Productos Relacionados</h2>
      <Producto/>
    </div>
  );
};
