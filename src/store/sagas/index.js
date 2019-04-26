import { all } from 'redux-saga/effects';

import rootUserSaga from './users';
import rootTasksSaga from './tasks';
import rootProfileSaga from './profile';

export default function* rootSaga() {
  yield all([
    rootUserSaga(),
    rootTasksSaga(),
    rootProfileSaga(),
  ]);
}
