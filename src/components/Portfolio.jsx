import React from 'react';
import '../assets/css/Portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio-container">
            <h1>Portfolio</h1>
            <div className="portfolio-gallery">
                <div className="portfolio-item">
                    <img src="/cactus-garden.jpeg" alt="Portfolio Item 1" />
                    <h3>Cactus garden</h3>
                    <p>Cactus in front porch area</p>
                </div>
                <div className="portfolio-item">
                    <img src="/cans-cactus.png" alt="Portfolio Item 2" />
                    <h3>Can Casas </h3>
                    <p>Cans as usable home for Cacti</p>
                </div>
                <div className="portfolio-item">
                    <img src="/front-yard-landscaping.jpeg" alt="Portfolio Item 3" />
                    <h3>Frontyard Steps</h3>
                    <p>Flat stone curving around front yard</p>
                </div>
                <div className="portfolio-item">
                    <img src="/xeriscape-cactus-yard.jpeg" alt="Portfolio Item 4" />
                    <h3>Xeriscape In back yard</h3>
                    <p>Gravel with cactus in residnetial back yard</p>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
