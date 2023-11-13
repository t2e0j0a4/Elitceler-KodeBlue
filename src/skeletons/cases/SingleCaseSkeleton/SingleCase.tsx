import React from "react";
import styles from "./SingleCase.module.css";

const LiveCaseSkeleton = () => {
  return (
    <main className={styles.livecaseSkeleton__main}>
      <section className={styles.livecase__side}>
        <div className={styles.livecase__head}></div>
        <div className={styles.livecase__info}></div>
        <div className={styles.livecase__info}></div>
        <div className={styles.livecase__info}></div>
        <div className={styles.livecase__detail}></div>
        <div className={styles.livecase__moredetails}></div>
      </section>
      <section className={styles.livecase__side}>
        <div className={styles.livecase__head}></div>
        <div className={styles.livecase__info}></div>
        <div className={styles.livecase__info}></div>
        <div className={styles.livecase__info}></div>
        <div className={styles.livecase__detail}></div>
        <div className={styles.livecase__moredetails}></div>
      </section>
    </main>
  );
};

export default LiveCaseSkeleton;
