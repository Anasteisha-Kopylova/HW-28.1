import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function TodoItem({
  task,
  index,
  onToggleComplete,
  onDelete,
  onEdit,
  editIndex,
  setEditIndex,
}) {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        task.completed ? "list-group-item-success" : ""
      }`}
    >
      {editIndex === index ? (
        <Formik
          initialValues={{ text: task.text }}
          validate={(values) => {
            const errors = {};
            if (!values.text) {
              errors.text = "Обов’язкове поле";
            } else if (values.text.length < 5) {
              errors.text = "Має бути не менше 5 символів";
            }
            return errors;
          }}
          onSubmit={(values) => {
            onEdit(index, values.text);
            setEditIndex(null);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="d-flex flex-column flex-grow-1">
              <Field
                name="text"
                className="form-control mb-1"
                autoFocus
                autoComplete="off"
              />
              <ErrorMessage
                name="text"
                component="div"
                className="text-danger mb-2"
              />
              <div>
                <button
                  type="submit"
                  className="btn btn-success btn-sm me-2"
                  disabled={isSubmitting}
                >
                  Зберегти
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setEditIndex(null)}
                >
                  Скасувати
                </button>
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        <>
          <div className="d-flex align-items-center flex-grow-1">
            <input
              type="checkbox"
              className="form-check-input me-2"
              checked={task.completed}
              onChange={() => onToggleComplete(index)}
            />
            <span style={{ cursor: "pointer" }}>{task.text}</span>
          </div>
          <div>
            <button
              className="btn btn-primary btn-sm me-2"
              onClick={() => setEditIndex(index)}
            >
              Редагувати
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDelete(index)}
            >
              Видалити
            </button>
          </div>
        </>
      )}
    </li>
  );
}
