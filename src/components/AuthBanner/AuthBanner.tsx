import React from 'react'
import styles from "./AuthBanner.module.css";
import Image from 'next/image';

const AuthBanner = () => {
  return (
    <section className={styles.auth__banner}>
        <Image src="/others/Logo.svg" alt='Kode Blue' width={200} height={200} />
        <Image src="/images/Portal.svg" alt='Hospital Portal' width={720} height={450} />
    </section>
  )
}

export default AuthBanner