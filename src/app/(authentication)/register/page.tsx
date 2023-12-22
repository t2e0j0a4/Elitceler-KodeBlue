"use client";
import Link from "next/link";
import styles from "./page.module.css";
import React, {useContext} from "react";

// Components
import RegisterProgress from "./components/RegisterProgress";
import PasswordInput from "@/components/PasswordInput/PasswordInput";
import { AppContext } from "@/context/AppContext";
import { AppContextTypes } from "@/types/Context";

const Register = () => {

  const { app__register, register__center, register__main, register__form, input__detail } = styles;
  
  const appContext = useContext(AppContext) as AppContextTypes;
  const { hospitalRegister, updateRegisterInfo, sectionsDone, setSectionsDone } = appContext;

  return (
    <main className={app__register}>
      <div className={register__center}>
        
        <h1>Registration</h1>
        <RegisterProgress/>

        <section className={register__main}>

          {/* Form 1 - Hospital Information */}

          {
            sectionsDone === 0 && (
              <form className={register__form} onSubmit={(e) => {
                e.preventDefault();
                setSectionsDone(1);
              }}>
                <h2>Hospital Information</h2>
                <input value={hospitalRegister.hospitalName} onChange={(e) => {updateRegisterInfo(e)}} name="hospitalName" type="text" placeholder='Legal Hospital Name*' required aria-labelledby='Legal Hospital Name'/>
                <input value={hospitalRegister.email} onChange={(e) => {updateRegisterInfo(e)}} name="email" type="email" placeholder='Email*' required aria-labelledby='Email'/>
                <PasswordInput value={hospitalRegister.password} handleChange={updateRegisterInfo} label="Password" placeholder="Password" />
                <input value={hospitalRegister.hospitalRegId} onChange={(e) => {updateRegisterInfo(e)}} name="hospitalRegId" type="text" placeholder="Hospital Registration No*" pattern="[A-Z]{2}[0-9]{2}[0-9]{4}" title="Must be in AA112222 Pattern" required aria-labelledby="Hospital Reg Number" />
                <div className={input__detail}>
                  <input value={hospitalRegister.typeOfHospital} onChange={(e) => {updateRegisterInfo(e)}} name="typeOfHospital" type="text" placeholder="Type Of Hospital*" required aria-labelledby="Type Of Hospital" />
                  <p>Ex: Super Speciality, Multi Speciality, General etc</p>
                </div>
                <button type="submit">Next</button>
              </form>
            )
          }

          {/* Form 1 - Hospital Information */}

          {/* Form 2 - Contact Information */}

          {
            sectionsDone === 1 && (
              <form className={register__form} onSubmit={(e) => {
                e.preventDefault();
                setSectionsDone(2);
              }}>
                <h2>Contact Information</h2>
                
                <button type="submit">Next</button>
              </form>
            )
          }

          {/* Form 2 - Contact Information */}

        </section>

      </div>
    </main>
  );
};

export default Register;
