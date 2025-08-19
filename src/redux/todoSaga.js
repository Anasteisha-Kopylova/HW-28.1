import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as todoActions from "./todoSlice";
import { URL_TODO } from "../constants/constants";

function* fetchTodosSaga() {
	try {
		const { data } = yield call(axios.get, URL_TODO);
		yield put(todoActions.fetchSuccess(data));
	} catch (e) {
		yield put(todoActions.fetchFailure(e.message));
	}
}

function* addTodoSaga(action) {
	try {
		const { text, completed } = action.payload;
		const { data } = yield call(axios.post, URL_TODO, { text, completed });
		yield put(todoActions.addSuccess(data));
	} catch (e) {
		yield put(todoActions.addFailure(e.message));
	}
}

function* deleteTodoSaga(action) {
	try {
		yield call(axios.delete, `${URL_TODO}/${action.payload}`);
		yield put(todoActions.deleteSuccess(action.payload));
	} catch (e) {
		yield put(todoActions.deleteFailure(e.message));
	}
}

function* toggleTodoSaga(action) {
	try {
		const { id, completed } = action.payload;
		const { data } = yield call(axios.put, `${URL_TODO}/${id}`, { completed });
		yield put(todoActions.toggleSuccess(data));
	} catch (e) {
		yield put(todoActions.toggleFailure(e.message));
	}
}

function* editTodoSaga(action) {
	try {
		const { id, text } = action.payload;
		const { data } = yield call(axios.put, `${URL_TODO}/${id}`, { text });
		yield put(todoActions.editSuccess(data));
	} catch (e) {
		yield put(todoActions.editFailure(e.message));
	}
}

export function* watchTodos() {
	yield takeEvery(todoActions.fetchStart.type, fetchTodosSaga);
	yield takeEvery(todoActions.addStart.type, addTodoSaga);
	yield takeEvery(todoActions.deleteStart.type, deleteTodoSaga);
	yield takeEvery(todoActions.toggleStart.type, toggleTodoSaga);
	yield takeEvery(todoActions.editStart.type, editTodoSaga);
}
