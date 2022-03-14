import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { registerProductAsync } from "../redux/actions/actionProducts";
import { fileUpload } from "../helpers/FileUpload";

export const AgregarProduct = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      imagenes: [],
      acerca_de_este_articulo: [],
      nombre: "",
      marca: "",
      color: "",
      categoria: "",
      calificacion: "",
      precio: "",
      ventas: "",
      tipo: "",
      regalado: "",
    },
    onSubmit: (data) => {
      dispatch(registerProductAsync(data));
    },
  });

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChanged = (e) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then((response) => {
        let array = formik.initialValues.imagenes;
        array.push(response);
        formik.initialValues.imagenes = response;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo producto tecnologico</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form-group" onSubmit={formik.handleSubmit}>
            <input
              id="fileSelector"
              type="file"
              className="form-control "
              placeholder="url image"
              name="url"
              style={{ display: "none" }}
              onChange={handleFileChanged}
              required
            />

            <button
              className="btn btn-dark"
              onClick={handlePictureClick}
              type="button"
            >
              Subir imagen
            </button>

            <input
              type="text"
              className="form-control mt-2"
              name="nombre"
              autoComplete="off"
              placeholder="Nombre"
              onChange={formik.handleChange}
              required
            />

            <input
              type="text"
              className="form-control mt-2"
              name="marca"
              autoComplete="off"
              placeholder="Marca"
              onChange={formik.handleChange}
              required
            />

            <input
              className="form-control mt-2"
              autoComplete="off"
              name="color"
              placeholder="color"
              onChange={formik.handleChange}
              required
            />

            <select name="categoria">
              <option value={"Computo y tabletas"}>Computo y tabletas</option>
              <option value={"Television y video"}>Television y video</option>
              <option value={"Audio y sonido"}>Audio y sonido</option>
            </select>
            <input
              className="form-control mt-2"
              autoComplete="off"
              name="calificacion"
              placeholder="Calificacion"
              onChange={formik.handleChange}
              required
            />
            <input
              className="form-control mt-2"
              autoComplete="off"
              name="tipo"
              placeholder="Tipo"
              onChange={formik.handleChange}
              required
            />
            <input
              className="form-control mt-2"
              autoComplete="off"
              name="precio"
              placeholder="precio"
              onChange={formik.handleChange}
              required
            />
            <input
              className="form-control mt-2"
              autoComplete="off"
              name="ventas"
              placeholder="cantidad de ventas"
              onChange={formik.handleChange}
              required
            />
            <input
              className="form-control mt-2"
              autoComplete="off"
              name="regalado"
              placeholder="Regalado"
              onChange={formik.handleChange}
              required
            />
            <textarea
              className="form-control mt-2"
              autoComplete="off"
              name="acerca_de_este_articulo"
              placeholder="Acerca del producto"
              onChange={formik.handleChange}
              required
            />

            <div className="d-grid gap-2 mx-auto mt-2">
              <Button type="submit" className="btn btn-outline-dark">
                Agregar
              </Button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
