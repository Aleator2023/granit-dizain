// src/components/VideoGallery.js
import React from 'react';
import '../styles/VideoGallery.css';

const videos = [
  require('../assets/video/video1.MP4'),
  require('../assets/video/video2.MP4'),
  require('../assets/video/video3.MP4'),
  require('../assets/video/video4.mp4'),
];

const VideoGallery = () => {
  return (
    <section className="video-gallery">
      {videos.map((src, idx) => (
        <video
          key={idx}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="video-item"
        />
      ))}
    </section>
  );
};

export default VideoGallery;