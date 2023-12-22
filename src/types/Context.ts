export type HospitalRegisterType = {
    email: string,
    password: string,
    hospitalName: string,
    hospitalRegId: string,
    typeOfHospital: string
}

export type AppContextTypes = {
    sectionsDone: number,
    setSectionsDone: (a: number) => void
    hospitalRegister: HospitalRegisterType,
    updateRegisterInfo: (e: React.ChangeEvent<HTMLInputElement>) => void 
}