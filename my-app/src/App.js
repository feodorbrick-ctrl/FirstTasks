import React, {useState} from 'react';
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from 'react-router-dom';
import {AuthContext} from "./context/context";

const App = () => {
    const [isAuth, setIsAuth] = useState(true);
    return (
        <AuthContext value={{
            isAuth,
            setIsAuth: setIsAuth
        }}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </AuthContext>
    )
}

export default App;