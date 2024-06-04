import React, {useEffect, useState, useRef} from 'react';
import {motion} from 'framer-motion'; // Import motion from Framer Motion
import {useInView} from 'react-intersection-observer';
import '../assets/css/Home.css';

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
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
                                <p className="first-paragraph">At Puro Cactus, we recognize that your home environment is more than just a space - it's an extension of your lifestyle, your sanctuary, and your personal oasis. That's why we're committed to integrating nature's resilience and purity into every aspect of your home.</p>
                                <p className={"second-paragraph"}>With a deep-rooted passion for sustainability and a dedication to excellence, our team of experts brings forth creativity, expertise, and meticulous attention to detail to every product we develop. Whether you envision eco-friendly home goods, organic skincare, or sustainable packaging, we possess the knowledge and proficiency to transform your sustainability dreams into reality.</p>
                                <p>Yet, our focus extends beyond creating outstanding products - it's about fostering enduring relationships with our customers. We believe in transparent communication, honesty, and personalized service at every phase of our interaction. Your satisfaction is our foremost priority, and we're committed to going the extra mile to ensure that you're delighted with the end outcome.</p>
                                <p>So whether you're seeking to rejuvenate your home with sustainable solutions or envisioning a brand new eco-friendly lifestyle, entrust the expertise of Puro Cactus to bring your vision to fruition. Get in touch with us today to explore our range of products and let's commence the journey of transforming your space with the purity and resilience of nature!</p>
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
                                transition={{duration: 1}}
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
                                transition={{duration: 1}}
                            >
                                <span>Xeroscape: A serene landscape featuring drought-resistant plants and succulents, arranged in a harmonious composition. The muted color palette and geometric patterns create a tranquil oasis that requires minimal maintenance, perfect for arid climates.</span>
                            </motion.div>
                        </div>
                    </div>

                    <div className="space">
                        <span>
                            Xeriscaping is a water-efficient landscaping method that utilizes drought-tolerant plants and sustainable irrigation techniques to conserve water and promote biodiversity. By incorporating native plants and minimizing lawn areas, xeriscaping helps conserve water, enhance soil health, and support local ecosystems.
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
                                transition={{duration: 1}}
                                onAnimationComplete={() => logInViewRef('ref2', inView2)} // Here's where you call logInViewRef

                            >
                                <motion.img
                                    src="/artificial-grass.jpeg"
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
                                transition={{duration: 1}}
                            >
                                <span>Artificial Grass: A lush green lawn crafted from high-quality synthetic turf, offering the look and feel of natural grass without the need for watering or mowing. Perfectly manicured and evergreen, it provides a vibrant and low-maintenance solution for residential and commercial landscapes.</span>
                            </motion.div>
                        </div>
                    </div>

                    <div className="space">
                        <span>
                            Artificial grass is an eco-friendly landscaping solution that conserves water, reduces chemical usage, and minimizes carbon emissions. It requires no watering, pesticides, or fertilizers, making it an environmentally sustainable alternative to traditional lawns.
                        </span>
                    </div>

                    <div className="main-content">
                        <div className="row content-card">
                            <motion.div
                                ref={ref3}
                                className="column image-container"
                                initial={{x: '-200px', opacity: 0}}
                                animate={{
                                    x: inView3 ? 0 : '-200px',
                                    opacity: inView3 ? 1 : 0,
                                }}
                                transition={{duration: 1}}
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
                                transition={{duration: 1}}
                            >
                                <span>Cactus Garden: A striking display of desert flora, featuring an array of cacti and succulents in various shapes and sizes. Against a backdrop of sandy soil and rugged rocks, these hardy plants thrive in arid conditions, showcasing their unique forms and resilience.</span>
                            </motion.div>

                        </div>
                    </div>

                    <div className="space">
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
                                transition={{duration: 1}}
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
                                transition={{duration: 1}}
                            >
                                <span>Cactus Garden: A striking display of desert flora, featuring an array of cacti and succulents in various shapes and sizes. Against a backdrop of sandy soil and rugged rocks, these hardy plants thrive in arid conditions, showcasing their unique forms and resilience.</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
