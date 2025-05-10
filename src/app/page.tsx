"use client";
import Nav from "@/components/nav";
import { use, useContext } from "react";
import Context from "@/context/context";
import AuthContext from "@/context/auth";
import Form from "@/components/form";
export default function Home() {
  const context = useContext(Context)
  const auth = useContext(AuthContext)


  return (
    <div className="flex flex-col items-center min-h-screen min-w-screen">
      <Nav/>
      <div className={`${context?.theme == "white" ? "bg-white":"bg-black"} min-h-screen min-w-screen
      flex flex-col items-center justify-center`}>
        {auth?.user ? 
        (
          <h1
          className={`font-bold text-center text-2xl ${context?.theme == "white" ? "text-black":"text-white"}`}
          >Seja Bem-Vindo!<br/>{auth.user.name}</h1>
        ) : (
          <Form></Form>
        )}
      </div>
    </div>
  );
}
