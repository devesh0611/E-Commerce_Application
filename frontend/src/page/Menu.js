import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Menu = () => {
    const {filterby} = useParams()
    const productData = useSelector(state => state.product.productList)
    console.log(productData)
    const productDisplay = productData.filter((e1) => e1._id === filterby)[0]
    console.log(productDisplay)
    console.log(productDisplay.image)
    return (
        <div className="p-2 md:p-4">
            <div className="w-full max-w-4xl m-auto md:flex bg-white gap-5">
                <div className="w-1/2 max-w-lg overflow-hidden">
                    <img src={productDisplay.image} className="hover:scale-105 transition-all"/>
                </div>
                <div className="flex flex-col gap-1">
                <h3 className='font-semibold text-slate-600 capitalize text-lg mt-4'>{productDisplay.name}</h3>
                <p className='text-slate-500 font-medium text-2xl'>{productDisplay.category}</p>
                <p className='font-bold md:text-2xl'><span className='text-red-500'>₹</span><span>{productDisplay.price}</span></p>
                <div className="flex gap-3">
                    <button className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-700 min-w-[100px]">Buy</button>
                    <button className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-700 min-w-[100px]">Add Cart</button>
                
                </div>
                <div>
                    <p className="text-slate-700 font-medium">Description : </p>
                    <p>{productDisplay.description}</p>
                    
                </div>
                </div>
            </div>
        </div>
    )
}

export default Menu