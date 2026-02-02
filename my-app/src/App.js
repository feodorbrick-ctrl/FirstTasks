import React, {useEffect, useState} from 'react';
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from 'react-router-dom';
import {AuthContext} from "./context/context";
import MyModal from "./components/UI/modal/MyModal";

const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoadingUser, setIsLoadingUser] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
        setIsLoadingUser(false);
    }, []);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoadingUser,
        }}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;