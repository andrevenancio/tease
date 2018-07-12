import {
    put,
    takeLatest,
} from 'redux-saga/effects';

import {
    APP_INIT,
    APP_READY,
} from './actions';

function* sagaAppInit() {
    // 1)  load config
    const response = yield fetch('/data/config.json');
    const json = yield response.json();

    // 2) load common assets here?

    // 3) everything is loaded
    yield put({ type: APP_READY, config: json });
}

export function* watchAppRequests() {
    yield takeLatest(APP_INIT, sagaAppInit);
}
