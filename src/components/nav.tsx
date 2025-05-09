"use client";
import Context from "@/context/context"
import { useContext } from "react";

export default function Nav(){
    const context = useContext(Context);


    return(
        <div className="flex flex-row justify-around items-center w-[100%] h-12">
            <h1 className="font-bold">Context Exercise</h1>
            <button
                type="button" onClick={context?.toggleTheme}>{context?.theme}</button>
        </div>
    )
}