import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer'; // Import useInView hook
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import '../assets/css/Home.css';


function Home() {
    const [isFirstImageVisible, setFirstImageVisible] = useState(false);
    const [isSecondImageVisible, setSecondImageVisible] = useState(false);
    const [isThirdImageVisible, setThirdImageVisible] = useState(false);
    const [isFourthImageVisible, setFourthImageVisible] = useState(false);

    const { ref: firstInViewRef, inView: firstInView } = useInView();
    const { ref: secondInViewRef, inView: secondInView } = useInView();
    const { ref: thirdInViewRef, inView: thirdInView } = useInView();
    const { ref: fourthInViewRef, inView: fourthInView } = useInView();

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

            <main className="main-content">
                <main className="main-content">
                    <div>
                        <h1>Welcome to [Company Name] - Your Trusted Landscaping Partner</h1>
                        <p>At [Company Name], we understand that your outdoor space is more than just a backyard - it's
                            an extension of your home, your sanctuary, and your personal oasis. That's why we're
                            dedicated to transforming ordinary yards into extraordinary landscapes that reflect your
                            unique style and vision.</p>
                        <p>With a passion for nature and a commitment to excellence, our team of skilled landscapers
                            brings creativity, expertise, and attention to detail to every project we undertake. Whether
                            you're dreaming of a lush green lawn, vibrant flower beds, or a serene outdoor living area,
                            we have the knowledge and experience to make your landscaping dreams a reality.</p>
                        <p>From initial design concepts to meticulous installation and ongoing maintenance, we work
                            closely with each of our clients to ensure that their outdoor spaces not only meet but
                            exceed their expectations. We pride ourselves on delivering exceptional results that enhance
                            the beauty, functionality, and value of your property.</p>
                        <p>But it's not just about creating stunning landscapes - it's about creating lasting
                            relationships with our clients. We believe in open communication, transparency, and
                            personalized service every step of the way. Your satisfaction is our top priority, and we'll
                            go above and beyond to ensure that you're thrilled with the final results.</p>
                        <p>So whether you're looking to revitalize your existing landscape or create a brand new outdoor
                            masterpiece, trust the experts at [Company Name] to bring your vision to life. Contact us
                            today to schedule a consultation and let's start transforming your outdoor space into the
                            landscape of your dreams!</p>
                    </div>
                    <div className={"main-content-images"}>
                        <motion.img
                            src="../../public/xeroscape.JPG"
                            alt="1st image"
                            initial={{ opacity: 0.3, scale: 0.5 }} // Initial opacity and scale
                            animate={{ opacity: isFirstImageVisible ? 1 : 0.3, scale: isFirstImageVisible ? 1 : 0.6 }} // Animate opacity and scale
                            transition={{ duration: 4 }} // Animation duration
                            className="animated-image"
                            ref={firstInViewRef} // Assign useInView ref
                        />
                        <motion.img
                            src="../../public/artificial-grass.jpeg"
                            alt="2nd image"
                            initial={{ opacity: 0.3, scale: 0.5 }} // Initial opacity and scale
                            animate={{ opacity: isSecondImageVisible ? 1 : 0.3, scale: isSecondImageVisible ? 1 : 0.6 }} // Animate opacity and scale
                            transition={{ duration: 4 }} // Animation duration
                            className="animated-image"
                            ref={secondInViewRef} // Assign useInView ref
                        />
                        <motion.img
                            src="../../public/Beautiful-Yard.jpeg"
                            alt="3rd image"
                            initial={{ x: '-100vw', opacity: 0 }} // Initial position from the left side
                            animate={{ x: 0, opacity: isThirdImageVisible ? 1 : 0.3 }} // Animate from left side
                            transition={{ duration: 4 }} // Animation duration
                            className="animated-image"
                            ref={thirdInViewRef} // Assign useInView ref
                        />
                        <motion.img
                            src="../../public/cactus-garden.jpeg"
                            alt="4th image"
                            initial={{ x: '100vw', opacity: 0 }} // Initial position from the right side
                            animate={{ x: 0, opacity: isFourthImageVisible ? 1 : 0.3 }} // Animate from right side
                            transition={{ duration: 4 }} // Animation duration
                            className="animated-image"
                            ref={fourthInViewRef} // Assign useInView ref
                        />
                    </div>
                </main>

            </main>
            <footer className="footer">
                <p>&copy; 2024 Your Landscaping Services</p>
            </footer>
        </div>
    );
}

export default Home;
