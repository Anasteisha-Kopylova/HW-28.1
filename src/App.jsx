import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { addTask } from "./store/todoSlice";

export default function App() {
  const tasks = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (text) => {
    dispatch(addTask(text));
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "600px" }}>
      <h1 className="mb-4">Todo List with Redux + Formik</h1>

      <TodoForm onAddTask={handleAddTask} />

      <TodoList tasks={tasks} />

      <footer className="mt-3">
        <p>Загальна кількість задач: {tasks.length}</p>
      </footer>
    </div>
  );
}
