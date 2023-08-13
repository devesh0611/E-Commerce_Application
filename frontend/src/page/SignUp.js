import React, { useState } from "react";
import UserProfile from "../assets/UserProfile.jpeg"
import {BiSolidShow, BiSolidHide} from "react-icons/bi";
import {Link} from "react-router-dom"

const SignUp = () => {
    const [showPassword, setShowPassord] = useState(false);
    const handleShowPassword = () => {
        setShowPassord(preve => !preve)
    }
    const [showConfirmPassword, setShowConfirmPassord] = useState(false);
    const handleShowConfirmPassword = () => {
        setShowConfirmPassord(preve => !preve)
    }
    return (
        <div className="p-3 md:p-4">
            <div className="w-full, max-w-md bg-white m-auto flex items-center flex-col p-4 gap-4">
                <h1 className="text-center text-2xl">SignUp</h1>
                <div className="w-20 overflow-hidden rounded-full shadow-md drop-shadow-md">
                    <img src={UserProfile}></img>
                </div>

                <form className="w-full">
                    <label htmlFor="firstName">First Name</label>
                    <input type={"text"} id="firstName" name="firstName" className=" mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-gray-500"></input>
                    <label htmlFor="lastName">Last Name</label>
                    <input type={"text"} id="lastName" name="lastName" className=" mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-gray-500"></input>
                    <label htmlFor="email">Email</label>
                    <input type={"email"} id="email" name="email" className=" mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-gray-500"></input>
                    <label htmlFor="password">Password</label>
                    <div className=" flex bg-slate-200 px-2 py-1 rounded mt-1 mb-2 focus-within:outline focus-within:outline-gray-500">
                    <input type={showPassword?"text":"password"} id="password" name="password" className=" bg-slate-200 w-full border-none outline-none"></input>
                    <span className="flex text-xl cursor-pointer" onClick={handleShowPassword}>{showPassword?<BiSolidShow/>:<BiSolidHide/>}</span>
                    </div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className=" flex bg-slate-200 px-2 py-1 rounded mt-1 mb-2 focus-within:outline focus-within:outline-gray-500">
                    <input type={showConfirmPassword?"text":"password"} id="confirmPassword" name="confirmPassword" className=" bg-slate-200 w-full border-none outline-none"></input>
                    <span className="flex text-xl cursor-pointer" onClick={handleShowConfirmPassword}>{showConfirmPassword?<BiSolidShow/>:<BiSolidHide/>}</span>
                    </div>
                    <button className="max-w-[120] w-full m-auto bg-gray-600 hover:bg-gray-700 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">Sign Up</button>
                </form>
                <p>Already have account ? <Link to ={"login"} className="text-gray-600 underline">Login</Link></p>
            </div>

        </div>
    )
}

export default SignUp