const URL_PROTOCOL_TYPE = {
    HTTP: 'http://',
    HTTPS: 'https://'
};

const API_IP = {
    DEVALORE: '194.90.199.243',
    POINTER: '207.232.46.92',
    MOCK: 'localhost:3030',
};

const URL_RESOURCE_NAME = {
    LOCAL: 'localhost:54970/',
    TEST: `${API_IP.POINTER}/fleet.core.api/`,
    DEV: `${API_IP.DEVALORE}/fleet.core.api/`,
    QA: '10.169.1.5/fleetcore.api/',
    QA2: '62.0.95.30/fleetcore.api/',
    PROD: `${API_IP.POINTER}/fleet.core.api/`,
    MOCK: `${API_IP.MOCK}/`,
};

const CURRENT_URL_PROTOCOL_TYPE = URL_PROTOCOL_TYPE.HTTP;
const CURRENT_URL_RESOURCE_NAME = URL_RESOURCE_NAME.QA2;
// const CURRENT_URL_RESOURCE_NAME = URL_RESOURCE_NAME.LOCAL;
// const CURRENT_URL_RESOURCE_NAME = URL_RESOURCE_NAME.QA2;
const MOCK_URL_RESOURCE_NAME = URL_RESOURCE_NAME.MOCK;

function getFullUrlPath(relativePath) {
    return CURRENT_URL_PROTOCOL_TYPE + CURRENT_URL_RESOURCE_NAME + relativePath;
}

const getMockFullUrlPath = (relativePath) => CURRENT_URL_PROTOCOL_TYPE + MOCK_URL_RESOURCE_NAME + relativePath; // eslint-disable-line no-unused-vars

const config = { // eslint-disable-line no-unused-vars
    LOGIN_ERROR_MESSAGE: 'txtLoginError',
    FLEET: { version: '4.6.5'},
    IDLE_TIMEOUT: 900000, // 900000 ms = 15 minutes
    URL: {
        BASE: '',
        SIGNIN: getFullUrlPath('token'),
        SIGNUP: getFullUrlPath('token/signup'),
        GET_DICTIONARY: getFullUrlPath('api/dictionary'),
        GET_LANGUAGES_LIST: getFullUrlPath('api/site/languages'),
        GET_LOGIN_DICTIONARY: getFullUrlPath('api/dictionary/login'),
        TEST: getFullUrlPath('token/test'),
        MESSAGES: {
            DIAGNOSTICS: getFullUrlPath('api/dtc'),
            REMINDERS: getFullUrlPath('api/reminder'),
            SNOOZE_REMINDER: getFullUrlPath('api/Reminder/snooze'),
            ACK_REMINDER: getFullUrlPath('api/reminder/ack'),
            ACK_DRIVER_DATE_REMINDER: getFullUrlPath('api/Reminder/ackDriverDate'),
            DASHBOARD: getFullUrlPath('api/notification/dashboard'),
            EVENTS: getFullUrlPath('api/notification'),
            EVENT_DRILL_DOWN: getFullUrlPath('api/notification/details'),
            EVENT_HISTORY_DATA: getFullUrlPath('api/notification/history'),
            EVENT_FEEDBACK_SAVE: getFullUrlPath('api/notification/feedback'),
            MESSAGE_READ_UPDATE: getFullUrlPath('api/notification/read'),
            CLEAR_EVENT: getFullUrlPath('api/notification/remove'),
        },
        FLEET: {
            VEHICLE_DATA: getFullUrlPath('api/fleetview/vehicles'),
            GROUPS_DATA: getFullUrlPath('api/account/vehicle/groups'),
            VEHICLE_DATA_UPDATES: getFullUrlPath('api/fleetview/vehicles?isUpdate=1&vehicles=1&alertCount=0'),
            ACCOUNT_LAYERS: getFullUrlPath('api/account/layer'),
            ACCOUNT_POLYGONS: getFullUrlPath('api/account/polygon'),
            ADMIN_LAYERS: getFullUrlPath('api/account/adminlayer'),
            ROUTESEARCH_SEARCH_QUERY: getFullUrlPath('api/fleetview/search'),
            RESOURCE_BUBBLE_DATA: getFullUrlPath('api/fleetview/vehicles'),
            FETCH_TRIPS: getFullUrlPath('api/route'),
            FETCH_TRIP_TXS: getFullUrlPath('api/route/trip'),
            SAVE_TRIP_AS_SAFE_ROUTE: getFullUrlPath('api/account/saferoute'),
            RESOURCE_IOS: getFullUrlPath('api/io'),
            POST_RESOURCE_IO_COMMAND: getFullUrlPath('api/io/sendCommand'),
            GET_RESOURCE_IO_COMMAND_STATUS: getFullUrlPath('api/io/getCommandStatus'),
            RESOURCES_ASSETS: getFullUrlPath('api/fleetview/assets'),
        },
        GENERAL: {
            ACCOUNT: getFullUrlPath('api/site/definition'),
            ACCOUNT_COLUMNS: getFullUrlPath('api/fleetview/columns'),
            EVENTS_CURTAIN: getFullUrlPath('api/Notification/curtain'),
            EVENTS_CURTAIN_BADGE: getFullUrlPath('api/fleetview/vehicles?isUpdate=0&vehicles=0&alertCount=1'),
            EVENTS_CURTAIN_CLEAR_ALL: getFullUrlPath('api/Notification/curtain/removeall'),
            EVENTS_CURTAIN_DELETE_A_EVENT: getFullUrlPath('api/Notification/curtain/remove'),
        }
    },    
    MAP: {
        KEY: 'client=gme-pointerlocalizacion',
        VERSION: 'v=3.32'
    },
    ROUTES: {
        SIGNIN: '/signin',
        SIGNOUT: '/signout',
        HOME: '/',
        FLEET: '/fleet',
        MESSAGES: '/messages',
        AVAILABLE_REPORTS: '/reports/available',
        SCHEDULED_REPORTS: '/reports/scheduled',
        DASHBOARDS: '/dashboards',
        POWER_BI: '/powerBi',
        SAFETY: '/safety',
        SAFETY_DRIVERS: '/safety/drivers',
        SAFETY_VEHICLES: '/safety/vehicles',
        SAFETY_ACCIDENTS: '/safety/accidents',
        TASKS_ROUTES: '/tasks/routes',
        TASKS_TEMPLATES: '/tasks/templates',
        FLEET360: '/f360',
        SETTINGS_EVENTS: '/settings/events',
        SETTINGS_GEOFENCES_POI: '/settings/geofences_poi',
        SETTINGS_SHIFTS: '/settings/shifts',
        SETTINGS_MONITORING: '/settings/monitoring',
        SETTINGS_MDT: '/settings/mdt',
        SETTINGS_CUSTOM_FIELDS: '/settings/custom_fields',
        SETTINGS_VIEWER_ACCOUNTS: '/settings/viewer_accounts',
        SETTINGS_RESOURCES: '/settings/resources',
        SETTINGS_MENU: '/settings/menu',
        ADMIN_ACCOUNT: '/admin/account',
        ADMIN_VEHICLE: '/admin/vehicle',
        ADMIN_REPORT: '/admin/report',
        ADMIN_GROUP: '/admin/group',
        ADMIN_DRIVERS: '/admin/drivers',
        ADMIN_USERS: '/admin/users',       
    },
};

export default config;