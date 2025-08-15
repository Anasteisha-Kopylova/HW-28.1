import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateTodo } from "../validators/todoForm"; 

export default function TodoForm({ onAddTask }) {
  return (
    <Formik
      initialValues={{ text: "" }}
      validate={validateTodo} 
      onSubmit={(values, { resetForm }) => {
        onAddTask(values.text);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form
          className="d-flex mb-3"
          style={{ maxWidth: "600px", marginBottom: "1rem" }}
        >
          <div
            style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
          >
            <Field
              name="text"
              className="form-control"
              placeholder="Введіть завдання"
              autoComplete="off"
            />
            <ErrorMessage
              name="text"
              component="div"
              className="text-danger mt-1"
              style={{ fontSize: "0.875rem" }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary ms-2"
            disabled={isSubmitting}
            style={{ whiteSpace: "nowrap" }}
          >
            Додати
          </button>
        </Form>
      )}
    </Formik>
  );
}
