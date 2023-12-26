'use client';
import { createContext, useEffect, useState } from "react";
import { AppContextTypes, HospitalRegisterType } from "@/types/Context";

export const AppContext = createContext<AppContextTypes | undefined>(undefined);

const AppState = ({ children }: { children: React.ReactNode }) => {

    const [hospitalRegister, setHospitalRegister] = useState<HospitalRegisterType>({
        email: '',
        password: '',
        hospitalName: '',
        hospitalRegId: '',
        typeOfHospital: '',

        primaryContact: '',
        totalBeds: 0,
        regularTimeFrom: '00:00',
        regularTimeTo: '00:00',
        additionalEmail: '',
        additionalContacts: [],
        relaventPersonName: '',
        relaventPersonContact: '',
        hospitalLocation: '',
        hospitalLat: 0,
        hospitalLong: 0,

        medicalSpecialities: [],
        otherMedicalSpecialities: [],
        telehealthServiceContact: '',
        onlineBookingPlatform: '',

        paymentMethods: [],
        govtHealthSchemes: [],
        privateHealthSchemes: [],

        emergencyServicesAvailability: '',
        emergencyTimeFrom: '00:00',
        emergencyTimeTo: '00:00',
        ambulanceServicesAvailability: '',
        ambulanceServiceProviders: [],
        typeOfAmbulancesServices: [],

        internalReferral: '',
        externalReferralNetwork: '',

        accreditationStatus: '',
        compilanceStatus: '',
        relatedCertificates: [],

        termsAcceptance: ''
    })

    const [noOfSectionDone, setNoOfSectionsDone] = useState(0);

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [noOfSectionDone]);

    const updateRegisterInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHospitalRegister({
            ...hospitalRegister,
            [e.target.name]: e.target.value
        });
    }

    // Final Register Submit Form Handling
    const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setNoOfSectionsDone(8);
        console.log('Form Submitted');
    }

    return (
        <AppContext.Provider value={{ hospitalRegister: hospitalRegister, setHospitalRegister: setHospitalRegister, updateRegisterInfo: updateRegisterInfo, sectionsDone: noOfSectionDone, setSectionsDone: setNoOfSectionsDone, handleRegisterSubmit: handleRegisterSubmit }}>
        {children}
        </AppContext.Provider>
    );
};

export default AppState;
