import React, { Suspense } from 'react'
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './page.module.css';

// React Icons
import { IconType } from 'react-icons';
import { CiLocationOn } from "react-icons/ci";
import { CgBoy, CgGirl } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { FaTemperatureHalf } from "react-icons/fa6";
import { IoIosPulse, IoMdEye } from "react-icons/io";
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaStarOfLife, FaHandPaper } from "react-icons/fa";
import { MdCall, MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { MdDocumentScanner, MdSpatialAudioOff } from "react-icons/md";
import { CardBodyDetail } from '@/components/LiveCaseCard/LiveCaseCard';
import { BsChatLeftText, BsHeartPulse, BsArrowDownShort, BsArrowUpShort, BsDropletHalf } from "react-icons/bs";

// Skeletons
import MapLoadSkeleton from '@/skeletons/cases/MapLoadSkeleton/MapLoadSkeleton';

// Updated as a Dynamic Metadata if needed later, but as of now just a static Metadata
export const metadata: Metadata = {
  title: "Case ID : abc123 | Live Cases",
  description: "Current Case with a Case ID of abc123 Assignment",
};

const page = ({params}: {params: { case: string }}) => {

    const { current__case, case__head, head__side, head__talk, case__breadcrumb, livecase__main, general__info, patient__info, info__head, info__caseId, patient__case, general__title, case__details, patient__vitals, vitals__details, other__info, paramedic__loc, paramedic__map, health__info, healthInfo__main } = styles;

    return (
        <main className={current__case}>

            <div className={case__head}>
                <div className={head__side}>
                    <FaStarOfLife fontSize={21} color={'#232323'}/>
                    <p>Live Cases</p>
                </div>
                <div className={head__talk}>
                    <HeadButton label='Call' bgColor='#215FF2' Icon={MdCall} /> 
                    <HeadButton label='Chat' bgColor='#215FF2' Icon={BsChatLeftText} /> 
                    <HeadButton label='Documents' bgColor='#00CBFC' Icon={MdDocumentScanner} /> 
                    <HeadButton label='Assign' bgColor='#3CC35E' Icon={MdOutlineAssignmentTurnedIn} /> 
                </div>
                {/* Later on Adding Popup Box Detail for Each of above Contact Options. */}
            </div>

            <div className={case__breadcrumb}>
                <Link href={"/dashboard/livecases"}>Cases</Link>
                <p>Case &#40;{params.case}&#41;</p>
            </div>

            <main className={livecase__main}>

                <section className={general__info}>

                    <section className={patient__info}>
                        <div role='heading' aria-level={1} className={info__head}><CgBoy fontSize={24} color="#686868" /><p>John Doe</p></div>
                        <div className={info__caseId}><p>Case ID</p><p>{params.case}</p></div>
                    </section>

                    <section className={patient__case}>
                        <div role='heading' aria-level={2} className={general__title}><BiSolidUserRectangle fontSize={18} color="#215FFA"/><p>General Information</p></div>
                        <div className={case__details}>
                            <CardBodyDetail name='Age' value={24} />
                            <CardBodyDetail name='Gender' value='Male' />
                            <CardBodyDetail name='Case Type' value='Heart Stroke' />
                        </div>
                        <p>3.2km away. It will take 9 minutes 44 seconds to reach here.</p>
                    </section>

                    <section className={patient__vitals}>
                        <div role='heading' aria-level={2} className={general__title}><BsHeartPulse fontSize={18} color="red"/><p>Vital Information</p></div>
                        <div className={vitals__details}>
                            <VitalInfoCard label='Blood Pressure' HeadIcon={BsArrowUpShort} VitalIcon={AiOutlineHeart} vitalInfo='180/120' infoOutput='Hypertensive Crisis' bgColor='#AD2E24' />
                            <VitalInfoCard label='Heart Rate' HeadIcon={BsArrowDownShort} VitalIcon={IoIosPulse} vitalInfo='80 BPM' infoOutput='Normal' bgColor='#41CB68' />
                            <VitalInfoCard label='SPO2' HeadIcon={BsArrowUpShort} VitalIcon={BsDropletHalf} vitalInfo='96%' infoOutput='Insufficient' bgColor='#FADA33' />
                            <VitalInfoCard label='Temperature' HeadIcon={BsArrowDownShort} VitalIcon={FaTemperatureHalf} vitalInfo='100.2F' infoOutput='High Temperature' bgColor='#F1182B' />
                        </div>
                    </section>

                </section>

                <section className={other__info}>
                    
                    <section className={paramedic__loc}>
                        <div role='heading' aria-level={2} className={general__title}><CiLocationOn fontSize={18} color="#215FFA"/><p>Paramedic Location</p></div>
                        <Suspense fallback={<MapLoadSkeleton/>}>
                            <div className={paramedic__map}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11525.121488972181!2d78.96643550875214!3d16.010959768447595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb48c1241adb0e3%3A0x5c8ac521fa9f1f8c!2sNallamala%20Forest!5e1!3m2!1sen!2sin!4v1699970937012!5m2!1sen!2sin" style={{border: "0", width: '100%', height: 'auto', aspectRatio: '16/10', borderRadius: '12px' }} allowFullScreen loading="lazy"></iframe>
                            </div>
                        </Suspense>
                    </section>

                    <section className={health__info}>

                        <GlucoMeter glucoScore={14} verdict='Healthy' />

                        <div className={healthInfo__main}>
                            <HealthDetailCard Icon={IoMdEye} iconColor='#65478F' label='Eye Response' count={2} countFor='Pressure'/>
                            <HealthDetailCard Icon={MdSpatialAudioOff} iconColor='#30b7f5' label='Verbal Response' count={4} countFor='Confused'/>
                            <HealthDetailCard Icon={FaHandPaper} iconColor='#a05efd' label='Motor Response' count={1} countFor='Confused'/>
                        </div>

                    </section>

                </section>

            </main>

        </main>
    )
}

export default page;

const HeadButton = ({bgColor, label, Icon}: { bgColor: string, label: string, Icon: IconType}) => {
    return (
        <button title={label} style={{ backgroundColor: bgColor }} type='button'>
            <Icon fontSize={17}/>
            <p>{label}</p>
        </button>
    )
}

const VitalInfoCard = ({label, HeadIcon, VitalIcon, vitalInfo, infoOutput, bgColor}: {label: string, HeadIcon: IconType, vitalInfo: string, VitalIcon: IconType, infoOutput: string, bgColor: string}) => {
    return (
        <article className={styles.vitals__info}>
            <div className={styles.vitalsInfo__head}>
                <p>{label}</p>
                <HeadIcon fontSize={21}/>
            </div>
            <div className={styles.vitalsInfo__details}>
                <VitalIcon fontSize={20} />
                <p>{vitalInfo}</p>
            </div>
            <p style={{ backgroundColor: bgColor}} >{infoOutput}</p>
        </article>
    )
}

const HealthDetailCard = ({Icon, iconColor, label, count, countFor}: {Icon: IconType, iconColor: string, label: string, count: number, countFor: string }) => {
    return (
        <div className={styles.healthInfo__card}>
            <Icon fontSize={21} color={iconColor} />
            <p>{label}</p>
            <div className={styles.healthInfo__detail}>
                <p>{count}</p>
                <p>{countFor}</p>
            </div>
        </div>
    )
}

const GlucoMeter = ({glucoScore, verdict}: {glucoScore: number, verdict: string}) => {
    return (
        <div className={styles.gluco__meter}>
            <p>Glasgow Coma Score (GCS)</p>
            <div className={styles.glucoBar__box}>
                <p style={{ color: `${glucoScore < 8 ? 'rgb(247, 65, 65)' : glucoScore < 11 ? 'rgb(250, 250, 56)' : 'rgb(78, 245, 78)'}` }}>{glucoScore < 10 ? `0${glucoScore}` : glucoScore}</p>
                <span style={{ backgroundColor: `${glucoScore < 8 ? 'rgb(247, 65, 65)' : glucoScore < 11 ? 'rgb(250, 250, 56)' : 'rgb(78, 245, 78)'}` }}>{verdict}</span>
            </div>
        </div>
    )
}