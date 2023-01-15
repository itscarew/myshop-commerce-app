import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router"
import { CiSearch } from "react-icons/ci"
import AppContext from "./AppContext";

export default function Input({ onChange, onClick, label, placeholder, icon, type = "text", value, name, props }: any) {
    const router = useRouter()
    const { themeState }: any = useContext(AppContext)

    return (
        <>
            <div>
                <label> {label} </label>
                <div className='flex items-center relative my-7 ' >
                    <input
                        type={type}
                        className={`w-full border-b-2 py-2 pl-10 border-comas-first focus:outline-none  focus:border-comas-third   ${themeState.theme ? "bg-black border-gray-700  text-white" : ""} `}
                        placeholder={placeholder}
                        value={value}
                        name={name}
                        onChange={onChange}
                        {...props}
                    />
                    <span className='absolute left-1' > {icon} </span>
                    {router.pathname === "/search" &&
                        <div className={` border-2 rounded-full py-2 text-white text-center absolute right-0 bg-fern-400 w-32 cursor-pointer`}
                            onClick={onClick} >Search</div>}
                </div>
            </div>
        </>
    )
}









