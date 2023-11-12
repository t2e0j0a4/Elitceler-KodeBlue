'use client';
import { createContext } from "react";
import { AppContext } from "@/types/Context";

const AppContext = createContext<AppContext | undefined>(undefined);

const AppState = ({ children }: { children: React.ReactNode }) => {

    return (
        <AppContext.Provider value={{}}>
        {children}
        </AppContext.Provider>
    );
};

export default AppState;
