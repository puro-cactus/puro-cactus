import React from 'react';
import '../assets/css/Portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio-container">
            <h1>Portfolio</h1>
            <div className="portfolio-gallery">
                <div className="portfolio-item">
                    <img src="/portfolio-item-1.jpg" alt="Portfolio Item 1" />
                    <h3>Portfolio Item 1</h3>
                    <p>Description of Portfolio Item 1</p>
                </div>
                <div className="portfolio-item">
                    <img src="/portfolio-item-2.jpg" alt="Portfolio Item 2" />
                    <h3>Portfolio Item 2</h3>
                    <p>Description of Portfolio Item 2</p>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
