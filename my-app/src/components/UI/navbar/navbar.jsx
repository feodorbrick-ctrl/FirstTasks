import React from 'react';
import {Link} from "react-router-dom";
import MyHeader from "../header/MyHeader";

const Navbar = (isAuth) => {
    return (
            <div className="navbar">
                <MyHeader/>
                <div className='navbar__links'>
                    {!isAuth
                        ?
                        <>
                            <Link style={{marginRight: '10px'}} to="/about">About</Link>
                            <Link style={{marginRight: '10px'}} to="/posts">Posts</Link>
                            <Link to='/'>Home</Link>
                        </>
                        :
                        <>
                            <Link style={{marginRight: '10px'}} to='/login'>Login</Link>
                            <Link to="/about">About</Link>
                        </>
                    }

                </div>
            </div>
    );
};

export default Navbar;