import React from "react";
import styles from "./StaffCards.module.css";

export const EachStaffCard = () => {
  return (
    <div className={styles.staffcard__skeleton}>
      <p className={styles.staffcard__title}></p>
      <div className={styles.staffcard__item}></div>
      <div className={styles.staffcard__item}></div>
      <div className={styles.staffcard__item}></div>
    </div>
  );
};

const StaffCards = () => {
  return (
    <main className={styles.staffcardSkeleton__main}>
        <EachStaffCard/>
        <EachStaffCard/>
        <EachStaffCard/>
        <EachStaffCard/>
    </main>
  );
};

export default StaffCards;
