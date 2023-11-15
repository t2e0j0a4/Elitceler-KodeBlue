import React from 'react'
import Link from 'next/link';
import { Metadata } from 'next';
import styles from "./page.module.css";

// Components
import PasswordInput from '@/components/PasswordInput/PasswordInput';

export const metadata: Metadata = {
  title: 'Login | Kode Blue Technologies',
  description: 'Login page of Kode Blue Technologies for Hospital Managements.'
}

const page = () => {
  
  const { app__login, login__main, login__pass, login__submit } = styles;

  return (
    <section className={app__login}>
      <form className={login__main}>
        <h1>Login</h1>
        <input type="text" placeholder='Username' aria-labelledby='Username'/>
        <div className={login__pass}>
          <PasswordInput placeholder='Password' label='Password'/>
          <Link href={"/auth/forgotpassword"}>Forgot Password?</Link>
        </div>
        <div className={login__submit}>
          {/* <button type='submit'>Login</button> */}
          <Link href={"/dashboard"}>Login</Link>
          <p>New to Kode Blue? <Link href={"/register"}>Register.</Link></p>
        </div>
      </form>
    </section>
  )
}

export default page