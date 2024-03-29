import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AllProduct from "../component/AllProduct";
import { addcartItem } from "../redux/productSlice";

const Menu = () => {
    const {filterby} = useParams()
    const dispatch = useDispatch()
    const productData = useSelector(state => state.product.productList)
    const productDisplay = productData.filter(e1 => e1._id === filterby)[0]

    const handleAddCardProduct = (e)=>{
        dispatch(addcartItem(productDisplay)) 
    }
    return (
        <div>
        <div className="p-4 md:p-5">
            <div className="w-full max-w-4xl m-auto md:flex bg-white gap-5">
                <div className="w-1/2 max-w-[400px] overflow-hidden max-h-[300px] min-w-[300px]">
                    <img src={productDisplay.image} className="hover:scale-105 transition-all h-full"/>
                </div>
                <div className="flex flex-col gap-1 max-w-[700px]">
                <h3 className='font-semibold text-slate-600 capitalize text-lg mt-4'>{productDisplay.name}</h3>
                <p className='text-slate-500 font-medium text-2xl'>{productDisplay.category}</p>
                <p className='font-bold md:text-2xl'><span className='text-red-500'>₹</span><span>{productDisplay.price}</span></p>
                <div className="flex gap-3">
                    <button className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-700 min-w-[100px]">Buy</button>
                    <button className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-700 min-w-[100px]" onClick={handleAddCardProduct}>Add Cart</button>
                
                </div>
                <div>
                    <p className="text-slate-700 font-medium">Description : </p>
                    <p>{productDisplay.description}</p>
                    
                </div>
                </div>
            </div>
            <AllProduct heading={"Related Products"} />
        </div>
        
        </div>
    )
}

export default Menu