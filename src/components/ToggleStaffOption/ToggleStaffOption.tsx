"use client";
import React from 'react'
import styles from "./ToggleStaffOption.module.css";

const ToggleStaffOption = () => {

    const { staff__toggle } = styles;

    return (
        <div className={staff__toggle}>
            <button type='button'>Doctors</button>
            <button type='button'>Paramedics</button>
        </div>
    )
}

export default ToggleStaffOption;