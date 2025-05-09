"use client";
import Context from "@/context/context"
import { useContext } from "react";

export default function Nav(){
    const context = useContext(Context);


    return(
        <div className="flex flex-row justify-around items-center">
            <h1>Context</h1>
            <button type="button" onClick={context?.toggleTheme}>{context?.theme}</button>
        </div>
    )
}