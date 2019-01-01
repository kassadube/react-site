import { Map, List } from 'immutable';
import packageJson from '../../../../package.json';
import config from '../../../config';

const InitalState = Map({
    isAuthenticate: false,
    username: '', 
    password: '',
    error: '',
    showWarningMessage: false,
    accountInfo: Map({
        appLogo: '',
        appTitle: '',
        loginName: '',
        updates: List([
            {
                type: 'Feature',
                description: 'Starting from 6.12.3 something huge will happen.',
                readMoreLink: ''
            }, {
                type: 'Bug',
                description: 'Reports Module will be shut down for maintenance on 1.1.18 18:00 EST - 2.1.18 18:00 EST.',
                readMoreLink: ''
            },
        ]),
        alerts: 0,
        messages: 0,
        accountLogo: '',
        fleetRefreshRate: 60,
        eventRefreshRate: 60,
    }),
    measurement: Map({}),
    account: Map({
        helpLink: 'http://help.google.com',
        isFetching: false,
    }),
    isSoundMuted: true,
    isAboutOpen: false,
    isUpdatesOpen: false,
    systemInfo: Map({
        webVersion: packageJson.version,
        fleetVersion: config.FLEET.VERSION,
        apiVersion: '1.0.0',
        dbVersion: '1.0.0',
    }),
    eventsCurtain: Map({
        isShown: false,
        curtainEvents: List([]),
        isFetching: false,
    }),
    componentsToPollCount: 0,
    loginDicChange: 0
});

export default InitalState;