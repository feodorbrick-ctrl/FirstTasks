import React from 'react';
import cl from './Loader.module.css'

const Loader = () => {
    return (
        <div>
            <div className={cl.loader}/>
            <p>Loading...</p>
        </div>
    );
};

export default Loader;