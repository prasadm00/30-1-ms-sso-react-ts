import { AuthenticatedTemplate } from '@azure/msal-react';

import { NavigationBar } from './NavigationBar';

export const PageLayout = (props:any) => {
    return (
        <>
            <NavigationBar />
            <br />
            <br />
            {props.children}
            <br />
            <AuthenticatedTemplate>

            </AuthenticatedTemplate>
        </>
    );
}