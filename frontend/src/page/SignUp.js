import React, { useState } from "react";
import UserProfile from "../assets/UserProfile.jpeg"
import {BiSolidShow, BiSolidHide} from "react-icons/bi";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { ImagetoBase64 } from "../utility/imagetoBase64";
import { toast } from "react-hot-toast";

const SignUp = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassord] = useState(false);
    const handleShowPassword = () => {
        setShowPassord(preve => !preve)
    }
    const [showConfirmPassword, setShowConfirmPassord] = useState(false);
    const handleShowConfirmPassword = () => {
        setShowConfirmPassord(preve => !preve)
    }
    const [data, setData] = useState(
        {
            firstName : "",
            lastName : "",
            email : "",
            password : "",
            confirmPassword : "",
            image : "",
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
    const handleUploadProfileImage = async(e) => {
        const data = await ImagetoBase64(e.target.files[0])
        // console.log(data)
        setData( (preve) => {
            return {
                ...preve,
                image : data
            }
        })
    }
    console.log(process.env.REACT_APP_SERVER_DOMAIN)
    const handleSubmit = async(e) => {
        e.preventDefault();
        const {firstName, email, password, confirmPassword} = data;
        if(firstName && email && password && confirmPassword)
        {
            if(password === confirmPassword) {

                const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`, {
                    method : "POST",
                    headers : {
                        "content-type" : "application/json"
                    },
                    body : JSON.stringify(data)
                })
                const dataRes = await fetchData.json()
                // console.log(dataRes)
                //alert(dataRes.message)
                toast(dataRes.message)
                if(dataRes.alert) {
                    navigate("/login")
                }
                
            }
            else {
                alert("password and confirm password not equal")
            }
        }
        else {
            alert("Please Enter required fields")
        }
    }
    return (
        <div className="p-3 md:p-4">
            <div className="w-full max-w-md bg-white m-auto flex items-center flex-col p-4 gap-4">
                <h1 className="text-center text-2xl">SignUp</h1>
                <div className="w-20 h-20 overflow-hidden rounded-full shadow-md drop-shadow-md auto relative">
                    <img src={data.image ? data.image : UserProfile} className="w-full h-full"></img>
                    <label htmlFor="profileImage">
                    <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-30 w-full text-center cursor-pointer">
                        <p className="text-sm p-1 text-white">Upload</p>
                    </div>
                    <input type={"File"} id="profileImage" accept="image/*" onChange={handleUploadProfileImage} className="hidden"/>
                    </label>
                </div>

                <form className="w-full" onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input type={"text"} id="firstName" name="firstName" className=" mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-gray-500" value ={data.firstName} onChange={handleOnChange}></input>
                    <label htmlFor="lastName">Last Name</label>
                    <input type={"text"} id="lastName" name="lastName" className=" mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-gray-500" value ={data.lastName} onChange={handleOnChange}></input>
                    <label htmlFor="email">Email</label>
                    <input type={"email"} id="email" name="email" className=" mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-gray-500" value ={data.email} onChange={handleOnChange}></input>
                    <label htmlFor="password">Password</label>
                    <div className=" flex bg-slate-200 px-2 py-1 rounded mt-1 mb-2 focus-within:outline focus-within:outline-gray-500">
                    <input type={showPassword?"text":"password"} id="password" name="password" className=" bg-slate-200 w-full border-none outline-none" value ={data.password} onChange={handleOnChange}></input>
                    <span className="flex text-xl cursor-pointer" onClick={handleShowPassword}>{showPassword?<BiSolidShow/>:<BiSolidHide/>}</span>
                    </div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className=" flex bg-slate-200 px-2 py-1 rounded mt-1 mb-2 focus-within:outline focus-within:outline-gray-500">
                    <input type={showConfirmPassword?"text":"password"} id="confirmPassword" name="confirmPassword" className=" bg-slate-200 w-full border-none outline-none" value ={data.confirmPassword} onChange={handleOnChange}></input>
                    <span className="flex text-xl cursor-pointer" onClick={handleShowConfirmPassword}>{showConfirmPassword?<BiSolidShow/>:<BiSolidHide/>}</span>
                    </div>
                    <button className="max-w-[120] w-full m-auto bg-gray-600 hover:bg-gray-700 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">Sign Up</button>
                </form>
                <p>Already have account ? <Link to ={"/login"} className="text-gray-600 underline">Login</Link></p>
            </div>

        </div>
    )
}

export default SignUp