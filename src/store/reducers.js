import { combineReducers } from 'redux';

import { app } from './app/reducers';
import { scenes } from './scenes/reducers';

export default combineReducers({
    app,
    scenes,
});
