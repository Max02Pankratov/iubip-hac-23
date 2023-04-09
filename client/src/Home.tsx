import React from 'react';

import { useOidc } from './oidc';

export const Home = () => {
    const { login, logout, renewTokens, isAuthenticated } = useOidc();

    return (
        <div className="container-fluid mt-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Главная</h5>
                    {!isAuthenticated && <p><button type="button" className="btn btn-primary" onClick={() => login('/profile')}>Регистрация</button></p>}
                    {isAuthenticated && <p><button type="button" className="btn btn-primary" onClick={() => logout()}>Выйти из аккаунта</button></p>}
                    {isAuthenticated && <p><button type="button" className="btn btn-primary" onClick={() => logout(null)}>Выйти и удалить профиль</button></p>}
                    {isAuthenticated && <p><button type="button" className="btn btn-primary" onClick={async () => console.log('renewTokens result', await renewTokens())}>Обновить токены</button></p>}
                </div>
            </div>
        </div>
    );
};
