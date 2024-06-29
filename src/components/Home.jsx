import React, { useEffect, useState, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/css/Home.css';

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
                    <div className="overlay-container">
                        <div className="carousel-container">
                            <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
                                <div>
                                    <img src="/xeroscape.JPG" alt="Xeriscape" />
                                    <p className="legend">Xeriscape: A serene landscape featuring drought-resistant plants and succulents.</p>
                                </div>
                                <div>
                                    <img src="/cactus-nursery.png" alt="Cactus Nursery" />
                                    <p className="legend">Cactus Nursery: A vibrant oasis of hardy succulents.</p>
                                </div>
                                <div>
                                    <img src="/Beautiful-Yard.jpeg" alt="Backyard Oasis" />
                                    <p className="legend">Backyard Oasis Landscaping: Transform your outdoor space into a stunning retreat.</p>
                                </div>
                                <div>
                                    <img src="/cactus-garden.jpeg" alt="Cactus Garden" />
                                    <p className="legend">Cactus Garden: A striking display of desert flora.</p>
                                </div>
                            </Carousel>
                        </div>
                        <div className="overlay-hero">
                            <div className="overlay-hero-text">
                                <h1 className="first-paragraph">
                                    <strong>Puro Cactus</strong>
                                </h1>
                                <p className={"second-paragraph"}>
                                    Hey Central Texas, we're here to meet your landscape design and installation needs. We specialize in designing and installing drought resistant landscapes that feature Texas natives, cactus, agave, yucca and ocotillos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Home;
