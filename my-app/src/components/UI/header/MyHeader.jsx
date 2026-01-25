import React from 'react';
import cl from './MyHeader.module.css'

const MyHeader = () => {
    return (
        <div className={cl.header__div}>
            <h1 className={cl.header__p}>PosTable</h1>
        </div>
    );
};

export default MyHeader;