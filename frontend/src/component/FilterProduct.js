import React from 'react'
import { CiForkAndKnife } from 'react-icons/ci'

const FilterProduct = ({category, onClick, isActive}) => {
    return (
        <div onClick={onClick}>
        <div className={`text-2xl p-6 bg-yellow-500 rounded-full cursor-pointer" ${isActive && "bg-red-900 text-white"}`}>
            <CiForkAndKnife />
        </div>
        <p className='text-center font-medium my-1 capitalize'>{category}</p>
        </div>
    )
}

export default FilterProduct