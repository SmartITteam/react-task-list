import types from '../types';
import services from '../../services';

import {
  put,
  takeEvery,
  all,
} from 'redux-saga/effects';

function* getAllUsersWorker() {

  const data = yield services.getAllUsers();

  (!data.status || data.status !== "error")
    ? yield put({
      type: types.setAllUsers,
      payload: data.data,
    })
    : yield put({
      type: types.setAllUsers,
      payload: { count: null, status: 'error' },
    });
}

function* watchGetAllUsers() {
  yield takeEvery(types.getAllUsers, getAllUsersWorker);
}

export default function* rootTasksSaga() {
  yield all([
    watchGetAllUsers(),
  ]);
}
