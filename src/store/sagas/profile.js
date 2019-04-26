import {
  put,
  takeEvery,
  all,
  select,
} from 'redux-saga/effects';

import types from '../types';

function* updateProfileWorker() {

  const { profile } = yield select();

  yield put({
      type: types.updateUser,
      payload: profile,
    })
}

function* watchUpdateProfile() {
  yield takeEvery(types.updateProfile, updateProfileWorker);
}

export default function* rootProfileSaga() {
  yield all([
    watchUpdateProfile(),
  ]);
}
