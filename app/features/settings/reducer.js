// @flow

import {
    SET_ALWAYS_ON_TOP_WINDOW_ENABLED,
    SET_AUDIO_MUTED,
    SET_DISABLE_AGC,
    SET_EMAIL,
    SET_NAME,
    SET_SERVER_URL,
    SET_APP_ID,
    SET_APP_SECRET,
    SET_AVATAR,
    SET_SERVER_TIMEOUT,
    SET_VIDEO_MUTED,
    SET_HOST
} from './actionTypes';

type State = {
    alwaysOnTopWindowEnabled: boolean,
    disableAGC: boolean,
    email: string,
    name: string,
    appId:string,
    appSecret:string,
    avatar:string,
    host:string,
    serverURL: ?string,
    serverTimeout: ?number,
    startWithAudioMuted: boolean,
    startWithVideoMuted: boolean
};

const username = window.jitsiNodeAPI.osUserInfo().username;

const DEFAULT_STATE = {
    alwaysOnTopWindowEnabled: true,
    disableAGC: false,
    email: '',
    appId:'',
    appSecret:'',
    avatar:'',
    host:'',
    name: username,
    serverURL: undefined,
    serverTimeout: undefined,
    startWithAudioMuted: false,
    startWithVideoMuted: false
};

/**
 * Reduces redux actions for features/settings.
 *
 * @param {State} state - Current reduced redux state.
 * @param {Object} action - Action which was dispatched.
 * @returns {State} - Updated reduced redux state.
 */
export default (state: State = DEFAULT_STATE, action: Object) => {
    switch (action.type) {
    case SET_ALWAYS_ON_TOP_WINDOW_ENABLED:
        return {
            ...state,
            alwaysOnTopWindowEnabled: action.alwaysOnTopWindowEnabled
        };

    case SET_AUDIO_MUTED:
        return {
            ...state,
            startWithAudioMuted: action.startWithAudioMuted
        };

    case SET_DISABLE_AGC:
        return {
            ...state,
            disableAGC: action.disableAGC
        };

    case SET_EMAIL:
        return {
            ...state,
            email: action.email
        };

    case SET_NAME:
        return {
            ...state,
            name: action.name
        };
    case SET_SERVER_URL:
        return {
            ...state,
            serverURL: action.serverURL
        };
    case SET_APP_ID:
        return {
            ...state,
            appid: action.appId
        };
    case SET_APP_SECRET:
        return {
            ...state,
            appSecret: action.appSecret
        };
    case SET_AVATAR:
        return {
            ...state,
            avatar: action.avatar
        };
        case SET_HOST:
            return {
                ...state,
                host: action.host
            };

    case SET_SERVER_TIMEOUT:
        return {
            ...state,
            serverTimeout: action.serverTimeout
        };

    case SET_VIDEO_MUTED:
        return {
            ...state,
            startWithVideoMuted: action.startWithVideoMuted
        };

    default:
        return state;
    }
};
