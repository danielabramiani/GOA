// src/components/Gallery.js
import React from 'react';

const Gallery = () => {
    return (
        <section className="gallery section">
            <div className="gallery__container container grid">
                <video className="video__slide active" src="assets/video/vid_1.mp4" autoplay muted loop></video>
                <video className="video__slide" src="assets/video/vid_4.mp4" autoplay muted loop></video>
                <video className="video__slide" src="assets/video/vid_3.mp4" autoplay muted loop></video>
                <video className="video__slide" src="assets/video/vid_2.mp4" autoplay muted loop></video>
                <video className="video__slide" src="assets/video/vid_5.mp4" autoplay muted loop></video>
            </div>
        </section>
    );
};

export default Gallery;
