import { useFormik } from "formik";
import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { searchAsync } from "../redux/actions/actionProducts";
import "../styles/StyleNavBar.css";

export const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: Yup.object({
      search: Yup.string().required(),
    }),
    onSubmit: ({ search }) => {
      dispatch(searchAsync(search));
    },
  });
  return (
    <div>
      <Form className="d-flex form-search" onSubmit={formik.handleSubmit}>
        <FormControl
          placeholder="Buscar producto"
          name="search"
          onChange={formik.handleChange}
        />
        <Button
          type="submit"
          onClick={() => {
            navigate("/categoria/todo");
          }}
          className="btn-search"
        >
          <img
            src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646537066/amazonasApp/icons8-b%C3%BAsqueda-30_y2louo.png"
            alt="btn-img"
          />
        </Button>
      </Form>
    </div>
  );
};
