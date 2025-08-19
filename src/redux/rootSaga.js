import { all } from "redux-saga/effects";
import { watchTodos } from "./todoSaga";

export default function* rootSaga() {
	yield all([
		watchTodos()
	]);
}
