import React, { useState, useRef, useEffect } from 'react';
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
        related: [
            "placeholder1.jpeg",
            "placeholder2.jpeg",
            "placeholder3.jpeg"
        ]
    },
    {
        title: "Can Casas",
        description: "Cans as usable home for Cacti",
        images: ["/cans-cactus.png"],
        related: [
            "placeholder1.jpeg",
            "placeholder2.jpeg",
            "placeholder3.jpeg"
        ]
    },
    {
        title: "Frontyard Steps",
        description: "Flat stone curving around front yard",
        images: ["/front-yard-landscaping.jpeg"],
        related: [
            "placeholder1.jpeg",
            "placeholder2.jpeg",
            "placeholder3.jpeg"
        ]
    },
    {
        title: "Xeriscape In back yard",
        description: "Gravel with cactus in residential back yard",
        images: ["/xeriscape-cactus-yard.jpeg"],
        related: [
            "placeholder1.jpeg",
            "placeholder2.jpeg",
            "placeholder3.jpeg"
        ]
    },
];

function Portfolio() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalImages, setModalImages] = useState([]);
    const [showHoverMessage, setShowHoverMessage] = useState(false);
    const [hoveredOnce, setHoveredOnce] = useState(false);
    const carouselRef = useRef(null);

    const openModal = (item, images) => {
        setSelectedItem(item);
        setModalImages(images);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedItem(null);
        setModalImages([]);
    };

    useEffect(() => {
        if (modalIsOpen && carouselRef.current) {
            carouselRef.current.focus();
        }
    }, [modalIsOpen]);

    const handleHover = () => {
        if (!hoveredOnce) {
            setShowHoverMessage(true);
            setHoveredOnce(true);
            setTimeout(() => setShowHoverMessage(false), 4000); // Hide message after 4 seconds
        }
    };

    return (
        <div className="portfolio-container">
            <h1>Portfolio</h1>
            <div className="portfolio-gallery">
                {portfolioItems.map((item, index) => (
                    <div
                        key={index}
                        className="portfolio-item"
                        onMouseEnter={handleHover}
                        onClick={() => openModal(item, item.related)}
                    >
                        <img
                            src={item.images[0]}
                            alt={`Portfolio Item ${index + 1}`}
                        />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            {selectedItem && (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className="modal"
                    overlayClassName="overlay"
                >
                    <h2>{selectedItem.title}</h2>
                    <Carousel
                        ref={carouselRef}
                        showThumbs={false}
                        showStatus={false}
                        useKeyboardArrows
                        infiniteLoop
                    >
                        {modalImages.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Image ${index + 1}`} />
                            </div>
                        ))}
                    </Carousel>
                    <button onClick={closeModal} className="close-button"></button>
                </Modal>
            )}
            {showHoverMessage && (
                <div className="hover-message font">
                    Click on an item to see more images
                </div>
            )}
        </div>
    );
}

export default Portfolio;
