'use client';
import React, { use, useState } from 'react'
import styles from "./PasswordInput.module.css";

// React Icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { checkPasswordValidity } from '@/utils/CheckPassword';

const PasswordInput = ({placeholder, label}: {placeholder: string, label: string}) => {

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [showPassError, setShowPassError] = useState<boolean>(true);
  const isPasswordValid = (pass: string) => {
    console.log(checkPasswordValidity(pass));
    setShowPassError(checkPasswordValidity(pass));
  }

  return (
    <div className={styles.pass__withhelper}>
      <div className={styles.password__group}>
          <input type={showPassword ? "text" : "password"} placeholder={placeholder} aria-labelledby={label} onChange={(e) => {
            isPasswordValid(e.target.value);
          }} />
          <button type='button' title={showPassword ? 'Hide' : 'Show'} onClick={() => {setShowPassword(!showPassword)}}>
              {
                showPassword ? 
                <AiOutlineEyeInvisible fontSize={21}/> :
                <AiOutlineEye fontSize={21}/>
              }
          </button>
      </div>
      {
        showPassError || <p className={styles.show__helpertext}>
          Password should 6-24 characters long, A uppercase, A lowercase, A digit, A special character.
        </p>
      }
    </div>
  )
}

export default PasswordInput