import React from 'react';
import { AppFaceID } from './faceID/AppFaceID';
import { OidcSecure, OidcUserStatus, useOidcAccessToken, useOidcIdToken, useOidcUser } from './oidc';
import { OidcUserInfo } from './oidc/vanilla';

interface OidcUserRoleInfo extends OidcUserInfo{
    role?: string[];
}

const DisplayUserInfo = () => {
    const { oidcUser, oidcUserLoadingState } = useOidcUser<OidcUserRoleInfo>();

    switch (oidcUserLoadingState) {
        case OidcUserStatus.Loading:
            return <p>Информация о пользователе загружается</p>;
        case OidcUserStatus.Unauthenticated:
            return <p>вы не авторизованы</p>;
        case OidcUserStatus.LoadingError:
            return <p>Не удалось загрузить информацию о пользователе</p>;
        default:
            return (
                <div className="card text-white bg-success mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Информация о пользователе</h5>
                        <p className="card-text">{JSON.stringify(oidcUser)}</p>
                    </div>
                </div>
            );
    }
};

export const Profile = () => {
    return (
       <div className="container mt-3">
           <DisplayAccessToken/>
           <DisplayIdToken/>
           <DisplayUserInfo/>
        </div>
    );
};

const DisplayAccessToken = () => {
    const { accessToken, accessTokenPayload } = useOidcAccessToken();

    if (!accessToken) {
        return <p>Вы не авторизованы</p>;
    }
    return (
        <div className="card text-white bg-info mb-3">
            <div className="card-body">
                <h5 className="card-title">Access Token</h5>
                {<p className="card-text">Access Token: {JSON.stringify(accessToken)}</p>}
                {accessTokenPayload != null && <p className="card-text">Access Token Payload: {JSON.stringify(accessTokenPayload)}</p>}
            </div>
        </div>
    );
};

const DisplayIdToken = () => {
    const { idToken, idTokenPayload } = useOidcIdToken();

    if (!idToken) {
        return <p>Вы не авторизованы</p>;
    }

    return (
        <div className="card text-white bg-info mb-3">
            <div className="card-body">
                <h5 className="card-title">ID Token</h5>
                {<p className="card-text">IdToken: {JSON.stringify(idToken)}</p>}
                {idTokenPayload != null && <p className="card-text">IdToken Payload: {JSON.stringify(idTokenPayload)}</p>}
            </div>
            <div>
                <AppFaceID/>
            </div>
        </div>
    );
};

export const SecureProfile = () => <OidcSecure><Profile /></OidcSecure>;
