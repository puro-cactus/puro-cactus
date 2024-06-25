import React, {useState, useRef, useEffect} from 'react';
import {Outlet, Link} from 'react-router-dom';
import '../assets/css/Home.css';

const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isNavFixed, setIsNavFixed] = useState(false);
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

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 90) {
                setIsNavFixed(true);
            } else {
                setIsNavFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
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
            <header className={`header ${isNavFixed ? 'fixed' : ''}`}>
                <div className="navbar" ref={navRef} style={{backgroundColor: isNavFixed ? '#DC204BE0' : ''}}>
                    <Link to={"/"}>
                        <img className={`logo logo-nav ${menuOpen ? 'opacity-0' : ''}`} src="/puro-cactus-logo.PNG"
                             alt="LOGO"/>
                    </Link>
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
                                <button className="close-button" onClick={handleCloseButtonClick}></button>
                            )}
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="main-content">
                <Outlet/>
            </main>

            <footer className="footer">
                <hr/>
                <div className="column">
                    <div className={"row"}>
                        <div className="column justify-content-center">
                            <p>&copy; 2024 Puro Cactus Xeriscape & Landscaping Design</p>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className="column justify-content-center">
                            <div className="BDT-footer">

                                <img src="/public/BDT-favicon.png" alt="logo-number"/>
                                <p>Website created and maintained by
                                    <a href="https://barreddoortechnologies.com/" target="_blank"
                                       rel="noopener noreferrer" className={"BDT-link"}> Barred Door Technologies</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
