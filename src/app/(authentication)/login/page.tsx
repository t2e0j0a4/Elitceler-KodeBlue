"use client";
import React, { useState } from 'react'
import Link from 'next/link';
import { Metadata } from 'next';
import styles from "./page.module.css";

// Components
import AuthBanner from '@/components/AuthBanner/AuthBanner';
import PasswordInput from '@/components/PasswordInput/PasswordInput';

const Login = () => {
  
  const {app__authentication, app__login, login__main, login__pass, login__submit } = styles;

  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: ''
  })

  const updateLoginInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginDetails({
        ...loginDetails,
        [e.target.name]: e.target.value
    });
}

  return (
    <main className={app__authentication}>
      <AuthBanner/>
      <section className={app__login}>
        <form className={login__main}>
          <h1>Login</h1>
          <input value={loginDetails.email} onChange={(e) => {updateLoginInfo(e)}} name='email' type="text" placeholder='Username' aria-labelledby='Username'/>
          <div className={login__pass}>
            <PasswordInput value={loginDetails.password} handleChange={updateLoginInfo} placeholder='Password' label='Password'/>
            <Link href={"/auth/forgotpassword"}>Forgot Password?</Link>
          </div>
          <div className={login__submit}>
            {/* <button type='submit'>Login</button> */}
            <Link href={"/dashboard"}>Login</Link>
            <p>New to Kode Blue? <Link href={"/register"}>Register.</Link></p>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Login