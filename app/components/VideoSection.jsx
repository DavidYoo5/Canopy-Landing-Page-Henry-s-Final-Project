"use client";

import { useRef } from "react";
import styles from "../page.module.css";

export default function VideoSection() {
  const videoRef = useRef(null);

  return (
    <div className={styles.videoInner}>
      <div>
        <h2 className={styles.headingCarousel}>Watch Canopy</h2>
        <p className={styles.carouselDescription}>
          <em>Explore the experience through our interactive promo video.</em>
        </p>
      </div>

      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          className={styles.landingVideo}
          playsInline
          controls
        >
          <source src="/Promovideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
