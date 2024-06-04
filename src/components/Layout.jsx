import React, { useState, useRef, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../assets/css/Home.css';
import '../assets/css/layout.css'

const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleCloseButtonClick = () => {
        setMenuOpen(false);
    };

    return (
        <div className="layout-container">
            <header className="header">
                <div className="navbar" ref={navRef}>
                    <img className={`logo logo-nav ${menuOpen ? 'opacity-0' : ''}`} src="/puro-cuctus-LOGO.PNG" alt="LOGO" />
                    <nav className="nav">
                        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </button>

                        <ul className={menuOpen ? 'active' : ''}>
                            <li><Link to="/" onClick={handleCloseButtonClick}>Home</Link></li>
                            <li><Link to="/portfolio" onClick={handleCloseButtonClick}>Portfolio</Link></li>
                            <li><Link to="/about" onClick={handleCloseButtonClick}>About Us</Link></li>
                            <li><Link to="/contact" onClick={handleCloseButtonClick}>Contact</Link></li>
                            {menuOpen && (
                                <button className="close-button" onClick={handleCloseButtonClick}>&times;</button>
                            )}
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="main-content">
                <Outlet />
            </main>

            <footer className="footer">
                <hr/>
                <p>&copy; 2024 Puro Cactus Nursery | Landscaping</p>
            </footer>
        </div>
    );
};

export default Layout;
