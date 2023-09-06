import React from 'react'
import { useState, useEffect } from 'react'
import FilterProduct from './FilterProduct'
import CardFeature from './CardFeature'
import { useSelector } from 'react-redux'

const AllProduct = ({heading}) => {
    const  productData = useSelector((state)=>state.product.productList)
    console.log(productData)
    const categoryList = [...new Set(productData.map(e1=>e1.category))]
    console.log(categoryList)
    // filter data display 
    const [filterby, setFilterBy] = useState("") 
    const [dataFilter, setDataFilter] = useState([])
    useEffect(()=>{
       setDataFilter(productData)
    }, [productData])

    const handleFilterProduct = (category) => {
        const filter = productData.filter(e1 => e1.category.toLowerCase() === category.toLowerCase())
        setDataFilter(()=>{
            return [
               ...filter
            ]
        })
    }

    return (
        <div>
            <div className="my-5">
            <h2 className="font-bold text-2xl text-slate-800 mb-4 mt-20">
                {heading}
            </h2>

            <div className=" flex gap-4 justify-center overflow-scroll scrollbar-none">
                {
                    categoryList[0] && categoryList.map(e1 => {
                        return (
                            <FilterProduct category={e1} onClick={()=>handleFilterProduct(e1)}/>
                        )
                    })
                }
                
            </div>

            <div className="flex flex-wrap justify-center gap-4 my-4">
                {
                    dataFilter.map(e1 => {
                        return (
                            <CardFeature
                               key={e1._id}
                               id={e1._id}
                               image={e1.image}
                               name={e1.name}
                               category={e1.category}
                               price={e1.price}
                            />
                        )
                    })
                }
            </div>
        </div>
        </div>
    )
}

export default AllProduct 