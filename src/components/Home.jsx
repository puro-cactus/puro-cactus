import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer'; // Import useInView hook
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import '../assets/css/Home.css';

function Home() {
    const [isFirstImageVisible, setFirstImageVisible] = useState(false);
    const [isSecondImageVisible, setSecondImageVisible] = useState(false);
    const [isThirdImageVisible, setThirdImageVisible] = useState(false);
    const [isFourthImageVisible, setFourthImageVisible] = useState(false);

    const { ref: firstInViewRef, inView: firstInView } = useInView({ threshold: 0.5 }); // Adjust threshold
    const { ref: secondInViewRef, inView: secondInView } = useInView({ threshold: 0.5 }); // Adjust threshold
    const { ref: thirdInViewRef, inView: thirdInView } = useInView({ threshold: 0.5 }); // Adjust threshold
    const { ref: fourthInViewRef, inView: fourthInView } = useInView({ threshold: 0.5 }); // Adjust threshold

    useEffect(() => {
        setFirstImageVisible(firstInView);
    }, [firstInView]);

    useEffect(() => {
        setSecondImageVisible(secondInView);
    }, [secondInView]);

    useEffect(() => {
        setThirdImageVisible(thirdInView);
    }, [thirdInView]);

    useEffect(() => {
        setFourthImageVisible(fourthInView);
    }, [fourthInView]);

    console.log("First image in view:", firstInView);
    console.log("Second image in view:", secondInView);
    console.log("Third image in view:", thirdInView);
    console.log("Fourth image in view:", fourthInView);

    return (
        <div className="home-container">
            <header className="header">
                <div className="navbar">
                    <img className="logo logo-nav" src="../../public/lawn-mower-blades-icon-500x200.png"
                         alt="lawnmower"/>
                    <div className="nav-title">
                        <h3>Welcome to Our Landscaping Services</h3>
                    </div>
                    <nav className="nav">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className="main-content">
                <div>
                    <div>
                        <h1>Welcome to GreenScape Solutions - Your Premier Landscaping Partner</h1>
                        <p>At GreenScape Solutions, we recognize that your outdoor space is more than just a backyard -
                            it's an extension of your home, your sanctuary, and your personal oasis. That's why we're
                            committed to turning ordinary yards into extraordinary landscapes that mirror your distinct
                            style and aspirations.</p>
                        <p>With a deep-rooted passion for nature and a dedication to excellence, our team of seasoned
                            landscapers brings forth creativity, expertise, and meticulous attention to detail to every
                            project we take on. Whether you envision a verdant green lawn, vibrant flower beds, or a
                            tranquil outdoor living area, we possess the knowledge and proficiency to transform your
                            landscaping dreams into reality.</p>
                        <p>From initial design concepts to flawless installation and ongoing maintenance, we collaborate
                            closely with each of our clients to ensure that their outdoor spaces not only meet but
                            surpass their expectations. We take pride in delivering exceptional results that enhance the
                            beauty, functionality, and value of your property.</p>
                        <p>Yet, our focus extends beyond crafting stunning landscapes - it's about fostering enduring
                            relationships with our clients. We believe in transparent communication, honesty, and
                            personalized service at every phase of the project. Your satisfaction is our foremost
                            priority, and we're committed to going the extra mile to ensure that you're delighted with
                            the end outcome.</p>
                        <p>So whether you're seeking to rejuvenate your existing landscape or envisioning a brand new
                            outdoor masterpiece, entrust the expertise of GreenScape Solutions to bring your vision to
                            fruition. Get in touch with us today to arrange a consultation and let's commence the
                            journey of transforming your outdoor space into the landscape of your dreams!</p>
                    </div>
                </div>
            </div>
            {/* Close main-content here */}

            <div className="main-content">
                <div className="row">
                    <motion.div className="column image-container"
                                initial={{x: '-200vw', opacity: 0}} // Initial position from the left side
                                animate={{x: 100, opacity: isFirstImageVisible ? 1 : 0.5}} // Animate from left side
                                transition={{duration: 1.2}}
                                ref={firstInViewRef}
                    >
                        <motion.img
                            src="../../public/xeroscape.JPG"
                            alt="1st image"
                            className="animated-image"
                        />
                    </motion.div>
                    <motion.div className="column space image-text-container"
                                initial={{x: '200vw', opacity: 0}} // Initial position from the left side
                                animate={{x: 100, opacity: isFirstImageVisible ? 1 : 0.5}} // Animate from left side
                                transition={{duration: 1.2}}
                    >
                        <span>Text for the image</span>
                    </motion.div>
                </div>
            </div>

            <div className={"space"}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae natus
                    repellendus! Ducimus est iusto modi numquam odit, reprehenderit rerum.</p>
            </div>
            <div className="main-content">
                <div className="row">
                    <motion.div className="column image-container"
                                initial={{x: '200vw', opacity: 0}} // Initial position from the right side
                                animate={{x: 100, opacity: isSecondImageVisible ? 1 : 0.5}} // Animate from left side
                                transition={{duration: 1.2}}
                                ref={secondInViewRef}
                    >
                        <motion.img
                            src="../../public/artificial-grass.jpeg"
                            alt="2nd image"
                            className="animated-image"
                        />
                    </motion.div>
                    <motion.div className="column space image-text-container"
                                initial={{x: '-200vw', opacity: 0}} // Initial position from the right side
                                animate={{x: 100, opacity: isSecondImageVisible ? 1 : 0.5}} // Animate from left side
                                transition={{duration: 1.4}}
                    >
                        <span>Text for the image</span>
                    </motion.div>
                </div>
            </div>

            <div className={"space"}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae natus
                    repellendus! Ducimus est iusto modi numquam odit, reprehenderit rerum.</p>
            </div>
            <div className="main-content">
                <div className="row">
                    <motion.div className="column image-container"
                                initial={{x: '-200vw', opacity: 0}} // Initial position from the left side
                                animate={{x: 100, opacity: isThirdImageVisible ? 1 : 0.5}} // Animate from left side
                                transition={{duration: 1.2}}
                                ref={thirdInViewRef}
                    >
                        <motion.img
                            src="../../public/Beautiful-Yard.jpeg"
                            alt="3rd image"
                            className="animated-image"
                        />
                    </motion.div>
                    <motion.div className="column space image-text-container"
                                initial={{x: '200vw', opacity: 0}} // Initial position from the right side
                                animate={{x: 100, opacity: isThirdImageVisible ? 1 : 0.5}} // Animate from left side
                                transition={{duration: 1.2}}
                    >
                        <span>Text for the image</span>
                    </motion.div>
                </div>
            </div>

            <div className="main-content">
                <div className="row">
                    <motion.div className="column image-container"
                                initial={{x: '200vw', opacity: 0}} // Initial position from the right side
                                animate={{x: 100, opacity: isFourthImageVisible ? 1 : 0.5}} // Animate from left side
                                transition={{duration: 1.2}}
                                ref={fourthInViewRef}
                    >
                        <motion.img
                            src="../../public/cactus-garden.jpeg"
                            alt="4th image"
                            className="animated-image"
                        />
                    </motion.div>
                    <motion.div className="column space image-text-container"
                                initial={{x: '-200vw', opacity: 0}} // Initial position from the right side
                                animate={{x: 100, opacity: isFourthImageVisible ? 1 : 0.5}} // Animate from left side
                                transition={{duration: 1.4}}
                    >
                        <span>Text for the image</span>
                    </motion.div>
                </div>
            </div>

            <footer className="footer">
                <p>&copy; 2024 Your Landscaping Services</p>
            </footer>
        </div>
    );
}

export default Home;
