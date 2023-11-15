import React from 'react'
import styles from "./page.module.css";

const Map = () => {
  return (
    <div className={styles.paramedic__map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11525.121488972181!2d78.96643550875214!3d16.010959768447595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb48c1241adb0e3%3A0x5c8ac521fa9f1f8c!2sNallamala%20Forest!5e1!3m2!1sen!2sin!4v1699970937012!5m2!1sen!2sin" style={{border: "0", width: '100%', height: 'auto', aspectRatio: '16/9', borderRadius: '12px' }} allowFullScreen loading="lazy"></iframe>
    </div>
  )
}

export default Map