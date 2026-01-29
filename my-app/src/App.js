import React from 'react';
import Navbar from "./components/UI/navbar/navbar";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import your components
import About from './pages/About';
import Posts from './pages/Posts';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to='/' replace/>}/>
            </Routes>
        </BrowserRouter>
    )
}

// Add a Home component
const Home = () => {
    return <h2 style={{marginTop: '60px'}}>Домашняя страница</h2>;
};

export default App;