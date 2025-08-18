import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { fetchStart, addStart, deleteStart, toggleStart, editStart } from "./store/todoSlice";

export default function App() {
  const { tasks, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStart());
  }, [dispatch]);

  const handleAddTask = (text) => {
    if (text.trim()) {
      dispatch(addStart({ text, completed: false }));
    }
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteStart(id));
  };

  const handleToggleTask = (id, completed) => {
    dispatch(toggleStart({ id, completed }));
  };

  const handleEditTask = (id, text) => {
    if (text.trim()) {
      dispatch(editStart({ id, text }));
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "600px" }}>
      <h1 className="mb-4">Todo List with Redux-Saga + Formik</h1>

      {error && <p className="text-danger">{error}</p>}

      <TodoForm onAddTask={handleAddTask} />

      {tasks.length > 0 && (
        <TodoList
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onToggleTask={(task) => handleToggleTask(task.id, !task.completed)}
          onEditTask={handleEditTask}
        />
      )}

      {tasks.length > 0 && (
        <footer className="mt-3">
          <p>Загальна кількість задач: {tasks.length}</p>
        </footer>
      )}
    </div>
  );
}
