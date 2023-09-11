import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
    productList : [],
    cartItem : []
}

export const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {
        setDataProduct : (state, action)=>{
            state.productList = [...action.payload]
        },
        addcartItem : (state, action)=>{
            const check = state.cartItem.some(e1=>e1._id === action.payload._id)
            const total = action.payload.price
            if(check) {
                toast("Item is already in Cart");
            }
            else {
                toast("One item added successfully");
                const total = action.payload.price
                state.cartItem = [...state.cartItem, {...action.payload, qty : 1, total : total}]
            }
            
        },
        deleteCartItem : (state, action)=>{
            toast("One Item is Deleted")
            const index = state.cartItem.findIndex((e1)=>e1._id === action.payload)
            state.cartItem.splice(index, 1)
        },
        increaseQty : (state, action)=>{
            const index = state.cartItem.findIndex((e1)=>e1._id === action.payload)
            let qty = state.cartItem[index].qty
            const qtyInc = ++qty
            state.cartItem[index].qty = qtyInc
            const price = state.cartItem[index].price
            const total = price*qtyInc
            state.cartItem[index].total = total

        },
        decreaseQty : (state, action)=>{
            const index = state.cartItem.findIndex((e1)=>e1._id === action.payload)
            let qty = state.cartItem[index].qty
            if(qty>1) {
                const qtyDec = --qty
            state.cartItem[index].qty = qtyDec
            const price = state.cartItem[index].price
            const total = price*qtyDec
            state.cartItem[index].total = total
            }
        }
    }
})

export const {setDataProduct, addcartItem, deleteCartItem, increaseQty, decreaseQty} = productSlice.actions

export default productSlice.reducer