import React from 'react'
import styles from "./page.module.css";

const page = () => {

  const { app__dashboard } = styles;

  return (
    <main className={app__dashboard}>Dashboard</main>
  )
}

export default page