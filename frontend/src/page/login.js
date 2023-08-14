import React from "react";
import { useState } from "react";
import UserProfile from "../assets/UserProfile.jpeg"
import {BiSolidShow, BiSolidHide} from "react-icons/bi";
import {Link} from "react-router-dom"

const Login = () => {

    const [showPassword, setShowPassord] = useState(false);
    const handleShowPassword = () => {
        setShowPassord(preve => !preve)
    }
    const [data, setData] = useState(
        {
            firstName : "",
            lastName : "",
            email : "",
            password : "",
            confirmPassword : "",
        }
    )
    console.log(data);
    const handleOnChange = (e) => {
        const {name, value} = e.target
        setData((preve) => {
            return {
                ...preve,
                [name] : value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = data;
        if(email && password)
        {
            alert("successfull")
        }
        else {
            alert("Please Enter required fields")
        }
    }

    return (
        <div className="p-3 md:p-4">
            <div className="w-full, max-w-md bg-white m-auto flex items-center flex-col p-4 gap-4">
                <h1 className="text-center text-2xl">Login</h1>
                <div className="w-20 overflow-hidden rounded-full shadow-md drop-shadow-md">
                    <img src={UserProfile}></img>
                </div>

                <form className="w-full" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type={"email"} id="email" name="email" className=" mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-gray-500" value ={data.email} onChange={handleOnChange}></input>
                    <label htmlFor="password">Password</label>
                    <div className=" flex bg-slate-200 px-2 py-1 rounded mt-1 mb-2 focus-within:outline focus-within:outline-gray-500">
                    <input type={showPassword?"text":"password"} id="password" name="password" className=" bg-slate-200 w-full border-none outline-none" value ={data.password} onChange={handleOnChange}></input>
                    <span className="flex text-xl cursor-pointer" onClick={handleShowPassword}>{showPassword?<BiSolidShow/>:<BiSolidHide/>}</span>
                    </div>
                    <button className="max-w-[120] w-full m-auto bg-gray-600 hover:bg-gray-700 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">Login</button>
                </form>
                <p>Don't have an account ? <Link to ={"/SignUp"} className="text-gray-600 underline">Sign Up</Link></p>
            </div>

        </div>
    )
}

export default Login