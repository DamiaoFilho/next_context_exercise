"use client";
import { createContext, useState } from "react";
import { ThemeTypes } from "@/types/themeTypes";
import { ReactNode } from "react";

const Context = createContext<ThemeTypes | undefined>(undefined);

export const ContextProvider = ({children}:{children:ReactNode}) => {
    const [theme, setTheme] = useState<string>("white");
    const toggleTheme = () => {
        setTheme(prev => prev == "white" ? "black" : "white")
    }

    return(
        <Context.Provider value={{theme, toggleTheme}}>
            {children}
        </Context.Provider>
    )
}

export default Context;