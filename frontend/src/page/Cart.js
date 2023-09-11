import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../component/CartProduct'
import emptyCartImage from '../assets/emptyCartImage.jpeg'

const Cart = () => {
    const productCartItems = useSelector((state)=>state.product.cartItem)
    const totalQty = productCartItems.reduce((acc, curr)=>acc + parseInt(curr.qty), 0)
    const totalPrice = productCartItems.reduce((acc, curr)=>acc + parseInt(curr.total), 0)
    return(
        <>
        
        <div className='p-2 md:p-4'>
            <h2 className='text-lg md:text-2xl font-bold text-slate-600'>Your Cart Items</h2>
            { productCartItems[0] ? 
            <div className='my-4 flex gap-3'>
                <div className='w-full max-w-3xl'>
                    {
                        productCartItems.map(e1 => {
                            return (
                                <CartProduct 
                                key={e1._id} 
                                id={e1._id}
                                name={e1.name}
                                price={e1.price}
                                image={e1.image}
                                category={e1.category}
                                qty={e1.qty}
                                total={e1.total}/>
                            )
                        })
                    }
                </div>
                
                <div className='w-full max-w-md ml-auto'>
                    <h2 className='bg-blue-500 text-white p-2 text-lg'>Summary</h2>
                    <div className='flex w-full py-2 text-lg border-b'>
                    <p>Total Quantity :</p>
                    <p className='ml-auto w-32 font-bold'>{totalQty}</p>
                    </div>
                    <div className="flex w-full py-2 text-lg border-b">
                    <p>Total Price :</p>
                    <p className='ml-auto w-32 font-bold'><span className='text-red-500'>₹</span>{totalPrice}</p>
                    </div>
                    <button className='bg-red-500 w-full text-lg font-bold text-white p-1'>Payment</button>
                </div>
            </div>
            : 
            <>
            <div className='flex w-full justify-center items-center flex-col'>
                <img src={emptyCartImage} className='w-full max-w-sm'></img>
                <p className='text-slate-700 text-3xl font-bold'>Your Cart is empty</p>
            </div>
            </>
        }
        </div>
        
        </>
    )
}

export default Cart