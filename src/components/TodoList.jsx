import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({
  tasks,
  onToggleComplete,
  onDelete,
  onEdit,
  editIndex,
  setEditIndex,
}) {
  if (tasks.length === 0) {
    return <p>Список завдань пустий</p>;
  }

  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          index={index}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onEdit={onEdit}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
        />
      ))}
    </ul>
  );
}
