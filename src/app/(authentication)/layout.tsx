import React from 'react'
import styles from "./layout.module.css";

// Components
import AuthBanner from '@/components/AuthBanner/AuthBanner';

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className={styles.app__authentication}>
        <AuthBanner/>
        {children}
    </main>
  )
}

export default layout