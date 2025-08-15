import React from "react";

export default function TodoItem({ task }) {
  return <li className="list-group-item">{task.text}</li>;
}
