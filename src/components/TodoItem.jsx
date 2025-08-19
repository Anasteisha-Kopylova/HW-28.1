import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteStart, toggleStart, editStart } from "../redux/todoSlice";

export default function TodoItem({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const handleToggle = () => {
    dispatch(toggleStart({ id: task.id, completed: !task.completed }));
  };

  const handleDelete = () => {
    dispatch(deleteStart(task.id));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editStart({ id: task.id, text }));
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      {/* Чекбокс для completed */}
      <input
        type="checkbox"
        className="form-check-input me-2"
        checked={task.completed}
        onChange={handleToggle}
      />

      {isEditing ? (
        <form className="flex-grow-1 me-2" onSubmit={handleEdit}>
          <input
            type="text"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
            autoFocus
          />
        </form>
      ) : (
        <span
          className={`flex-grow-1 ${
            task.completed ? "text-decoration-line-through" : ""
          }`}
          onDoubleClick={() => setIsEditing(true)}
        >
          {task.text}
        </span>
      )}

      <div>
        <button className="btn btn-sm btn-danger ms-2" onClick={handleDelete}>
          Delete
        </button>
        {!isEditing && (
          <button
            className="btn btn-sm btn-secondary ms-2"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
      </div>
    </li>
  );
}
