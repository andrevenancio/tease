export const SCENE_CHANGE = 'SCENE_CHANGE';
export const SCENE_LOADING = 'SCENE_LOADING';
export const SCENE_LOADED = 'SCENE_LOADED';

export const actionScenesChange = (scene = 'default') => ({
    type: SCENE_CHANGE,
    scene,
});
