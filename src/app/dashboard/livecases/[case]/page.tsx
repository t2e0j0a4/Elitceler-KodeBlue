import React from 'react'
import styles from './page.module.css';

import LiveCaseSkeleton from '@/skeletons/cases/SingleCaseSkeleton/SingleCase';

const page = ({params}: {params: { case: string }}) => {

    const { current__case } = styles;

    return (
        <main className={current__case}>
            
        </main>
    )
}

export default page