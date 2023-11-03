

export const msalConfig = {
    auth: {
        clientId: '63ca9944-d19c-4e23-afbb-debad37b5716',
        authority: 'https://login.microsoftonline.com/common/', 
        redirectUri: '/',  
        postLogoutRedirectUri: '/', 
        navigateToLoginRequestUrl: false, 
    },
    cache: {
        cacheLocation: 'sessionStorage', 
        storeAuthStateInCookie: false, 
    },

};

export const loginRequest = {
    scopes: [],
};
