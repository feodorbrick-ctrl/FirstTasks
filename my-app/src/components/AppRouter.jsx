import React, {useContext} from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/routers";
import Navbar from "./UI/navbar/navbar";
import {AuthContext} from "../context/context";

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext.value)
    console.log(isAuth)
    return (
        isAuth
            ? <div>
                <Navbar isAuth={isAuth}/>
                <br/>
                <br/>
                <br/>
                <Routes>
                {privateRoutes.map((route) =>
                    <Route
                        path={route.path}
                        element={route.component}/>
                )}

                <Route path="*" element={<Navigate to='/posts' replace/>}/>
                </Routes>
            </div>
            :
            <div>
                <Navbar isAuth={isAuth}/>
                <br/>
                <br/>
                <br/>
            <Routes>
                {publicRoutes.map((route) =>
                    <Route
                        path={route.path}
                        element={route.component}/>
                )}
                <Route path="*" element={<Navigate to='/login' replace/>}/>
            </Routes>
            </div>
    )
};
export default AppRouter;