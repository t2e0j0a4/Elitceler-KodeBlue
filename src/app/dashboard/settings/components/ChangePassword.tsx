"use client";
import React from 'react'
import styles from "../page.module.css";

// Components
import PasswordInput from '@/components/PasswordInput/PasswordInput';

const ChangePassword = () => {
  return (
    <form className={styles.change__password}>
        <h3>Change Your Password</h3>
        <PasswordInput placeholder='Current Password' label='Current Password' />
        <PasswordInput placeholder='New Password' label='New Password' />
        <PasswordInput placeholder='Re-enter New Password' label='Re-enter New Password' />
        <button type='submit'>Update Password</button>
    </form>
  )
}

export default ChangePassword