import Link from 'next/link';
import React, { Suspense } from 'react'
import styles from "./page.module.css";

// React Icons
import { LuStethoscope } from "react-icons/lu";

// Skeleton
import { EachStaffCard } from '@/skeletons/staff/StaffCards';

// Components
import { DeRegisterStaff } from '@/components/RegisterStaff/RegisterStaff';
import ToggleStaffOption from '@/components/ToggleStaffOption/ToggleStaffOption';

const page = ({searchParams}: {searchParams: {staffType: string}}) => {

    const { hospital__staff, staff__head, staff__deregister } = styles;

    return (
        <main className={hospital__staff}>
            
            <div className={staff__head}>
                <LuStethoscope fontSize={20} color="#484848" />
                <p>Hospital Staff</p>
            </div>

            <ToggleStaffOption/>

            <section className={staff__deregister}>
                {
                    searchParams.staffType === 'doctors' ? (
                        <>
                            <Suspense fallback={<EachStaffCard/>}>
                                <DeRegisterStaff staffRole='Dr' staffName='John Doe' orgName='Nims Hospital' username='john123' emailAddress='johndoe12@mail.com' mobileNumber='9999999999' />
                            </Suspense>
                            <Suspense fallback={<EachStaffCard/>}>
                                <DeRegisterStaff staffRole='Dr' staffName='John Doe' orgName='Nims Hospital' username='john123' emailAddress='johndoe12@mail.com' mobileNumber='9999999999' />
                            </Suspense>
                            <Suspense fallback={<EachStaffCard/>}>
                                <DeRegisterStaff staffRole='Dr' staffName='John Doe' orgName='Nims Hospital' username='john123' emailAddress='johndoe12@mail.com' mobileNumber='9999999999' />
                            </Suspense>
                        </>
                    ) : (
                        <>
                            <Suspense fallback={<EachStaffCard/>}>
                                <DeRegisterStaff staffRole='EMT' staffName='John Doe' orgName='Nims Hospital' username='john123' emailAddress='johndoe12@mail.com' mobileNumber='9999999999' />
                            </Suspense>
                            <Suspense fallback={<EachStaffCard/>}>
                                <DeRegisterStaff staffRole='EMT' staffName='John Doe' orgName='Nims Hospital' username='john123' emailAddress='johndoe12@mail.com' mobileNumber='9999999999' />
                            </Suspense>
                            <Suspense fallback={<EachStaffCard/>}>
                                <DeRegisterStaff staffRole='EMT' staffName='John Doe' orgName='Nims Hospital' username='john123' emailAddress='johndoe12@mail.com' mobileNumber='9999999999' />
                            </Suspense>
                        </>
                    )
                }
            </section>

        </main>
    )
}

export default page