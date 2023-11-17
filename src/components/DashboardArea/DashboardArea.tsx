import React from 'react'
import styles from "./DashboardArea.module.css";

// React Icons
import { IconType } from 'react-icons';

// Charts
import AreaChart from '../Charts/AreaChart';

const DashboardArea = ({Icon, aboutCases, caseCount, chartLabel, bgColor, borderColor}: {Icon: IconType, aboutCases: string, caseCount: number, chartLabel: string, bgColor: string, borderColor: string}) => {
  return (
    <article className={styles.cases__chart}>
      <div className={styles.cases__about}><Icon fontSize={21} color="#686868" /><p>{aboutCases}</p><p>{caseCount}</p></div>
      <div className={styles.area__chart}><AreaChart label={chartLabel} bgColor={bgColor} borderColor={borderColor}/></div>
    </article>
  )
}

export default DashboardArea;