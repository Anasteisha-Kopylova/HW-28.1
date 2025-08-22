import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoText from "../components/TodoText";

describe("TodoText", () => {
  test("renders with a line-through when task is completed", () => {
    const mockTask = { id: "1", text: "This task is done", completed: true };

    render(<TodoText task={mockTask} />);

    const textElement = screen.getByText(mockTask.text);
    expect(textElement).toHaveStyle("text-decoration: line-through");
  });

  test("renders without a line-through when task is not completed", () => {
    const mockTask = { id: "2", text: "This task is active", completed: false };

    render(<TodoText task={mockTask} />);

    const textElement = screen.getByText(mockTask.text);
    expect(textElement).not.toHaveStyle("text-decoration: line-through");
  });
});
