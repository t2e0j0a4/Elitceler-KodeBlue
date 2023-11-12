import React from 'react'
import styles from './page.module.css';

const page = ({params}: {params: { case: string }}) => {

    const { current__case } = styles;

    return (
        <main className={current__case}>
            Current Case ID : {params.case}
        </main>
    )
}

export default page