"use client";

import { useRef, useState } from "react";
import styles from "../page.module.css";

export default function VideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    const video = videoRef.current;

    if (video.paused || video.ended) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className={styles.videoContainer} onClick={handleVideoClick}>
      <video
        ref={videoRef}
        className={styles.landingVideo}
        onEnded={handleVideoEnded}
        playsInline
      
      >
        <source src="/Promovideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}