import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Import your components
import About from './pages/About';
import Posts from './pages/Posts';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <Link to="/about">О нас</Link>
                    <br/>
                    <Link to="/post">Пользователи</Link>
                </nav>

                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/post" element={<Posts />} />
                     Add a default/home route
                 <Route path="/" element={<Home />} />
             </Routes>
         </div>
        </BrowserRouter>
    )
}

// Add a Home component
const Home = () => {
    return <h2>Домашняя страница</h2>;
};

export default App;