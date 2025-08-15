import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ tasks }) {
  if (!tasks || tasks.length === 0) {
    return null; 
  }

  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} />
      ))}
    </ul>
  );
}
