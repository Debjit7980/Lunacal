import React, { useState } from 'react';
import { GrCircleQuestion } from "react-icons/gr";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import demo from "./../assets/Images/demo.png";

function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState([demo, demo, demo, demo]); // Initial list of images

    const visibleImages = 3; // Number of images visible at a time
    const totalImages = images.length;

    const handleNextClick = () => {
        if (currentIndex < totalImages - visibleImages) {
            setCurrentIndex((prevIndex) => prevIndex + 1); // Move to the next image
        } else {
            setCurrentIndex(0); 
        }
    };

    const handlePrevClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1); // Move to the previous image
        } else {
            setCurrentIndex(totalImages - visibleImages); 
        }
    };

    const handleImageUpload = (e) => {
        const fileList = e.target.files;
        const newImages = Array.from(fileList).map((file) => URL.createObjectURL(file)); 
        setImages((prevImages) => [...prevImages, ...newImages]); 
    };

    return (
        <>
            <div className='widget-container gallery'>
                <div className='gallery-btns'>
                    <span style={{ width: "149px", height: "62px", borderRadius: "20px", background: "black", color: "white", fontSize: "20px", fontFamily: "Poppins", display: "flex", alignItems: "center", justifyContent: "center" }}>Gallery</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
                        <form>
                            <input
                                type="file"
                                name="file"
                                id="file"
                                multiple
                                accept="image/*"
                                onChange={handleImageUpload}
                            />
                            <label htmlFor="file" className='add-btn'><span>+ </span>ADD IMAGE</label>
                        </form>
                        <div className='arrow-btns'>
                            <button onClick={handlePrevClick} disabled={currentIndex === 0}>
                                <FaArrowLeft style={{ color: currentIndex === 0 ? "grey" : "rgba(111, 120, 124, 1)", fontSize: "16px" }} />
                            </button>
                            <button onClick={handleNextClick} disabled={currentIndex >= totalImages - visibleImages}>
                                <FaArrowRight style={{ color: currentIndex >= totalImages - visibleImages ? "grey" : "rgba(111, 120, 124, 1)", fontSize: "16px" }} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Image slider */}
                <div className='image-slider'>
                    <div
                        className='slider-inner'
                        style={{
                            display: 'flex',
                            gap: "20px",
                            transition: 'transform 0.5s ease-in-out',
                            transform: `translateX(${-currentIndex * 210}px)`
                        }}
                    >
                        {images.map((img, index) => (
                            <div key={index} style={{ minWidth: '190px', height: '179px' }}>
                                <img src={img} alt={`img${index}`} style={{ width: "190px", height: "179px", objectFit: "cover" }} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='bulletin'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className='question-mark'>
                    <GrCircleQuestion style={{ width: "24px", height: "24px", color: '#888989' }} />
                </div>
            </div>
            <div className='end-line'></div>
        </>
    );
}

export default Gallery;
