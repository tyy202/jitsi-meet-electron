/**
 * The type of (redux) action that sets Window always on top.
 *
 * @type {
 *     type: SET_ALWAYS_ON_TOP_WINDOW_ENABLED,
 *     alwaysOnTopWindowEnabled: boolean
 * }
 */
export const SET_ALWAYS_ON_TOP_WINDOW_ENABLED
    = Symbol('SET_ALWAYS_ON_TOP_WINDOW_ENABLED');

/**
 * The type of (redux) action that sets Start with Audio Muted.
 *
 * @type {
 *     type: SET_AUDIO_MUTED,
 *     startWithAudioMuted: boolean
 * }
 */
export const SET_AUDIO_MUTED = Symbol('SET_AUDIO_MUTED');

/**
 * The type of (redux) action that sets disable AGC.
 *
 * @type {
 *     type: SET_DISABLE_AGC,
 *     disableAGC: boolean
 * }
 */
export const SET_DISABLE_AGC = Symbol('SET_DISABLE_AGC');

/**
 * The type of (redux) action that sets the email of the user.
 *
 * @type {
 *     type: SET_EMAIL,
 *     email: string
 * }
 */
export const SET_EMAIL = Symbol('SET_EMAIL');

/**
 * The type of (redux) action that sets the name of the user.
 *
 * @type {
 *     type: SET_NAME,
 *     name: string
 * }
 */
export const SET_NAME = Symbol('SET_NAME');

/**
 * The type of (redux) action that sets the Server URL.
 *
 * @type {
 *     type: SET_SERVER_URL,
 *     serverURL: string
 * }
 */
export const SET_SERVER_URL = Symbol('SET_SERVER_URL');

/**
 * The type of (redux) action that sets the AppID
 *
 * @type {
 *     type: SET_APP_ID,
 *     appId: string
 * }
 */
export const SET_APP_ID = Symbol('SET_APP_ID');

/**
 * The type of (redux) action that sets the appSecret
 *
 * @type {
 *     type: SET_APP_SECRET,
 *     appSecret: string
 * }
 */
export const SET_APP_SECRET = Symbol('SET_APP_SECRET');

/**
 * The type of (redux) action that sets the avatar
 *
 * @type {
 *     type: SET_AVATAR,
 *     avatar: string
 * }
 */
export const SET_AVATAR = Symbol('SET_AVATAR');

/**
 * host
 *
 * @type {
 *     type: SET_HOST,
 *     avatar: string
 * }
 */
export const SET_HOST = Symbol('SET_HOST');

/**
 * The type of (redux) action that sets the Server Timeout.
 *
 * @type {
 *     type: SET_SERVER_TIMEOUT,
 *     serverTimeout: number
 * }
 */
export const SET_SERVER_TIMEOUT = Symbol('SET_SERVER_TIMEOUT');

/**
 * The type of (redux) action that sets Start with Video Muted.
 *
 * @type {
 *     type: SET_VIDEO_MUTED,
 *     startWithVideoMuted: boolean
 * }
 */
export const SET_VIDEO_MUTED = Symbol('SET_VIDEO_MUTED');
