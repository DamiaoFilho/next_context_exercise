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
      <div className={`bg-${context?.theme} min-h-screen min-w-screen flex flex-col items-center justify-center`}>
        {auth?.user ? 
        (
          <h1>Olá Fulano</h1>
        ) : (
          <Form></Form>
        )}
      </div>
    </div>
  );
}
