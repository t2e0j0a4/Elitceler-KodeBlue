"use client";
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
import { ambulanceServiceProviders, govtHealthSchemes, medicalSpecialities, paymentMethods, privateHealthSchemes, typeOfAmbulancesServices } from "@/constants/data";

// React Icons
import { MdUpload } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const Register = () => {

  const { app__register, register__center, register__main, register__form, input__detail, multi__input } = styles;
  
  const appContext = useContext(AppContext) as AppContextTypes;
  const { hospitalRegister, setHospitalRegister, updateRegisterInfo, sectionsDone, setSectionsDone, handleRegisterSubmit } = appContext;

  const [additionalContactsText, setAdditionalContactsList] = useState('');
  const [otherMedicalSpecialitiesList, setOtherMedicalSpecialitiesList] = useState('');

  useEffect(() => {

    setHospitalRegister({
      ...hospitalRegister,
      additionalContacts: additionalContactsText ? additionalContactsText.split(',').map((item) => item.trim()) : []
    })

    // eslint-disable-next-line
  }, [additionalContactsText]);

  useEffect(() => {

    setHospitalRegister({
      ...hospitalRegister,
      otherMedicalSpecialities: otherMedicalSpecialitiesList ? otherMedicalSpecialitiesList.split(',').map((item) => item.trim()) : []
    })

    // eslint-disable-next-line
  }, [otherMedicalSpecialitiesList]);

  const handleCheckboxes = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setHospitalRegister({
        ...hospitalRegister,
        [e.target.name]: [...hospitalRegister[e.target.name] as [], e.target.value]
      })
    }
    else {
      setHospitalRegister({
        ...hospitalRegister,
        [e.target.name]: (hospitalRegister[e.target.name] as []).filter((item: string) => item !== e.target.value)
      })
    }
  }

  const [selectedDocs, setSelectedDocs] = useState<File[]>([]);

  const handleSelectedFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files && setSelectedDocs(Array.from(e.target.files));
  }

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
                <h3>Medical Specilalities Offered</h3>
                {
                  medicalSpecialities.map((item) => {
                    return (
                      <div key={item.id} className={styles.form__check}>
                        <input type="checkbox" checked={hospitalRegister.medicalSpecialities.includes(item.value) ? true : false} onChange={(e) => {handleCheckboxes(e)}} value={item.value} id={`speciality-${item.id}`} name="medicalSpecialities" />
                        <label htmlFor={`speciality-${item.id}`}>{item.label}</label>
                      </div>
                    )
                  })
                }
                <div className={input__detail}>
                  <input type="text" name="otherMedicalSpecialities" value={otherMedicalSpecialitiesList} onChange={(e) => {
                    setOtherMedicalSpecialitiesList(e.target.value);
                  }} placeholder="Other Medical Specialities" title="Should be comma seperated values." />
                  <p>Comma seperated</p>
                </div>
                <h3>Telehealth Sevices <span style={{ fontSize:'0.8rem' }}>(if available)</span></h3>
                <input type="text" placeholder="Contact of Telehealth Services" name="telehealthServiceContact" value={hospitalRegister.telehealthServiceContact} onChange={(e) => {updateRegisterInfo(e)}} pattern="^[0-9+\s]*$" title="Provide a valid Contact Number"/>
                <h3>Online Appointment Booking Platfrom <span style={{ fontSize:'0.8rem' }}>(if available)</span></h3>
                <input type="url" placeholder="URL/Link of Booking Platform" pattern="https://.+" value={hospitalRegister.onlineBookingPlatform} name="onlineBookingPlatform" onChange={(e) => {updateRegisterInfo(e)}} title="Provide a valid 'https' URL." />
                <button type="submit">Next</button>
              </form>
            )
          }

          {/* Form 3 - Specializations & Services */}

          {/* Form 4 - Insurance and Payments */}

          {
            sectionsDone === 3 && (
              <form className={register__form} onSubmit={(e) => {
                e.preventDefault();
                setSectionsDone(4);
              }}>

                <h2>Insurance & Payment Information</h2>
                <h3>Accepted Payment Methods</h3>
                {
                  paymentMethods.map((item) => {
                    return (
                      <div key={item.id} className={styles.form__check}>
                        <input type="checkbox" checked={hospitalRegister.paymentMethods.includes(item.value) ? true : false} onChange={(e) => {handleCheckboxes(e)}} value={item.value} id={`payment-${item.id}`} name="paymentMethods" />
                        <label htmlFor={`payment-${item.id}`}>{item.label}</label>
                      </div>
                    )
                  })
                }
                <h3>Govt Health Insurance Schemes</h3>
                {
                  govtHealthSchemes.map((item) => {
                    return (
                      <div key={item.id} className={styles.form__check}>
                        <input type="checkbox" checked={hospitalRegister.govtHealthSchemes.includes(item.value) ? true : false} onChange={(e) => {handleCheckboxes(e)}} value={item.value} id={`govtInsuranceScheme-${item.id}`} name="govtHealthSchemes" />
                        <label htmlFor={`govtInsuranceScheme-${item.id}`}>{item.label}</label>
                      </div>
                    )
                  })
                }
                <h3>Private Health Insurance Schemes</h3>
                {
                  privateHealthSchemes.map((item) => {
                    return (
                      <div key={item.id} className={styles.form__check}>
                        <input type="checkbox" checked={hospitalRegister.privateHealthSchemes.includes(item.value) ? true : false} onChange={(e) => {handleCheckboxes(e)}} value={item.value} id={`privateInsuranceScheme-${item.id}`} name="privateHealthSchemes" />
                        <label htmlFor={`privateInsuranceScheme-${item.id}`}>{item.label}</label>
                      </div>
                    )
                  })
                }
                <button type="submit">Next</button>

              </form>
            )
          }

          {/* Form 4 - Insurance and Payments */}

          {/* Form 5 - Emergency & Ambulance Services */}

          {
            sectionsDone === 4 && (
              <form className={register__form} onSubmit={(e) => {
                e.preventDefault();
                setSectionsDone(5);
              }}>

                <h2>Emergency and Ambulance Services</h2>
                <h3>Emergency Services</h3>
                <div className={styles.form__check}>
                  <input type="radio" required value='Available' onChange={(e) => {updateRegisterInfo(e)}} id="e-available" name="emergencyServicesAvailability" />
                  <label htmlFor="e-available">Available</label>
                </div>
                <div className={styles.form__check}>
                  <input type="radio" required value='Not Available' onChange={(e) => {updateRegisterInfo(e)}} id="e-notAvailable" name="emergencyServicesAvailability" />
                  <label htmlFor="e-notAvailable">Not Available</label>
                </div>
                {
                  hospitalRegister.emergencyServicesAvailability === 'Available' && (
                    <>
                      <h3>Emergency Dept. Operating Hours (From, To) - 24Hrs Format</h3>
                      <div className={multi__input}>
                        <input type="time" value={hospitalRegister.emergencyTimeFrom} onChange={(e) => {updateRegisterInfo(e)}}  name="emergencyTimeFrom" required aria-labelledby="Emergency Operating Time From" />
                        <input type="time" value={hospitalRegister.emergencyTimeTo} onChange={(e) => {updateRegisterInfo(e)}} name="emergencyTimeTo" required aria-labelledby="Emergency Operating Time To" />
                      </div>
                    </>
                  )
                }
                <h3>Ambulance Services</h3>
                <div className={styles.form__check}>
                  <input type="radio" required value='Available' onChange={(e) => {updateRegisterInfo(e)}} id="a-available" name="ambulanceServicesAvailability" />
                  <label htmlFor="a-available">Available</label>
                </div>
                <div className={styles.form__check}>
                  <input type="radio" required value='Not Available' onChange={(e) => {updateRegisterInfo(e)}} id="a-notAvailable" name="ambulanceServicesAvailability" />
                  <label htmlFor="a-notAvailable">Not Available</label>
                </div>
                {
                  hospitalRegister.ambulanceServicesAvailability === 'Available' && (
                    <>
                      <h3>Service Providers</h3>
                      {
                        ambulanceServiceProviders.map((item) => {
                          return (
                            <div key={item.id} className={styles.form__check}>
                              <input type="checkbox" checked={hospitalRegister.ambulanceServiceProviders.includes(item.value) ? true : false} onChange={(e) => {handleCheckboxes(e)}} value={item.value} id={`ambulanceService-${item.id}`} name="ambulanceServiceProviders" />
                              <label htmlFor={`ambulanceService-${item.id}`}>{item.label}</label>
                            </div>
                          )
                        })
                      }
                      <h3>Total Ambulances Available</h3>
                      <input type="number" name="totalAmbulancesAvailable" value={hospitalRegister.totalAmbulancesAvailable} onChange={(e) => {updateRegisterInfo(e)}} placeholder="Total Ambulances Available" required aria-labelledby="Total Ambulances Available" min="0" step="1" />
                      <h3>Service Providers</h3>
                      {
                        typeOfAmbulancesServices.map((item) => {
                          return (
                            <div key={item.id} className={styles.form__check}>
                              <input type="checkbox" checked={hospitalRegister.typeOfAmbulancesServices.includes(item.value) ? true : false} onChange={(e) => {handleCheckboxes(e)}} value={item.value} id={`typeAmbulanceService-${item.id}`} name="typeOfAmbulancesServices" />
                              <label htmlFor={`typeAmbulanceService-${item.id}`}>{item.label}</label>
                            </div>
                          )
                        })
                      }
                    </>
                  )
                }
                <button type="submit">Next</button>

              </form>
            )
          }

          {/* Form 5 - Emergency & Ambulance Services */}

          {/* Form 6 - Referral Processes */}

          {
            sectionsDone === 5 && (
              <form className={register__form} onSubmit={(e) => {
                e.preventDefault();
                setSectionsDone(6);
              }}>

                <h2>Referral Process</h2>
                
                <h3>Internal Referral Processes</h3>
                <div className={styles.form__check}>
                  <input type="radio" value='Available' required onChange={(e) => {updateRegisterInfo(e)}} id="internalReferral-available" name="internalReferral" />
                  <label htmlFor="internalReferral-available">Available</label>
                </div>
                <div className={styles.form__check}>
                  <input type="radio" value='Not Available' required onChange={(e) => {updateRegisterInfo(e)}} id="internalReferral-notAvailable" name="internalReferral" />
                  <label htmlFor="internalReferral-notAvailable">Not Available</label>
                </div>

                <h3>Participation in External Referral Network</h3>
                <div className={styles.form__check}>
                  <input type="radio" value='Yes' required onChange={(e) => {updateRegisterInfo(e)}} id="externalReferral-available" name="externalReferralNetwork" />
                  <label htmlFor="externalReferral-available">Yes</label>
                </div>
                <div className={styles.form__check}>
                  <input type="radio" value='No' required onChange={(e) => {updateRegisterInfo(e)}} id="externalReferral-notAvailable" name="externalReferralNetwork" />
                  <label htmlFor="externalReferral-notAvailable">No</label>
                </div>

                <button type="submit">Next</button>

              </form>
            )
          }

          {/* Form 6 - Referral Processes */}

          {/* Form 7 - Accreditation Status */}

          {
            sectionsDone === 6 && (
              <form className={register__form} onSubmit={(e) => {
                e.preventDefault();
                setSectionsDone(7);
              }}>

                <h2>Accreditations and Certifications</h2>

                <h3>Accreditation Status</h3>
                <div className={styles.form__check}>
                  <input type="radio" value='Accredited' required onChange={(e) => {updateRegisterInfo(e)}} id="accreditation-available" name="accreditationStatus" />
                  <label htmlFor="accreditation-available">Accredited</label>
                </div>
                <div className={styles.form__check}>
                  <input type="radio" value='Non-Accredited' required onChange={(e) => {updateRegisterInfo(e)}} id="accreditation-notAvailable" name="accreditationStatus"  />
                  <label htmlFor="accreditation-notAvailable">Non-Accredited</label>
                </div>

                {
                  hospitalRegister.accreditationStatus === 'Accredited' && (
                    <>

                      <h3>Certifications (any)</h3>
                      <label htmlFor="relatedDocs">
                        <MdUpload fontSize={21}/>
                        <span>Upload. {selectedDocs.length} Selected</span>
                      </label>
                      <input type="file" id="relatedDocs" style={{ display: 'none' }} accept=".pdf, .jpg, .png, .jpeg" multiple onChange={(e) => {handleSelectedFiles(e)}}/>

                      <h3>Legal and Regulatory Compilance*</h3>
                      <div className={styles.form__check}>
                        <input type="radio" value='Compilant' required onChange={(e) => {updateRegisterInfo(e)}} id="compilance-available" name="compilanceStatus" />
                        <label htmlFor="compilance-available">Compilant</label>
                      </div>
                      <div className={styles.form__check}>
                        <input type="radio" value='Non-Compilant' required onChange={(e) => {updateRegisterInfo(e)}} id="compilance-notAvailable" name="compilanceStatus"  />
                        <label htmlFor="compilance-notAvailable">Non-Compilant</label>
                      </div>
                    </>
                  )
                }

                <button type="submit">Next</button>

              </form>
            )
          }

          {/* Form 7 - Accreditation Status */}

          {/* Form 8 - Terms and Conditions */}

          {
            sectionsDone === 7 && (
              <form className={register__form} onSubmit={(e) => {handleRegisterSubmit(e)}}>

                <h2>Terms and Conditions</h2>
                <p id={styles.tnc}>Read our <Link href="#">Terms and Conditions</Link></p>
                <div className={styles.form__check}>
                  <input type="radio" value='Agreed' required onChange={(e) => {updateRegisterInfo(e)}} id="terms-agree" name="termsAcceptance" />
                  <label htmlFor="terms-agree">I Agree</label>
                </div>
                <div className={styles.form__check}>
                  <input type="radio" value="Not Agreed" required onChange={(e) => {updateRegisterInfo(e)}} id="terms-notagree" name="termsAcceptance"  />
                  <label htmlFor="compilance-notAvailable">I don&#39;t Agree </label>
                </div>

                <button type="submit">Register</button>

              </form>
            )
          }

          {/* Form 8 - Terms and Conditions */}

          {/* Final Showcase */}

          {
            sectionsDone === 8 && (
              <div className={styles.final__showcase}>
                <p>All Done!</p>
                <Image src="/others/AllDone.svg" alt="All Done" width={260} height={210} />
                <Link href={"/dashboard"}>Go to Dashboard</Link>
              </div>
            )
          }

          {/* Final Showcase */}

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