import React, { useState } from 'react';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/css/Portfolio.css';

Modal.setAppElement('#root'); // Set the root element for accessibility

const portfolioItems = [
    {
        title: "Cactus garden",
        description: "Cactus in front porch area",
        images: ["/cactus-garden.jpeg"],
    },
    {
        title: "Can Casas",
        description: "Cans as usable home for Cacti",
        images: ["/cans-cactus.png"],
    },
    {
        title: "Frontyard Steps",
        description: "Flat stone curving around front yard",
        images: ["/front-yard-landscaping.jpeg"],
    },
    {
        title: "Xeriscape In back yard",
        description: "Gravel with cactus in residential back yard",
        images: ["/xeriscape-cactus-yard.jpeg"],
    },
];

function Portfolio() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openModal = (item) => {
        setSelectedItem(item);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedItem(null);
    };

    return (
        <div className="portfolio-container">
            <h1>Portfolio</h1>
            <div className="portfolio-gallery">
                {portfolioItems.map((item, index) => (
                    <div key={index} className="portfolio-item" onClick={() => openModal(item)}>
                        <img src={item.images[0]} alt={`Portfolio Item ${index + 1}`} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            {selectedItem && (
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal" overlayClassName="overlay">
                    <h2>{selectedItem.title}</h2>
                    <Carousel showThumbs={false} showStatus={false} useKeyboardArrows infiniteLoop>
                        {selectedItem.images.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Image ${index + 1}`} />
                            </div>
                        ))}
                    </Carousel>
                    <button onClick={closeModal} className="close-button"></button>
                </Modal>
            )}
        </div>
    );
}

export default Portfolio;
