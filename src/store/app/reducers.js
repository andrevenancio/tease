import { fromJS } from 'immutable';
import {
    APP_INIT,
    APP_READY,
} from './actions';

const initialState = fromJS({
    ready: false,
    config: {},
});

export const app = (state = initialState, action) => {
    switch (action.type) {
    case APP_INIT:
        return state;
    case APP_READY:
        return state.withMutations((ctx) => {
            ctx.set('config', action.config);
            ctx.set('ready', true);
        });
    default:
        return state;
    }
};
