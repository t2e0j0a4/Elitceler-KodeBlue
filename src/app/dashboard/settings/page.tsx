import React from 'react'
import { Metadata } from 'next';
import styles from "./page.module.css";

// React Icons
import { AiOutlineSetting } from "react-icons/ai";

// Component
import AccountDelete from './components/AccountDelete';
import AccountDetails from './components/AccountDetails';
import ChangePassword from './components/ChangePassword';

export const metadata: Metadata = {
    title: 'Settings | Kode Blue Technologies',
    description: "Settings Page of Kode Blue Technologies."
}

const page = () => {

    const { app__settings, settings__head, settings__main, account__details, details__main, change__password, account__options } = styles;

    return (
        <main className={app__settings}>
            <div className={settings__head}>
                <AiOutlineSetting fontSize={21} color={'#484848'} />
                <p>Settings</p>
            </div>
            <section className={settings__main}><AccountDetails/><ChangePassword/><AccountDelete/></section>
        </main>
    )
}



export default page;