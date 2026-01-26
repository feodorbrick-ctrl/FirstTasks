import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";

const App = () => {
    return (
        <div>
                <nav>
                    <Link to="/about">О нас</Link>
                    <Link to="/users">Пользователи</Link>
                </nav>

                <Routes>
                    <Route path="/about" element={<About/>} />
                    <Route path="/users" element={<Posts/>} />
                </Routes>
        </div>
    );
};

export default App;