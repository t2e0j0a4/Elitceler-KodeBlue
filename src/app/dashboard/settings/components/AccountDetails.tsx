"use client";
import React from 'react'
import styles from "../page.module.css";
import EachDetailsInput from './EachDetailInput'

const AccountDetails = () => {

    return (
        <form className={styles.account__details}>
            <h3>Account Details</h3>
            <div className={styles.details__main}>
                <EachDetailsInput label='Username' placeholder='Username' />
                <EachDetailsInput label='Hospital Name' placeholder='Hospital Name' />
                <EachDetailsInput label='Hospital ID' placeholder='Hospital ID' />
                <EachDetailsInput inputType='email' label='Email Address' placeholder='Email Address' />
            </div>
            <button type='submit'>Update Details</button>
        </form>
    )
}

export default AccountDetails