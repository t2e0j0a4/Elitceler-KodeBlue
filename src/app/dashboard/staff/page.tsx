import React, { Suspense } from 'react'
import Link from 'next/link';
import styles from "./page.module.css";

// React Icons
import { MdOutlineAddHome } from "react-icons/md";

// Components
import RegisterStaff from '@/components/RegisterStaff/RegisterStaff';

// Skeletons
import { EachStaffCard } from '@/skeletons/staff/StaffCards';

const page = () => {

    const { app__staff, staff__head, doctor__register, register__all, paramedic__register } = styles;

  return (
    <main className={app__staff}>
      
        <div className={staff__head}>
            <MdOutlineAddHome fontSize={24} color="#484848" />
            <p>Add Staff</p>
        </div>

        <section className={doctor__register}>
            <h2>Doctor Registration</h2>
            <div className={register__all}>
                <Suspense fallback={<EachStaffCard/>}>
                    <RegisterStaff staffRole='Dr' staffName='John Doe' orgName='Nims Hospital' username='john123' emailAddress='johndoe12@mail.com' mobileNumber='9999999999' />
                </Suspense>
                <Suspense fallback={<EachStaffCard/>}>
                    <RegisterStaff staffRole='Dr' staffName='John Doe' orgName='Nims Hospital' username='john123' emailAddress='johndoe12@mail.com' mobileNumber='9999999999' />
                </Suspense>
                <Suspense fallback={<EachStaffCard/>}>
                    <RegisterStaff staffRole='Dr' staffName='John Doe' orgName='Nims Hospital' username='john123' emailAddress='johndoe12@mail.com' mobileNumber='9999999999' />
                </Suspense>
                <Suspense fallback={<EachStaffCard/>}>
                    <RegisterStaff staffRole='Dr' staffName='John Doe' orgName='Nims Hospital' username='john123' emailAddress='johndoe12@mail.com' mobileNumber='9999999999' />
                </Suspense>
            </div>
        </section>

        <section className={paramedic__register}>
            <h2>Paramedic Registration</h2>
            <div className={register__all}>
                <Suspense fallback={<EachStaffCard/>}>
                    <RegisterStaff staffRole='EMT' staffName='John Doe' orgName='Nims Hospital' username='john123' emailAddress='johndoe12@mail.com' mobileNumber='9999999999' />
                </Suspense>
                <Suspense fallback={<EachStaffCard/>}>
                    <RegisterStaff staffRole='EMT' staffName='John Doe' orgName='Nims Hospital' username='john123' emailAddress='johndoe12@mail.com' mobileNumber='9999999999' />
                </Suspense>
                <Suspense fallback={<EachStaffCard/>}>
                    <RegisterStaff staffRole='EMT' staffName='John Doe' orgName='Nims Hospital' username='john123' emailAddress='johndoe12@mail.com' mobileNumber='9999999999' />
                </Suspense>
                <Suspense fallback={<EachStaffCard/>}>
                    <RegisterStaff staffRole='EMT' staffName='John Doe' orgName='Nims Hospital' username='john123' emailAddress='johndoe12@mail.com' mobileNumber='9999999999' />
                </Suspense>
            </div>
        </section>


    </main>
  );
}

export default page