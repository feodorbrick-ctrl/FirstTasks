import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyHeader from "../header/MyHeader";
import {AuthContext} from "../../../context/context";
import LoggOut from "../../utils/loggOut";

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    if (isAuth) {
        return (
            <div className="navbar">
                <MyHeader/>
                <LoggOut/>
                <div className='navbar__links'>

                    <Link style={{marginRight: '10px'}} to="/about">About</Link>
                    <Link style={{marginRight: '10px'}} to="/posts">Posts</Link>

                    <Link to='/'>Home</Link>
                </div>
            </div>
        );
    } else {
        return (
            <div className="navbar">
                <MyHeader/>
                <div className='navbar__links'>

                    <Link style={{marginRight: '10px'}} to='/login'>Login</Link>

                    <Link to="/about">About</Link>
                </div>
            </div>
        );
    }
};

export default Navbar;