import React, {useEffect, useState, useRef} from 'react';
import {motion} from 'framer-motion'; // Import motion from Framer Motion
import {useInView} from 'react-intersection-observer';
import '../assets/css/Home.css';

function Home() {
    // const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);

    const [ref1, inView1] = useInView({
        threshold: 0.2, // Trigger when 20% of the element is visible
    });

    const [ref2, inView2] = useInView({
        threshold: 0.2,
    });

    const [ref3, inView3] = useInView({
        threshold: 0.2,
    });
    const [ref4, inView4] = useInView({
        threshold: 0.2,
    });
    const logInViewRef = (refName, inView) => {
        if (inView) {
            console.log(`${refName} is in view.`);
        }
    };
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
                        <img src="/hero-cactus.jpeg" alt="Puro Cactus"/>
                        <div className="overlay-hero">
                            <div className="overlay-hero-text">
                                <h1 className="first-paragraph">
                                    <strong>Puro Cactus</strong>
                                </h1>
                                <p className={"second-paragraph"}> Looking to transform your yard or need beautiful,
                                    resilient plants? Discover our sustainable solutions and expert landscaping services
                                    today!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-section">
                    <div className="main-content">
                        <div className={"row"}>
                            <div className={"column"}>
                                <h1 className={"main-content-title"}>
                                    Services
                                </h1>
                            </div>
                        </div>
                        <div className="row content-card">
                            <motion.div
                                ref={ref1}
                                className="column image-container"
                                initial={{x: '-200px', opacity: 0}}
                                animate={{
                                    x: inView1 ? 0 : '-200px',
                                    opacity: inView1 ? 1 : 0,
                                }}
                                transition={{duration: .5}}
                                onAnimationComplete={() => logInViewRef('ref1', inView1)} // Here's where you call logInViewRef
                            >
                                <motion.img
                                    src="/xeroscape.JPG"
                                    alt="1st image"
                                    className="animated-image"
                                />
                            </motion.div>
                            <motion.div
                                className="column image-text-container"
                                initial={{x: '200px', opacity: 0}}
                                animate={{
                                    x: inView1 ? 0 : '200px',
                                    opacity: inView1 ? 1 : 0,
                                }}
                                transition={{duration: .5}}
                            >
                                <span>Xeriscape: A serene landscape featuring drought-resistant plants and succulents, arranged in a harmonious composition.</span>
                            </motion.div>
                        </div>
                    </div>

                    <div className="space-100 span-padding">
                        <span>
                            Xeriscaping is a landscaping method that utilizes drought-tolerant plants and sustainable techniques to conserve water and promote biodiversity. By incorporating native plants, this conserve water, enhance soil health, and support local ecosystems.
                        </span>
                    </div>

                    <div className="main-content">
                        <div className="row content-card">
                            <motion.div
                                ref={ref2}
                                className="column image-container"
                                initial={{x: '-200px', opacity: 0}}
                                animate={{
                                    x: inView2 ? 0 : '-200px',
                                    opacity: inView2 ? 1 : 0,
                                }}
                                transition={{duration: .5}}
                                onAnimationComplete={() => logInViewRef('ref2', inView2)} // Here's where you call logInViewRef

                            >
                                <motion.img
                                    src="/cactus-nursery.png"
                                    alt="2nd image"
                                    className="animated-image"
                                />
                            </motion.div>
                            <motion.div
                                className="column image-text-container"
                                initial={{x: '200px', opacity: 0}}
                                animate={{
                                    x: inView2 ? 0 : '200px',
                                    opacity: inView2 ? 1 : 0,
                                }}
                                transition={{duration: .5}}
                            >
                                <span>Cactus Nursery: A vibrant oasis of hardy succulents, offering a diverse collection of cacti in various shapes and sizes. These low-maintenance plants bring a touch of desert charm to any space, thriving with minimal water and care.</span>
                            </motion.div>
                        </div>
                    </div>

                    <div className="space-100 span-padding">
                        <span>
Cactus Nursery An eco-friendly haven of resilient succulents that conserve water and reduce chemical usage. These hardy plants thrive without the need for frequent watering, pesticides, or fertilizers, offering an environmentally sustainable alternative to traditional gardens.                         </span>
                    </div>

                    <div className="main-content">
                        <div className="row content-card ">
                            <motion.div
                                ref={ref3}
                                className="column image-container"
                                initial={{x: '-200px', opacity: 0}}
                                animate={{
                                    x: inView3 ? 0 : '-200px',
                                    opacity: inView3 ? 1 : 0,
                                }}
                                transition={{duration: .5}}
                                onAnimationComplete={() => logInViewRef('ref3', inView3)} // Here's where you call logInViewRef

                            >
                                <motion.img
                                    src="/Beautiful-Yard.jpeg"
                                    alt="3rd image"
                                    className="animated-image"
                                />
                            </motion.div>
                            <motion.div
                                className="column image-text-container"
                                initial={{x: '200px', opacity: 0}}
                                animate={{
                                    x: inView3 ? 0 : '200px',
                                    opacity: inView3 ? 1 : 0,
                                }}
                                transition={{duration: .5}}
                            >
                                <span>
Backyard Oasis Landscaping: Transform your outdoor space into a stunning retreat with our premium services. We create custom-designed backyards featuring lush greenery, serene water features. Our expert team crafts inviting patios, pathways, and cozy seating areas.</span>
                            </motion.div>

                        </div>
                    </div>

                    <div className="space-100 span-padding">
                        <span>
                            A cactus garden is a low-maintenance and water-efficient landscaping option that thrives in arid climates. Cacti are well-adapted to dry conditions, requiring minimal water and maintenance while providing unique aesthetic appeal. Cactus gardens contribute to biodiversity by providing habitat for desert wildlife and promoting sustainable landscaping practices.
                        </span>
                    </div>

                    <div className="main-content">
                        <div className="row content-card">
                            <motion.div
                                ref={ref4}
                                className="column image-container"
                                initial={{x: '-200px', opacity: 0}}
                                animate={{
                                    x: inView4 ? 0 : '-200px',
                                    opacity: inView4 ? 1 : 0,
                                }}
                                transition={{duration: .5}}
                                onAnimationComplete={() => logInViewRef('ref4', inView4)} // Here's where you call logInViewRef

                            >
                                <motion.img
                                    src="/cactus-garden.jpeg"
                                    alt="4th image"
                                    className="animated-image"
                                />
                            </motion.div>
                            <motion.div
                                className="column image-text-container"
                                initial={{x: '200px', opacity: 0}}
                                animate={{
                                    x: inView4 ? 0 : '200px',
                                    opacity: inView4 ? 1 : 0,
                                }}
                                transition={{duration: .5}}
                            >
                                <span>Cactus Garden: A striking display of desert flora, featuring an array of cacti and succulents in various shapes and sizes. Against a backdrop of sandy soil and rugged rocks, these hardy plants thrive in arid conditions, showcasing their unique forms and resilience.</span>
                            </motion.div>
                        </div>
                        <div className={"space-50"}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
