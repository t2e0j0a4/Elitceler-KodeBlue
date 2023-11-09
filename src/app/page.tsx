import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from "./page.module.css";

const page = () => {

  const { app__portal } = styles;

  return (
    <main className={app__portal}>
      <Image src="/others/Logo.svg" alt='Kode Blue' width={200} height={200}/>
      <Link href="/login">View Web Portal</Link>
      <Image src="/images/Portal.png" alt='Hospital Dashboard' width={720} height={400}/>
    </main>
  )
}

export default page