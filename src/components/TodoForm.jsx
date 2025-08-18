import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addStart } from "../store/todoSlice";
import { validateTodo } from "../validators/todoForm"; 

export default function TodoForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ text: "" }}
      validate={validateTodo} 
      onSubmit={(values, { resetForm }) => {
        dispatch(addStart({ text: values.text, completed: false }));
        resetForm();
      }}
    >
      {() => (
        <Form>
          <div className="input-group mb-3">
            <Field
              name="text"
              type="text"
              className="form-control"
              placeholder="Add new task"
              id="taskInput"
            />
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
          <ErrorMessage name="text" component="div" className="text-danger" />
        </Form>
      )}
    </Formik>
  );
}
