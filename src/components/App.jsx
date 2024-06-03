import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../assets/css/App.css'
import Home from "./Home.jsx";
import AboutUs from "./AboutUs.jsx";
import Layout from "./Layout.jsx";
import Portfolio from "./Portfolio.jsx";
import Contact from "./Contact.jsx";
import NoPage from "./NoPage.jsx";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<AboutUs/>}/>
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App
