import {
    put,
    takeLatest,
} from 'redux-saga/effects';

import {
    SCENE_CHANGE,
    SCENE_LOADING,
    SCENE_LOADED,
} from './actions';

function* sagaScenesChange(action) {
    yield put({ type: SCENE_LOADING });

    const response = yield fetch(action.scene);
    const json = yield response.json();

    yield put({ type: SCENE_LOADED, scene: json });
}

export function* watchScenesRequests() {
    yield takeLatest(SCENE_CHANGE, sagaScenesChange);
}
