import {
  put,
  takeEvery,
  all,
} from 'redux-saga/effects';

import types from '../types';
import services from '../../services';

function* getAllTasksWorker() {

  const data = yield services.getAllTasks();

  (!data.status || data.status !== "error")
    ? yield put({
      type: types.setAllTasks,
      payload: data.data,
    })
    : yield put({
      type: types.setAllTasks,
      payload: null,
    });
}

function* watchGetAllTasks() {
  yield takeEvery(types.getAllTasks, getAllTasksWorker);
}

export default function* rootUserSaga() {
  yield all([
    watchGetAllTasks(),
  ]);
}
