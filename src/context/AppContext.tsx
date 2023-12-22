'use client';
import { createContext, useState } from "react";
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
        emergencyTimeFrom: '00:00',
        emergencyTimeTo: '00:00',
        additionalEmail: '',
        additionalContacts: [],
        relaventPersonName: '',
        relaventPersonContact: '',
        hospitalLocation: '',
        hospitalLat: 0,
        hospitalLong: 0
    })

    const [noOfSectionDone, setNoOfSectionsDone] = useState(2);

    const updateRegisterInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHospitalRegister({
            ...hospitalRegister,
            [e.target.name]: e.target.value
        });
    }

    return (
        <AppContext.Provider value={{ hospitalRegister: hospitalRegister, setHospitalRegister: setHospitalRegister, updateRegisterInfo: updateRegisterInfo, sectionsDone: noOfSectionDone, setSectionsDone: setNoOfSectionsDone }}>
        {children}
        </AppContext.Provider>
    );
};

export default AppState;
