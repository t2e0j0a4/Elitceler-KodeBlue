import React from 'react'
import styles from "./page.module.css";
import PasswordInput from '@/components/PasswordInput/PasswordInput';
import Link from 'next/link';

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
          <button type='submit'>Login</button>
          <p>New to Kode Blue? <Link href={"/register"}>Register.</Link></p>
        </div>
      </form>
    </section>
  )
}

export default page