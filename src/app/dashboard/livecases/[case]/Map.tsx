import React from 'react'
import styles from "./page.module.css";

const Map = () => {
  return (
    <div className={styles.paramedic__map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7754031622476!2d78.45028360915332!3d17.422562901725005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91cb1dc49e8f%3A0xbab6cb3473be057d!2sNims%20Hospital!5e0!3m2!1sen!2sin!4v1700117291954!5m2!1sen!2sin" style={{border: "0", width: '100%', height: 'auto', aspectRatio: '16/9', borderRadius: '12px' }} allowFullScreen loading="lazy"></iframe>
    </div>
  )
}

export default Map