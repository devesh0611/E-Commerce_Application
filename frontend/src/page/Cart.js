import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../component/CartProduct'

const Cart = () => {
    const productCartItems = useSelector((state)=>state.product.cartItem)
    console.log(productCartItems)
    return(
        <div className='p-2 md:p-4'>
            <h2 className='text-lg md:text-2xl font-bold text-slate-600'>Your Cart Items</h2>
            <div className='my-4'>
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
                Total Cart Items
                <div className=''></div>
            </div>
        </div>
    )
}

export default Cart