'use client';
import { createContext } from "react";
import { AppContextTypes } from "@/types/Context";

const AppContext = createContext<AppContextTypes | undefined>(undefined);

const AppState = ({ children }: { children: React.ReactNode }) => {

    return (
        <AppContext.Provider value={{}}>
        {children}
        </AppContext.Provider>
    );
};

export default AppState;
