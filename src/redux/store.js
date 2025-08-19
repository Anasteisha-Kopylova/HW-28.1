import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import todosReducer from "./todoSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		todos: todosReducer,
	},
	middleware: (getDefaultMiddleware) => [
		...getDefaultMiddleware({ thunk: false }),
		sagaMiddleware,
	],
});

sagaMiddleware.run(rootSaga);
