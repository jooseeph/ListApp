import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.css";

function ProductForm() {
  const initialValues = {
    title: "",
    content: "",
    authorName: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content is required"),
    authorName: Yup.string().required("Author Name is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("API response:", data);
      resetForm();
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="title">Title:</label>
            <Field type="text" id="title" name="title" className="inputField" />
            <ErrorMessage name="title" component="div" className="errorText" />
          </div>

          <div>
            <label htmlFor="content">Content:</label>
            <Field
              as="textarea"
              id="content"
              name="content"
              className="inputField"
            />
            <ErrorMessage
              name="content"
              component="div"
              className="errorText"
            />
          </div>

          <div>
            <label htmlFor="authorName">Author Name:</label>
            <Field
              type="text"
              id="authorName"
              name="authorName"
              className="inputField"
            />
            <ErrorMessage
              name="authorName"
              component="div"
              className="errorText"
            />
          </div>

          <button type="submit">Add Product</button>
        </Form>
      </Formik>
    </div>
  );
}

export default ProductForm;
