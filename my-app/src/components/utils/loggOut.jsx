import React, {useContext, useState} from 'react';
import MyButton from "../UI/button/MyButton";
import MyModal from "../UI/modal/MyModal";
import {AuthContext} from "../../context/context";

const LoggOut = () => {
    const {setIsAuth} = useContext(AuthContext);
    const [modalLoggOut, modalLoggedOut] = useState(false);

    const logout = () => {
        setIsAuth(false);
        if (localStorage.getItem('auth')) {
            localStorage.removeItem('auth');
        }
        modalLoggedOut(false)
    }

    return (
        <>
            <MyButton style={{marginLeft: "50px", background: 'white'}} onClick={() => modalLoggedOut(true)}>
                Logg out
            </MyButton>
            <MyModal visible={modalLoggOut} setVisible={modalLoggedOut}>
                <h1 style={{textAlign: 'center'}}>Are you sure want log out?</h1>
                <MyButton onClick={() => {
                    logout();
                }}>Yes, I`m sure</MyButton>
                <p>click to gray zone to back</p>
            </MyModal>
        </>
    );
};

export default LoggOut;