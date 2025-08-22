import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import TodoForm from "../components/TodoForm";

const mockStore = configureStore([]);

describe("TodoForm", () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  test("allows typing letters and numbers into the input", async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <TodoForm />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText(/Add new task/i);
    const testValue = "My new task 123";

    await user.type(inputElement, testValue);

    expect(inputElement.value).toBe(testValue);
  });

  test("shows an error when trying to add an empty task", async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <TodoForm />
      </Provider>
    );

    const addButton = screen.getByRole("button", { name: /add/i });
    await user.click(addButton);

    const errorMessage = await screen.findByText(/Обов’язкове поле/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
