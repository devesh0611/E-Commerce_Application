import react from 'react'
import { Link } from "react-router-dom"
import { addcartItem } from '../redux/productSlice'
import { useDispatch } from 'react-redux'

const CardFeature = ({image, name, price, category, loading, id}) => {
    const dispatch = useDispatch()
    const handleAddCardProduct = (e)=>{
        dispatch(addcartItem({
            _id : id,
            name : name,
            price : price,
            category : category,
            image : image
        })) 
    }
    return (
    <div className='w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg pt-5 px-4 cursor-pointer flex flex-col justify-center'>
        {
            image ? <>
            <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top:"0", behaviour:"smooth"})}>
            <div className='w-40 min-h-[180px]'>
                    <img src={image} className='h-full w-full' />
        </div>
        <h3 className='font-semibold text-slate-600 capitalize text-lg mt-4'>{name}</h3>
        <p className='text-slate-500 font-medium'>{category}</p>
        <p className='font-bold'><span className='text-red-500'>₹</span><span>{price}</span></p>
        </Link>
        <button className='bg-yellow-500 py-1 mt-2 rounded mb-4 hover:bg-yellow-700 w-full' onClick={handleAddCardProduct}>Add Cart</button>
        
            </> : 
            <div className='min-h-[150px] flex justify-center items-center'>
            <p>{loading}</p>
            </div>

        }
        </div>
        
    )
}

export default CardFeature