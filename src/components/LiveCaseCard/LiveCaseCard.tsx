import React from 'react'
import Link from 'next/link';
import styles from "./LiveCaseCard.module.css";

// Types
import { LiveCaseTypes } from '@/types';

const LiveCaseCard = ({caseID, age, caseType, paymentType, gender}: LiveCaseTypes) => {

    const {livecase__card, card__head, card__body} = styles;

    return (
        <article className={livecase__card}>
            <div className={card__head}>
                <p>Case ID</p>
                <Link href={`/dashboard/livecases/${caseID}`}>View Case</Link>
            </div>
            <div className={card__body}>
                <CardBodyDetail name='Gender' value={gender} bgColor=""/>
                <CardBodyDetail name='Age' value={age} bgColor=""/>
                <CardBodyDetail name='Case Type' value={caseType} bgColor=""/>
                <CardBodyDetail name='Payment Mode' value={paymentType} bgColor=""/>
            </div>
        </article>
    )
}

export const CardBodyDetail = ({name, value, bgColor}: {name: string, value: string | number, bgColor: "" | "#FFF"}) => {
    return (
        <div className={styles.body__detail} style={{backgroundColor: bgColor}} >
            <p>{name}</p>
            <span></span>
            <p>{value}</p>
        </div>  
    )
}

export default LiveCaseCard