import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { PublicClientApplication, EventType } from '@azure/msal-browser';
import { msalConfig } from './authConfig';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.addEventCallback((event) => {
  //@ts-ignore
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
        //@ts-ignore
        const account = event.payload.account;
        msalInstance.setActiveAccount(account);
    }
});
  //@ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //@ts-ignore
    <App instance={msalInstance}/>
);