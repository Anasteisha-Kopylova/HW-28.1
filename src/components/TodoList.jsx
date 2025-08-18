import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ tasks }) {
  if (!tasks || tasks.length === 0) return <p>No tasks yet</p>;

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
