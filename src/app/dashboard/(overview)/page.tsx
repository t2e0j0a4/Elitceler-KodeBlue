import React from 'react'
import styles from "../page.module.css";

// React Icons
import { MdDone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BsBagPlus } from "react-icons/bs";
import { FaHandPaper } from "react-icons/fa";
import { CiStethoscope } from "react-icons/ci";
import { LiaAmbulanceSolid } from "react-icons/lia";

// Components
import RefreshHint from './RefreshHint';
import DashboardBar from '@/components/DashboardBar/DashboardBar';
import DashboardArea from '@/components/DashboardArea/DashboardArea';
import BedCount from '@/components/BedCount/BedCount';

const page = () => {

  const { app__dashboard, dashboard__head, dashboard__main, dashboard__areas, area__charts, bed__count, dashboard__bars } = styles;

  return (
    <main className={app__dashboard}>

      <div className={dashboard__head}>
        <p>Hello, Hospital Name 👋</p>
        <RefreshHint/>
      </div>

      <main className={dashboard__main}>

        <section className={dashboard__areas}>
          <DashboardArea Icon={BsBagPlus} aboutCases='Total Case Requests' caseCount={400} chartLabel='Requests' bgColor='rgba(0, 203, 252, 0.30)' borderColor='#00CBFC' />
          <DashboardArea Icon={LiaAmbulanceSolid} aboutCases='Registered Paramedics' caseCount={100} chartLabel='Paramedics' bgColor='rgba(255, 137, 125, 0.30)' borderColor='#FF897D' />
          <DashboardArea Icon={FaHandPaper} aboutCases='Cases Handled Till Date' caseCount={200} chartLabel='Cases' bgColor='rgba(0, 60, 173, 0.30)' borderColor='#003CAD' />
          <DashboardArea Icon={CiStethoscope} aboutCases='Registered Doctors' caseCount={50} chartLabel='Doctors' bgColor='rgba(142, 167, 255, 0.30)' borderColor='#8EA7FF' />
          {/* <div className={bed__count}>
            <BedCount bedsFor='Total' bedsCount={48}/>
            <BedCount bedsFor='Used' bedsCount={24}/>
          </div> */}
        </section>

        <section className={dashboard__bars}>
          <DashboardBar Icon={MdDone} aboutCases='Total number of cases Accepted' caseCount={400} chartLabel='Accepted Cases' chartColor='#14A84E' />
          <DashboardBar Icon={IoMdClose} aboutCases='Total number of cases Rejected' caseCount={100} chartLabel='Rejected Cases' chartColor='#BA1A1A' />
        </section>

      </main>

    </main>
  )
}

export default page;