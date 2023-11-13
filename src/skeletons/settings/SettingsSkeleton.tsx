import React from 'react'
import styles from "./SettingsSkeleton.module.css";

const SingleSettingSkeleton = () => {
  return (
    <div className={styles.setting__skeleton}>
      <p className={styles.setting__title}></p>
      <div className={styles.setting__item}></div>
      <div className={styles.setting__item}></div>
      <div className={styles.setting__item}></div>
    </div>
  )
}

const SettingsSkeleton = () => {
  return (
    <main className={styles.settingSkeleton__main}>
      <SingleSettingSkeleton />
      <SingleSettingSkeleton />
      <SingleSettingSkeleton />
    </main>
  )
}

export default SettingsSkeleton;