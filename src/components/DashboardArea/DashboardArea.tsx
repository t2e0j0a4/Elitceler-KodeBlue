import React from 'react'
import styles from "./DashboardArea.module.css";

// Charts
import AreaChart from '../Charts/AreaChart';

// Types
import { AreaChartsDataProps } from '@/types';

const DashboardArea = ({Icon, aboutCases, caseCount, chartLabel, bgColor, borderColor}: AreaChartsDataProps) => {
  return (
    <article className={styles.cases__chart}>
      <div className={styles.cases__about}><Icon fontSize={21} color="#686868" /><p>{aboutCases}</p><p>{caseCount}</p></div>
      <div className={styles.area__chart}><AreaChart label={chartLabel} bgColor={bgColor} borderColor={borderColor}/></div>
    </article>
  )
}

export default DashboardArea;