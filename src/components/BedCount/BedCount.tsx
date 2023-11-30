import React from 'react'
import styles from "./BedCount.module.css";

// React Icons
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const BedCount = ({bedsFor, bedsCount}: {bedsFor: string, bedsCount: number}) => {

    return (
        <div className={styles.beds__count}>
            <h3>{bedsFor}</h3>
            <div>
                <button type='button' title='low' aria-label='Low'><AiOutlineMinus fontSize={21} aria-hidden/></button>
                <p>{bedsCount}</p>
                <button type='button' title='high' aria-label='High'><AiOutlinePlus fontSize={21} aria-hidden/></button>
            </div>
        </div>
    )
}

export default BedCount