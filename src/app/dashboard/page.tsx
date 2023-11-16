import React from 'react'
import styles from "./page.module.css";

const page = () => {

  const { app__dashboard, dashboard__head } = styles;

  return (
    <main className={app__dashboard}>

      <div className={dashboard__head}>
        <p>Hello, Hospital Name 👋</p>
      </div>

    </main>
  )
}

export default page