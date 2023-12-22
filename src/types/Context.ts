export type HospitalRegisterType = {
    email: string,
    password: string,
    hospitalName: string,
    hospitalRegId: string,
    typeOfHospital: string,

    primaryContact: string,
    additionalContacts: string[],
    additionalEmail: string,
    relaventPersonName: string,
    relaventPersonContact: string,
    regularTimeFrom: string,
    regularTimeTo: string,
    emergencyTimeFrom: string,
    emergencyTimeTo: string,
    totalBeds: number,
    hospitalLocation: string,
    hospitalLat: number,
    hospitalLong: number
}

export type AppContextTypes = {
    sectionsDone: number,
    setSectionsDone: (a: number) => void
    hospitalRegister: HospitalRegisterType,
    setHospitalRegister: (data: HospitalRegisterType) => void,
    updateRegisterInfo: (e: React.ChangeEvent<HTMLInputElement>) => void 
}