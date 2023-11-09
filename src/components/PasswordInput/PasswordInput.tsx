'use client';
import React, { useState } from 'react'
import styles from "./PasswordInput.module.css";

// React Icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const PasswordInput = ({placeholder, label}: {placeholder: string, label: string}) => {

    const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className={styles.password__group}>
        <input type={showPassword ? "text" : "password"} placeholder={placeholder} aria-labelledby={label} />
        <button type='button' title={showPassword ? 'Hide' : 'Show'} onClick={() => {setShowPassword(!showPassword)}}>
            {
                showPassword ? 
                <AiOutlineEyeInvisible fontSize={21} color="#686868"/> :
                <AiOutlineEye fontSize={21} color="#686868"/>
            }
        </button>
    </div>
  )
}

export default PasswordInput