import React from 'react';
import cl from './MyHeader.module.css'

const MyHeader = () => {
    return (
        <div className={cl.header__div}>
            <h2 className={cl.header__p}>PosTable</h2>
        </div>
    );
};

export default MyHeader;