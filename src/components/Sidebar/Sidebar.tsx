'use client';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from "./Sidebar.module.css";
import { usePathname } from 'next/navigation';

// React Icons
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FaStarOfLife } from "react-icons/fa";
import { LuStethoscope } from "react-icons/lu";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineAddHome } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";

const Sidebar = () => {

    const pathname = usePathname();
    const { dashboard__sidebar, sidebar__top, sidebar__nav, page__active, sidebar__bottom, sidebar__profile } = styles;

    return (
        <aside className={dashboard__sidebar}>
            <div className={sidebar__top}>
                <Link href={"/"}><Image quality={65} priority={false} src="/others/DashboardLogo.svg" alt='Kode Blue' width={200} height={56}/></Link>
                <ul className={sidebar__nav}>
                    <li><Link href={"/dashboard"} className={`${pathname === '/dashboard' && page__active}`} ><LuLayoutDashboard fontSize={20}/><span>Dashboard</span></Link></li>
                    <li><Link href={"/dashboard/livecases"} className={`${pathname.includes('/dashboard/livecases') && page__active}`} ><FaStarOfLife fontSize={20}/><span>Live Cases</span></Link></li>
                    <li><Link href={"/dashboard/staff"} className={`${(pathname.includes('/dashboard/staff') && !(pathname.includes('/staff/hospital'))) && page__active}`} ><MdOutlineAddHome fontSize={22}/><span>Staff</span></Link></li>
                    <li><Link href={"/dashboard/staff/hospital"} className={`${pathname.includes('/staff/hospital') && page__active}`} ><LuStethoscope fontSize={20}/><span>Hospital Staff</span></Link></li>
                    <li><Link href={"/dashboard/settings"} className={`${pathname === '/dashboard/settings' && page__active}`} ><AiOutlineSetting fontSize={20}/><span>Settings</span></Link></li>
                </ul>
            </div>
            <div className={sidebar__bottom}>
                <div className={sidebar__profile}>
                    <CgProfile fontSize={20}/>
                    <p><span>Name</span> Hospital Management</p>
                </div>
                <button type='button'><FiLogOut fontSize={20}/><span>Logout</span></button>
            </div>
        </aside>
    )
}

export default Sidebar