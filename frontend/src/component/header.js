import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import logo from "../assets/logo.jpeg"
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast"
const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const userData = useSelector((state)=>state.user)
    const dispatch = useDispatch()
    // console.log(userData)
    // console.log(userData.firstName)
    const handleShowMenu = () => {
        setShowMenu(preve => !preve)
    }
    const handleLogout = () => {
        dispatch(logoutRedux())
        toast("Logout successfully")
    }

    console.log(process.env.REACT_APP_ADMIN_EMAIL)
    return (
        <header className="fixed shadow-md w-full h-16 px-2 mid:px-4 z-50 bg-white">
        { /* Desktop */}
           <div className="flex item-center h-full justify-between">
            <Link to = {""}>
            <div className="h-14">
                <img src={logo} className="h-full"/>
            </div>
            </Link>
            <div className="flex item-center gap-4 md:gap-7">
                <nav className="flex gap-4 md:gap-7 text-base md:text-lg h-full p-3.5 ">
                 <Link to ="">Home</Link>
                 <Link to ="menu/64dde4f939bc653734443ce8">Menu</Link>
                 <Link to ="about">About</Link>
                 <Link to ="contact">Contact</Link>
                </nav>
                <div className="text-2xl text-slate-600 relative p-3.5">
                <Link to={"cart"}><BsCartFill/>
                <div className="absolute top-2 right-1 text-white bg-red-500 h-5 w-5 rounded-full text-base text-center">0</div>
                </Link>
                </div>
                <div className="text-slate-600 p-3.5" onClick={handleShowMenu}>
                    <div className="text-3xl cursor-pointer w-10 h-10 rounded-full overflow-hidden drop-shadow">
                    {
                        userData.image ? <img src={userData.image} className="h-full w-full"/> : <FaUserCircle/>
                    }
                    
                    </div>
                    {showMenu && (<div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col min-w-[80px] text-center">
                        {
                            userData.email === process.env.REACT_APP_ADMIN_EMAIL && <Link to={"newproduct"} className="whitespace-nowrap cursor-pointer">New Product</Link>
                        }
                        {
                            userData.image ? <p className="cursor-pointer" onClick={handleLogout}>Logout ({userData.firstName}) </p> : <Link to={"login"} className="whitespace-nowrap cursor-pointer">Login</Link>
                        }
                        <nav className="flex text-base h-full flex-col md:hidden">
                        <Link to ="">Home</Link>
                        <Link to ="menu/64dde4f939bc653734443ce8">Menu</Link>
                        <Link to ="about">About</Link>
                        <Link to ="contact">Contact</Link>
                        </nav>
                    </div>)}
                    
                </div>
            </div>
           </div>
        

        { /* Mobile */ }
        </header>
    )
}

export default Header