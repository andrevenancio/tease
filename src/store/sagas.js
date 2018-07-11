import { fork, all } from 'redux-saga/effects';

import { watchAppRequests } from './app/sagas';
import { watchScenesRequests } from './scenes/sagas';

export default function* () {
    yield all([
        fork(watchAppRequests),
        fork(watchScenesRequests),
    ]);
}
