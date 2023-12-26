export type HospitalRegisterType = {
    [key: string]: string | string[] | number,
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
    totalBeds: number,
    hospitalLocation: string,
    hospitalLat: number,
    hospitalLong: number,

    medicalSpecialities: string[],
    otherMedicalSpecialities: string[],
    onlineBookingPlatform: string,
    telehealthServiceContact: string,

    paymentMethods: string[],
    govtHealthSchemes: string[],
    privateHealthSchemes: string[],

    emergencyServicesAvailability: 'Available' | 'Not Available' | '',
    emergencyTimeFrom: string,
    emergencyTimeTo: string,
    ambulanceServicesAvailability: 'Available' | 'Not Available' | '',
    ambulanceServiceProviders: string[],
    typeOfAmbulancesServices: string[],

    internalReferral: 'Available' | 'Not Available' | ''
    externalReferralNetwork: 'Yes' | 'No' | '',

    accreditationStatus: 'Accredited' | 'Non-Accredited' | '',
    compilanceStatus: 'Compilant' | 'Non-Compilant' | '',
    relatedCertificates: string[],

    termsAcceptance: 'Agreed' | 'Not Agreed' | ''

}

export type AppContextTypes = {
    sectionsDone: number,
    setSectionsDone: (a: number) => void
    hospitalRegister: HospitalRegisterType,
    setHospitalRegister: (data: HospitalRegisterType) => void,
    updateRegisterInfo: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleRegisterSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}