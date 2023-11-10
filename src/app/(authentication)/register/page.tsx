import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

// Components
import PasswordInput from "@/components/PasswordInput/PasswordInput";

const page = () => {
  const { app__register, register__main, register__pass, register__submit } = styles;

  return (
    <section className={app__register}>
      <form className={register__main}>
        <h1>Register</h1>
        <input type="text" placeholder="Hospital Name" aria-labelledby="Hospital Name" />
        <input type="text" placeholder="Hospital ID" aria-labelledby="Hospital ID" />
        <input type="email" placeholder="Email Address" aria-labelledby="Email Address" />
        <input type="text" placeholder="Username" aria-labelledby="Username" />
        <PasswordInput placeholder="Password" label="Password" />
        <PasswordInput placeholder="Confirm Password" label="Confirm Password" />
        <div className={register__submit}>
          <button type="submit">Register</button>
          <p>Have a Kode Blue Account? <Link href={"/login"}>Login.</Link></p>
        </div>
      </form>
    </section>
  );
};

export default page;
