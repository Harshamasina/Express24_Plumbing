import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import MakeCall from './components/MakeCall';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Footer />
                <MakeCall />
                <GoToTop />
            </BrowserRouter>
        </>
    );
};

export default App;