"use client";
import Context from "@/context/context"
import { useContext } from "react";
import { LogOut, SunMoon } from "lucide-react";
import AuthContext from "@/context/auth";

export default function Nav(){
    const context = useContext(Context);
    const authContext = useContext(AuthContext);

    return(
        <div className="flex flex-row justify-around items-center w-[100%] h-12">
            <h1 className="font-bold">Context Exercise</h1>
            <section className="flex flex-row gap-8 items-center justify-center">
                <button
                    type="button" onClick={context?.toggleTheme}><SunMoon/></button>
                {authContext?.user && 
                    <LogOut onClick={authContext.logout} height={24} width={24}></LogOut>
                }
            </section>
        </div>
    )
}