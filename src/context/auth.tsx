


"use client";
import { createContext, useState } from "react";
import { ReactNode } from "react";
import AuthTypes, { User } from "@/types/AuthTypes";

const AuthContext = createContext<AuthTypes | undefined>(undefined);

export const AuthProvider = ({children}:{children:ReactNode}) => {
    const [user, setUser] = useState<User|undefined>(undefined);

    return(
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;