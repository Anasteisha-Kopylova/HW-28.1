import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const STORAGE_KEY = "my_todo_list";

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function addTask(text) {
    setTasks([...tasks, { text, completed: false }]);
  }

  function toggleComplete(index) {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }

  function deleteTask(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  function editTask(index, newText) {
    const newTasks = [...tasks];
    newTasks[index].text = newText;
    setTasks(newTasks);
  }

  return (
    <div className="container mt-4" style={{ maxWidth: "600px" }}>
      <h1 className="mb-4">Todo List with Formik</h1>
      <TodoForm onAddTask={addTask} />
      <TodoList
        tasks={tasks}
        onToggleComplete={toggleComplete}
        onDelete={deleteTask}
        onEdit={editTask}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
      />
    </div>
  );
}
