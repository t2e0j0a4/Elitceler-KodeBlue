"use client";
import Link from "next/link";
import Script from "next/script";
import styles from "./page.module.css";
import React, {useContext, useEffect, useState} from "react";

// PLACES AUTO COMPLETE - GOOGLE API
import useOnclickOutside from "react-cool-onclickoutside";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";

// Components
import RegisterProgress from "./components/RegisterProgress";
import PasswordInput from "@/components/PasswordInput/PasswordInput";
import { AppContext } from "@/context/AppContext";
import { AppContextTypes } from "@/types/Context";

const Register = () => {

  const { app__register, register__center, register__main, register__form, input__detail, multi__input } = styles;
  
  const appContext = useContext(AppContext) as AppContextTypes;
  const { hospitalRegister, setHospitalRegister, updateRegisterInfo, sectionsDone, setSectionsDone } = appContext;

  const [additionalContactsText, setAdditionalContactsList] = useState('');

  useEffect(() => {

    setHospitalRegister({
      ...hospitalRegister,
      additionalContacts: additionalContactsText.split(',').map((item) => item.trim())
    })

    // eslint-disable-next-line
  }, [additionalContactsText]);

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
                <input required type="text" value={hospitalRegister.primaryContact} onChange={(e) => {updateRegisterInfo(e)}} placeholder="Hospital Contact Number*" aria-labelledby="Primary Hospital Contact Number" name="primaryContact" pattern="^[0-9+\s]*$" title="Provide valid Contact Number - Only Digits (0-9)" />
                <div className={input__detail}>
                  <input name="additionalContacts" value={additionalContactsText} onChange={(e) => {
                    setAdditionalContactsList(e.target.value);
                  }} type="text" placeholder="Additional Phone Numbers" aria-labelledby="Additional Phone Numbers" pattern="^[0-9+\, ]*$" title="Provide valid Contact Numbers - Only Digits (0-9) and commas if required"/>
                  <p>Comma Seperated (Ex: 9876543210, 9568741203)</p>
                </div>
                <input name="additionalEmail" value={hospitalRegister.additionalEmail} onChange={(e) => {updateRegisterInfo(e)}} type="email" placeholder="Additional Email Address" aria-labelledby="Additional Email" title="Provide valid Email Address"/>
                <h3>Relavent Contact Person</h3>
                <input required type="text" value={hospitalRegister.relaventPersonName} onChange={(e) => {updateRegisterInfo(e)}} placeholder="Person Name*" aria-labelledby="Relavent Contact Person Name" name="relaventPersonName" />
                <input required type="text" value={hospitalRegister.relaventPersonContact} onChange={(e) => {updateRegisterInfo(e)}} placeholder="Person Contact Number*" aria-labelledby="Person Contact Number" name="relaventPersonContact" pattern="^[0-9+\s]*$" title="Provide valid Contact Number - Only Digits (0-9)" />
                <h3>Regular Operating Hours (From, To) - 24Hrs Format</h3>
                <div className={multi__input}>
                  <input type="time" value={hospitalRegister.regularTimeFrom} onChange={(e) => {updateRegisterInfo(e)}} name="regularTimeFrom" required aria-labelledby="Regular Operating Time From" />
                  <input type="time" value={hospitalRegister.regularTimeTo} onChange={(e) => {updateRegisterInfo(e)}} name="regularTimeTo" required aria-labelledby="Regular Operating Time To" />
                </div>
                <h3>Emergency Dept. Operating Hours (From, To) - 24Hrs Format</h3>
                <div className={multi__input}>
                  <input type="time" value={hospitalRegister.emergencyTimeFrom} onChange={(e) => {updateRegisterInfo(e)}}  name="emergencyTimeFrom" required aria-labelledby="Emergency Operating Time From" />
                  <input type="time" value={hospitalRegister.emergencyTimeTo} onChange={(e) => {updateRegisterInfo(e)}} name="emergencyTimeTo" required aria-labelledby="Emergency Operating Time To" />
                </div>

                {/* <h3>Hospital Location</h3>
                <LocationAutoComplete/> */}
                
                <h3>Total Beds in Hospital</h3>
                <input type="number" name="totalBeds" value={hospitalRegister.totalBeds} onChange={(e) => {updateRegisterInfo(e)}} placeholder="Total Beds in Hospital*" required aria-labelledby="Total Beds in Hospital" min="0" step="1" />
                <button type="submit">Next</button>
              </form>
            )
          }

          {/* Form 2 - Contact Information */}

          {/* Form 3 - Specializations & Services */}

          {
            sectionsDone === 2 && (
              <form className={register__form} onSubmit={(e) => {
                e.preventDefault();
                setSectionsDone(3);
              }}>
                <h2>Specializations & Services</h2>
                <button type="submit">Next</button>
              </form>
            )
          }

          {/* Form 3 - Specializations & Services */}

        </section>

      </div>
    </main>
  );
};

export default Register;

export const LocationAutoComplete = () => {

  const appContext = useContext(AppContext) as AppContextTypes;
  const { hospitalRegister, setHospitalRegister, updateRegisterInfo } = appContext;

  const {ready, value, suggestions: {status, data}, setValue, clearSuggestions } = usePlacesAutocomplete({callbackName: 'kodebluePlaces', debounce: 300});

  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const handleSelect = ({description}: {description: any}) => {
    setValue(description, false);
    clearSuggestions();

    getGeocode({address: description}).then((results) => {
      const {lat, lng: long} = getLatLng(results[0]);
      console.log(lat, long);  
      setHospitalRegister({
        ...hospitalRegister,
        hospitalLocation: value,
        hospitalLat: lat,
        hospitalLong: long
      })
    })
  }

  const renderSuggestions = () => {

    data.map((sugesstion) => {

      const {place_id, structured_formatting: {main_text, secondary_text}} = sugesstion;

      return (
        <li onClick={() => handleSelect(sugesstion)} key={place_id}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      )

    })

    return <></>
  }

  return (
    <>
      
      <div className={styles.location__detail}>
        <div className={styles.main__location} ref={ref}>
          <input disabled={!ready} value={value} onChange={(e) => {handleInput(e)}} name="hospitalLocation" type="text" placeholder="Hospital Location*" aria-labelledby="Hospital Location" />
          {status === "OK" && <ul className={styles.location__suggestions}>{renderSuggestions()}</ul>}
        </div>
        <div className={styles.multi__input}>
          <input type="text" defaultValue={hospitalRegister.hospitalLat as number} placeholder="Latitude*" aria-labelledby="Latitude" name="hospitalLat" />
          <input type="text" defaultValue={hospitalRegister.hospitalLong as number} placeholder="Longitude*" aria-labelledby="Longitude" name="hospitalLong" />
        </div>
      </div>

      <Script type="text/javascript" src={`https://maps.googleapis.com/maps/api/js?key=${process.env.PLACES_API_KEY}&libraries=places&callback=kodebluePlaces`}></Script>

    </>
  )
}