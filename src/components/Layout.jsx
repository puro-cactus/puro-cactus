import React, {useState, useRef, useEffect} from 'react';
import {Outlet, Link} from 'react-router-dom';
import '../assets/css/Home.css';

const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isNavFixed, setIsNavFixed] = useState(false);
    const navRef = useRef(null);
    const [isNavTransparent, setIsNavTransparent] = useState(false);
// set background opacity to be slightly see through


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
            if (window.scrollY > 100) { // Adjust the scroll position as needed
                setIsNavFixed(true);
                setIsNavTransparent(true)
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
                <div className="navbar" ref={navRef}>
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
                <div className={"row"}>
                    <li>
                        <div className="column justify-content-star pad-l-50wt">
                            <p>&copy; 2024 Puro Cactus xeriscape | Landscaping design</p>
                        </div>
                    </li>
                    <li>
                        <div className="column justify-content-end">
                            <div className="logo-number-img">
                                <img src="/public/puro-cactus-logo-v1.png" alt="logo-number"/>
                            </div>
                        </div>
                    </li>
                </div>

            </footer>
        </div>
    );
};

export default Layout;
