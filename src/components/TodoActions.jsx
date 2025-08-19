import React from "react";
import { useDispatch } from "react-redux";
import { deleteStart, toggleStart } from "../redux/todoSlice";

export default function TodoActions({ task }) {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="btn btn-sm btn-success me-2"
        onClick={() =>
          dispatch(toggleStart({ id: task.id, completed: !task.completed }))
        }
      >
        ✓
      </button>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => dispatch(deleteStart(task.id))}
      >
        ✗
      </button>
    </div>
  );
}
