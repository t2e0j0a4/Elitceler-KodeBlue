"use client";
import React from 'react'
import styles from "./RegisterStaff.module.css";

// Types
import { StaffDetailType } from '@/types';

const RegisterStaff = (details : StaffDetailType ) => {
  return (
    <article className={styles.register__card}>
        <StaffDetails {...details} />
        <div className={styles.can__register}>
            <button type='button' onClick={() => {console.log('Accepted')}}>Accept</button>
            <button type='button' onClick={() => {console.log('Rejected')}}>Reject</button>
        </div>
    </article>
  )
}

export default RegisterStaff;

export const DeRegisterStaff = (details: StaffDetailType) => {
    return (
        <article className={styles.register__card}>
            <StaffDetails {...details} />
            <div className={styles.can__register}>
                <button type='button' onClick={() => {console.log('Removed')}}>Remove</button>
            </div>
        </article>
    )
}

export const StaffDetails = ({staffRole, staffName, orgName, mobileNumber, emailAddress, username}: StaffDetailType) => {

    return (
        <div className={styles.staff__details}>
            
            <div className={styles.details__head}>
                <p>{staffRole}</p>
                <p>{staffName}</p>
            </div>

            <div className={styles.details}><p>Hospital</p><p>{orgName}</p></div>
            <div className={styles.details}><p>Username</p><p>{username}</p></div>
            <div className={styles.details}><p>Mobile Number</p><p>{mobileNumber}</p></div>
            <div className={styles.details}><p>Email Address</p><p>{emailAddress}</p></div>

        </div>
    )
}