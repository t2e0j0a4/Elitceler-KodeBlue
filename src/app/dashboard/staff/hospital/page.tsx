import Link from 'next/link';
import React, { Suspense } from 'react'
import styles from "./page.module.css";

// React Icons
import { IoArrowBackOutline } from "react-icons/io5";

// Skeleton
import { EachStaffCard } from '@/skeletons/staff/StaffCards';

// Components
import { DeRegisterStaff } from '@/components/RegisterStaff/RegisterStaff';

const page = () => {

    const { hospital__staff, staff__head, staff__deregister } = styles;

    return (
        <main className={hospital__staff}>
            
            <div className={staff__head}>
                <Link href={"/dashboard/staff"} title="Staff"><IoArrowBackOutline fontSize={20} fontWeight={500} aria-hidden/></Link>
                <p>Hospital Staff</p>
            </div>

            <section className={staff__deregister}>
                <Suspense fallback={<EachStaffCard/>}>
                    <DeRegisterStaff staffRole='Dr' staffName='John Doe' orgName='Nims Hospital' username='john123' emailAddress='johndoe12@mail.com' mobileNumber='9999999999' />
                </Suspense>
                <Suspense fallback={<EachStaffCard/>}>
                    <DeRegisterStaff staffRole='Dr' staffName='John Doe' orgName='Nims Hospital' username='john123' emailAddress='johndoe12@mail.com' mobileNumber='9999999999' />
                </Suspense>
                <Suspense fallback={<EachStaffCard/>}>
                    <DeRegisterStaff staffRole='EMT' staffName='John Doe' orgName='Nims Hospital' username='john123' emailAddress='johndoe12@mail.com' mobileNumber='9999999999' />
                </Suspense>
                <Suspense fallback={<EachStaffCard/>}>
                    <DeRegisterStaff staffRole='EMT' staffName='John Doe' orgName='Nims Hospital' username='john123' emailAddress='johndoe12@mail.com' mobileNumber='9999999999' />
                </Suspense>
            </section>

        </main>
    )
}

export default page