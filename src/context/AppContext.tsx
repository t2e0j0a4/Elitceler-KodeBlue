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
        typeOfHospital: ''
    })

    const [noOfSectionDone, setNoOfSectionsDone] = useState(0);

    const updateRegisterInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHospitalRegister({
            ...hospitalRegister,
            [e.target.name]: e.target.value
        });
    }

    return (
        <AppContext.Provider value={{ hospitalRegister: hospitalRegister, updateRegisterInfo: updateRegisterInfo, sectionsDone: noOfSectionDone, setSectionsDone: setNoOfSectionsDone }}>
        {children}
        </AppContext.Provider>
    );
};

export default AppState;
