import React from 'react'
import styles from "./page.module.css";

// Components
import Sidebar from '@/components/Sidebar/Sidebar'

const layout = ({children}: {children: React.ReactNode}) => {

  const { dashboard__layout } = styles;

  return (
    <main className={dashboard__layout}>
      <Sidebar/>
      {children}
    </main>
  )
}

export default layout