import {
    put,
    takeLatest,
} from 'redux-saga/effects';

import {
    APP_INIT,
    APP_READY,
} from './actions';

export const preloadFiles = (files) => {
    return new Promise((resolve) => {
        if (typeof Worker !== 'undefined') {
            const worker = new Worker('/workers/loader.js');
            worker.addEventListener('message', (e) => {
                const { data } = e;
                if (data.cmd === 'LOAD_COMPLETE') {
                    resolve();
                }
                worker.terminate();
            });

            worker.postMessage({ cmd: 'LOAD', files });
        }
    });
};

function* sagaAppInit() {
    // 1)  load config
    const response = yield fetch('/data/config.json');
    const json = yield response.json();

    // 2) load common assets here?
    yield preloadFiles(json.preload);

    // 3) everything is loaded
    yield put({ type: APP_READY, config: json });
}

export function* watchAppRequests() {
    yield takeLatest(APP_INIT, sagaAppInit);
}
