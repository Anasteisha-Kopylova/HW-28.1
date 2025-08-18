import React from "react";

export default function TodoText({ task }) {
  return (
    <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {task.text}
    </span>
  );
}
