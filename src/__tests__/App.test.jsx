import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import userEvent from "@testing-library/user-event";
import App from "../App";
import "@testing-library/jest-dom";

const mockStore = configureStore([]);

describe("App", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      todos: {
        tasks: [],
        loading: false,
        error: null,
      },
    });
  });

  test("renders correct heading", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const headingElement = screen.getByText(
      /Todo List with Redux-Saga \+ Formik/i
    );
    expect(headingElement).toBeInTheDocument();
  });

  test("adds a new task and displays it in the list", async () => {
    const user = userEvent.setup();
    const { rerender } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText(/Add new task/i);
    const addButton = screen.getByRole("button", { name: /add/i });
    const newTaskText = "My new test task";

    await user.type(inputElement, newTaskText);
    await user.click(addButton);

    const newState = {
      todos: {
        tasks: [{ id: "1", text: newTaskText, completed: false }],
        loading: false,
        error: null,
      },
    };
    const newStore = mockStore(newState);

    rerender(
      <Provider store={newStore}>
        <App />
      </Provider>
    );

    const newTaskElement = await screen.findByText(newTaskText);
    expect(newTaskElement).toBeInTheDocument();
  });
});
