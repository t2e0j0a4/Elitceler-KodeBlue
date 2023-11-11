import React from 'react'
import styles from "./page.module.css";
import { Metadata } from 'next';

// React Icons
import { BsPencilFill } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";

// Component
import PasswordInput from '@/components/PasswordInput/PasswordInput';

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

            <section className={settings__main}>

                {/* Account Details */}

                <form className={account__details}>
                    <h3>Account Details</h3>
                    <div className={details__main}>
                        <EachDetailsInput label='Username' placeholder='Username' />
                        <EachDetailsInput label='Hospital Name' placeholder='Hospital Name' />
                        <EachDetailsInput label='Hospital ID' placeholder='Hospital ID' />
                        <EachDetailsInput inputType='email' label='Email Address' placeholder='Email Address' />
                    </div>
                    <button type='submit'>Update Details</button>
                </form>

                {/* Account Details */}

                {/* Change Your Password */}

                <form className={change__password}>
                    <h3>Change Your Password</h3>
                    <PasswordInput placeholder='Current Password' label='Current Password' />
                    <PasswordInput placeholder='New Password' label='New Password' />
                    <PasswordInput placeholder='Re-enter New Password' label='Re-enter New Password' />
                    <button type='submit'>Update Password</button>
                </form>

                {/* Change Your Password */}

                {/* Account Options */}

                <div className={account__options}>
                    <h3>Remove & Logout Account</h3>
                    <button type='button'>Logout Account</button>
                    <button type='button'>Remove Account</button>
                </div>

                {/* Account Options */}

            </section>

        </main>
    )
}

function EachDetailsInput ({label, placeholder, inputType = 'text'}: {label: string, placeholder: string, inputType?: 'email' | 'text'}) {

    const {details__input, input__group} = styles;

    return (
        <div className={details__input}>
            <div className={input__group}>
                <label htmlFor={label.toLowerCase().replaceAll(' ','-')}>{label}</label>
                <input type={inputType} placeholder={placeholder} id={label.toLowerCase().replaceAll(' ','-')} />
            </div>
            <button type='button' title="Edit"><BsPencilFill fontSize={19}/></button>
        </div>
    )
}

export default page;