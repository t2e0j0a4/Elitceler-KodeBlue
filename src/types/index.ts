import { IconType } from "react-icons";

export interface LiveCaseTypes {
    age: number,
    caseID: string,
    caseType: string,
    paymentType: string,
    gender: 'Male' | 'Female',
}

export interface StaffDetailType {
    orgName: string,
    username: string,
    staffRole: string,
    staffName: string,
    mobileNumber: string,
    emailAddress: string,
}

export interface BarChartsDataProps {
    Icon: IconType,
    aboutCases: string,
    caseCount: number,
    chartLabel: string,
    chartColor: string
}

export interface AreaChartsDataProps {
    Icon: IconType,
    aboutCases: string,
    caseCount: number,
    chartLabel: string,
    bgColor: string,
    borderColor: string
}

export interface CheckboxType {
    id: number,
    value: string,
    label: string
}