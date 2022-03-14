import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "../hooks/useForm";
import { editAsync } from "../redux/actions/actionProducts";

const Editar = ({ modal }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const navigate = useNavigate();

  const [values, handleInputChange, reset] = useForm({
    nombre: modal.nombre,
    marca: modal.marca,
    color: modal.color,
    tipo: modal.tipo,
    categoria1: modal.categoria[0],
    categoria2: modal.categoria[1],
    calificacion: modal.calificacion,
    precio: modal.precio,
    ventas: modal.ventas,
    regalados: modal.regalados,
    acercaProduct1: modal.acerca_de_este_articulo[0],
    acercaProduct2: modal.acerca_de_este_articulo[1],
    acercaProduct3: modal.acerca_de_este_articulo[2],
    imagen1: modal.imagenes[0],
    imagen2: modal.imagenes[1],
    imagen3: modal.imagenes[2],
    imagen4: modal.imagenes[3],
  });
  const {
    nombre,
    marca,
    color,
    tipo,
    categoria1,
    categoria2,
    calificacion,
    precio,
    ventas,
    regalados,
    acercaProduct1,
    acercaProduct2,
    acercaProduct3,
    imagen1,
    imagen2,
    imagen3,
    imagen4,
  } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editAsync(modal.id, values));
    reset();
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar este Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={nombre}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Marca </Form.Label>
              <Form.Control
                type="text"
                name="marca"
                value={marca}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Color </Form.Label>
              <Form.Control
                type="text"
                name="color"
                value={color}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tipo </Form.Label>
              <Form.Control
                type="text"
                name="tipo"
                value={tipo}
                onChange={handleInputChange}
              />
            </Form.Group>
            <select name="categorias">
              <option
                name="categoria1"
                value={categoria1}
                onChange={handleInputChange}
              >
                {categoria1}
              </option>
              <option
                name="categoria2"
                value={categoria2}
                onChange={handleInputChange}
              >
                {categoria2}
              </option>
            </select>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Calificaciòn </Form.Label>
              <Form.Control
                type="text"
                name="calificacion"
                value={calificacion}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Precio </Form.Label>
              <Form.Control
                type="text"
                name="precio"
                value={precio}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Cantidad de ventas </Form.Label>
              <Form.Control
                type="text"
                name="ventas"
                value={ventas}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Cantidad de veces que este producto fue Regalado
              </Form.Label>
              <Form.Control
                type="text"
                name="regalados"
                value={regalados}
                onChange={handleInputChange}
              />
            </Form.Group>
            <h3>Acerca del producto</h3>
            <textarea
              className="w-100"
              type="text"
              name="acercaProduct1"
              value={acercaProduct1}
              onChange={handleInputChange}
            />
            <textarea
              className="w-100"
              type="text"
              name="acercaProduct2"
              value={acercaProduct2}
              onChange={handleInputChange}
            />
            <textarea
              className="w-100"
              type="text"
              name="acercaProduct3"
              value={acercaProduct3}
              onChange={handleInputChange}
            />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="image" src={imagen1} name="imagen1" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="image" src={imagen2} name="imagen2" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="image" src={imagen3} name="imagen3" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="image" src={imagen4} name="imagen4" />
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              onClick={() => {
                handleClose();
                Swal.fire({
                  icon: "success",
                  title: "Actualizado con exito",
                  showConfirmButton: true,
                  timer: 1500,
                });
                navigate("/categoria/todo");
              }}
              type="submit"
              variant="primary"
            >
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Editar;
