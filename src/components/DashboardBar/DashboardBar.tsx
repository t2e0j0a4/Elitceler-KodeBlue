import React from 'react'
import styles from "./DashboardBar.module.css";

// React Icons
import { IconType } from 'react-icons';

// Charts
import BarChart from '../Charts/BarChart';

const DashboardBar = ({Icon, aboutCases, caseCount, chartLabel, chartColor}: {Icon: IconType, aboutCases: string, caseCount: number, chartLabel: string, chartColor: string}) => {
  return (
    <article className={styles.cases__chart}>
      <div className={styles.cases__about}><Icon fontSize={24} color="#686868" /><p>{caseCount}</p><p>{aboutCases}</p></div>
      <div className={styles.bar__chart}><BarChart label={chartLabel} bgColor={chartColor} /></div>
    </article>
  )
}

export default DashboardBar