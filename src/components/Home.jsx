import React, {useEffect, useState, useRef} from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/css/Home.css';
import {Link} from "react-router-dom";

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);

    // Handle hamburger in mobile
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenuOpen(false); // Close the menu if screen size is larger than 768px
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Handle Click to close Hamburger
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

    return (
        <div className="home-container">
            <div className="main-content">
                <div className="overlay-container">
                    <div className="carousel-container">
                        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
                            <div>
                                <img className={"carousel-image-size"} src="/IMG_1.jpg" alt="1"/>
                            </div>
                            <div>
                                <img src="/IMG_2.jpg" alt="2"/>
                            </div>
                            <div>
                                <img src="/IMG_3.jpg" alt="3"/>
                            </div>
                            <div>
                                <img src="/IMG_4.jpg" alt="4"/>
                            </div>
                        </Carousel>
                    </div>
                    <div className="overlay-hero">
                        <div className="overlay-hero-text">
                            <h1 className="first-paragraph">
                                <strong>Puro Cactus</strong>
                            </h1>
                            <p className={"second-paragraph"}>
                                Hey Central Texas, we're here to meet your landscape design and installation needs. We
                                specialize in designing and installing drought resistant landscapes that feature Texas
                                natives, cactus, agave, yucca and ocotillos.
                            </p>
                            <p className={"third-paragraph"}>
                                We serve the San Antonio and Austin areas and surrounding communities.
                            </p>
                            <p className={"fourth-paragraph"}>
                                <Link to="/contact" className={"fourth-paragraph-contact-link"}>Contact</Link>
                                &nbsp;us by email to set up a free estimate!
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Home;
