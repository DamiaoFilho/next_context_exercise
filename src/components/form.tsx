"use client";
import { useForm } from "react-hook-form";
import AuthContext from "@/context/auth";
import { useContext } from "react";

export default function Form() {
    const { register, handleSubmit } = useForm();
    const authContext = useContext(AuthContext);

    const onSubmit = (data: any, event: any) => {
        event.preventDefault(); 
        authContext?.login(data.name);
    };

    return (
        <div className="flex flex-col items-center bg-gray-500 rounded-md w-100 h-50">
            <h1 className="font-bold p-4">Faça seu cadastro!</h1>
            <form
                onSubmit={handleSubmit((data, event) => onSubmit(data, event))}
                className="flex flex-col items-center gap-4 w-[75%] h-[100%] justify-around"
                action=""
            >
                <input
                    {...register("name")}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400"
                    type="text"
                    placeholder="Nome"
                />
                <button
                    className="w-full bg-green-500 p-2 rounded-md"
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>
    );
}