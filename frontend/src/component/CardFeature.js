import react from 'react'

const CardFeature = ({image, name, price, category, loading}) => {
    return (
    <div className='w-full min-w-[200px] bg-white hover:shadow-lg drop-shadow-lg pt-5 px-4 cursor-pointer flex flex-col justify-center'>
        {
            image ? <>
            <div className='w-40 min-h-[180px]'>
                    <img src={image} className='h-full w-full' />
        </div>
        <h3 className='font-semibold text-slate-600 capitalize text-lg mt-4'>{name}</h3>
        <p className='text-slate-500 font-medium'>{category}</p>
        <p className='font-bold'><span className='text-red-500'>₹</span><span>{price}</span></p>
        <button className='bg-yellow-500 py-1 mt-2 rounded mb-4'>Add Cart</button>
            </> : 
            <div className='min-h-[150px] flex justify-center items-center'>
            <p>{loading}</p>
            </div>

        }
        </div>
        
    )
}

export default CardFeature