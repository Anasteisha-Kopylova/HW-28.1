import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function TodoForm({ onAddTask }) {
  return (
    <Formik
      initialValues={{ text: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.text) errors.text = "Обов’язкове поле";
        else if (values.text.length < 5) errors.text = "Має бути не менше 5 символів";
        return errors;
      }}
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
          <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
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

          {/* Кнопка справа */}
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
