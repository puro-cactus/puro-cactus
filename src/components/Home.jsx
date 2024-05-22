import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion'; // Import motion from Framer Motion
import '../assets/css/Home.css';

function Home() {
    const [scrollValue, setScrollValue] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            setScrollValue(window.scrollY);
            console.log(window.scrollY.valueOf())
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    console.log(window.scrollY.valueOf());
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
                    <div className="overlay-container overlay-hero">
                    <img src="/design-consultation-2.jpg" alt="consulting"/>
                    <div className="text-overlay ">
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
                <div className="row content-card">
                    <motion.div className="column  image-container"
                                initial={{x: '-200vw', opacity: 0}}
                                animate={{x: scrollValue >= 300 ? 100 : '-200vw', opacity: scrollValue >= 0 ? 1 : 0.5}}
                                transition={{duration: 1.4}}

                    >
                        <motion.img
                            src="../../public/xeroscape.JPG"
                            alt="1st image"
                            className="animated-image"
                        />
                    </motion.div>
                    <motion.div className="column image-text-container"
                                initial={{x: '200vw', opacity: 0}}
                                animate={{x: scrollValue > 300 ? 100 : '200vw', opacity: scrollValue > 100 ? 1 : 0.5}}
                                transition={{duration: 1.4}}
                    >
                        <span>Xeroscape: A serene landscape featuring drought-resistant plants and succulents, arranged in a harmonious composition. The muted color palette and geometric patterns create a tranquil oasis that requires minimal maintenance, perfect for arid climates.</span>

                    </motion.div>
                </div>
            </div>

            <div className={"space"}>
            <span>
                Xeriscaping is a water-efficient landscaping method that utilizes drought-tolerant plants and sustainable irrigation techniques to conserve water and promote biodiversity. By incorporating native plants and minimizing lawn areas, xeriscaping helps conserve water, enhance soil health, and support local ecosystems.
            </span>

            </div>
            <div className="main-content">
                <div className="row content-card">
                    <motion.div className="column image-container"
                                initial={{x: '-200vw', opacity: 0}} // Initial position from the right side
                                animate={{x: scrollValue > 900 ? 100 : '-200vw', opacity: scrollValue > 900 ? 1 : 0.5}}
                                transition={{duration: 1.2}}
                    >
                        <motion.img
                            src="../../public/artificial-grass.jpeg"
                            alt="2nd image"
                            className="animated-image"
                        />
                    </motion.div>
                    <motion.div className="column image-text-container"
                                initial={{x: '200vw', opacity: 0}} // Initial position from the right side
                                animate={{
                                    x: scrollValue > 900.000 ? 100 : '200vw',
                                    opacity: scrollValue > 900.000 ? 1 : 0.5
                                }}
                                transition={{duration: 1.4}}
                    >
                        <span>Artificial Grass: A lush green lawn crafted from high-quality synthetic turf, offering the look and feel of natural grass without the need for watering or mowing. Perfectly manicured and evergreen, it provides a vibrant and low-maintenance solution for residential and commercial landscapes.</span>

                    </motion.div>
                </div>
            </div>

            <div className={"space"}>
           <span>
    Artificial grass is an eco-friendly landscaping solution that conserves water, reduces chemical usage, and minimizes carbon emissions. It requires no watering, pesticides, or fertilizers, making it an environmentally sustainable alternative to traditional lawns.
</span>

            </div>

            <div className="main-content">
                <div className="row content-card">
                    <motion.div
                        className="column image-container"
                        initial={{x: '-200vw', opacity: 0}}
                        animate={{
                            x: scrollValue > 1400

                                ? 100 : '-200vw', opacity: scrollValue > 1400

                                ? 1 : 0.5
                        }}
                        transition={{duration: 1.4}}
                    >
                        <motion.img
                            src="../../public/Beautiful-Yard.jpeg"
                            alt="3rd image"
                            className="animated-image"
                            style={{
                                opacity: scrollValue > 1400 ? 1 : 0.5
                            }}
                        />
                    </motion.div>
                    <motion.div
                        className="column image-text-container"
                        initial={{x: '200vw', opacity: 0}}
                        animate={{
                            x: scrollValue > 1400

                                ? 100 : '200vw', opacity: scrollValue > 1400
                                ? 1 : 0.5
                        }}
                        transition={{duration: 1.4}}
                    >
                        <span>Beautiful Yard: A picturesque garden brimming with vibrant flowers, lush foliage, and winding pathways. Each corner reveals a new burst of color and texture, inviting exploration and relaxation. This meticulously curated landscape is a testament to the beauty of nature and the artistry of skilled gardeners.</span>

                    </motion.div>
                </div>
            </div>

            <div className={"space"}>
                <span>
    A cactus garden is a low-maintenance and water-efficient landscaping option that thrives in arid climates. Cacti are well-adapted to dry conditions, requiring minimal water and maintenance while providing unique aesthetic appeal. Cactus gardens contribute to biodiversity by providing habitat for desert wildlife and promoting sustainable landscaping practices.
</span>

            </div>

            <div className="main-content">
                <div className="row content-card">
                    <motion.div className="column image-container"
                                initial={{x: '-200vw', opacity: 0}} // Initial position from the right side
                                animate={{
                                    x: scrollValue > 2000 ? 100 : '-200vw',
                                    opacity: scrollValue > 2000 ? 1 : 0.5
                                }}
                                transition={{duration: 1.4}}
                    >
                        <motion.img
                            src="../../public/cactus-garden.jpeg"
                            alt="4th image"
                            className="animated-image"
                        />
                    </motion.div>
                    <motion.div className="column   image-text-container"
                                initial={{x: '200vw', opacity: 0}} // Initial position from the right side
                                animate={{x: scrollValue > 2000 ? 100 : '200vw', opacity: scrollValue > 2000 ? 1 : 0.5}}
                                transition={{duration: 1.4}}
                    >
                        <span>Cactus Garden: A striking display of desert flora, featuring an array of cacti and succulents in various shapes and sizes. Against a backdrop of sandy soil and rugged rocks, these hardy plants thrive in arid conditions, showcasing their unique forms and resilience.</span>
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
