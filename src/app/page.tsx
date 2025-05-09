"use client";
import Nav from "@/components/nav";
import { useContext } from "react";
import Context from "@/context/context";
export default function Home() {
  const context = useContext(Context)
  return (
    <>
      <Nav></Nav>
      <div className={`bg-${context?.theme} w-[100%] h-100`}>

      </div>
    </>
  );
}
