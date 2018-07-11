import { fromJS, Map } from 'immutable';
import {
    SCENE_LOADING,
    SCENE_LOADED,
} from './actions';

const initialState = fromJS({
    loading: false,
    old: null,
    cur: new Map({}),
});

export const scenes = (state = initialState, action) => {
    switch (action.type) {
    case SCENE_LOADING:
        return state.withMutations((ctx) => {
            ctx.set('loading', true);
        });
    case SCENE_LOADED:
        return state.withMutations((ctx) => {
            // saves old scene and cur scene
            const cur = ctx.get('cur');
            if (cur) {
                ctx.set('old', cur);
            }
            ctx.set('cur', action.scene);

            // triggers loading
            ctx.set('loading', false);
        });
    default:
        return state;
    }
};
