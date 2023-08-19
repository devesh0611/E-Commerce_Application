import React, { useRef, useState, useEffect } from "react";
import HomeCard from "../component/HomeCard";
import { useSelector } from "react-redux"
import CardFeature from "../component/CardFeature";
import {GrPrevious, GrNext} from "react-icons/gr"
import  FilterProduct  from "../component/FilterProduct"

const Home = () => {
    const  productData = useSelector((state)=>state.product.productList)
    console.log(productData)
    const homeProductCartList = productData.slice(20, 23)
    const homeProductCartListVegetable = productData.filter(e1 => e1.category === "vegetables", [])
    console.log(homeProductCartListVegetable)

    const loadingArray = new Array(3).fill(null)
    const loadingArrayFeature = new Array(10).fill(null)

    const slideProductRef = useRef()

    const nextProduct = () => {
       slideProductRef.current.scrollLeft += 200
    }
    const prevProduct = () => {
        slideProductRef.current.scrollLeft -= 200
    }

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
        <div className="p-2 md:p-4">
        <div className="md:flex gap-6 py-2">
        <div className="md:w-1/2">
            <div className="flex gap-3 bg-slate-300 w-40 px-2 items-center rounded-full">
                <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
                <img src="https://zampabollos.com/wp-content/uploads/2020/10/x3-37779_transparent-delivery-png-delivery-boy-with-bike-png-1-860x860.png.pagespeed.ic_.9YBXeeJsCG.png" className="h-10" />
            </div>
            <h2 className="text-4xl md:text-7xl font-bold py-3">The Fastest Delivery in <span className="text-red-600 text-">Your Home</span></h2>
            <p className="py-3 text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <button className="text-bold bg-red-600 text-slate-200 px-4 py-1 rounded-md">Order Now</button>
        </div>
        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
            {

                homeProductCartList[0] ? homeProductCartList.map(e1=>{
                    return (
                        <HomeCard 
                        key={e1._id}
                        image={e1.image}
                        name={e1.name}
                        price={e1.price}
                        category={e1.category}
                        />
                        

                    )
                }) : 
                loadingArray.map((e1, index)=> {
                    return (
                        <HomeCard 
                        key={index}
                        loading={"Loading.."}
                        />
                    )
                })
            }    
        </div>
        </div>
        <div className="">
            <div className="flex w-full items-center">
            <h2 className="font-bold text-2xl text-slate-800 mb-2 mt-20">Fresh Vegetables</h2>
            <div className="ml-auto flex gap-4">
                <button onClick={prevProduct} className="bg-slate-300 hover:bg-slate-400 text-lg p-1">
                    <GrPrevious />
                </button>
                <button onClick={nextProduct} className="bg-slate-300 hover:bg-slate-400 text-lg p-1">
                    <GrNext />
                </button>
            </div>
            </div>
            
            <div className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all" ref={slideProductRef}>
                {
                    homeProductCartListVegetable[0] ? 
                    homeProductCartListVegetable.map(e1 => {
                        return (
                            <CardFeature
                            key={e1._id}
                            name={e1.name}
                            category={e1.category}
                            price={e1.price}
                            image={e1.image}
                             />
                        )
                    }) :
                    loadingArrayFeature.map(e1 => 
                    <CardFeature loading="Loading..." 
                    />)
                }
            </div>
        </div>

        <div className="">
            <h2 className="font-bold text-2xl text-slate-800 mb-4 mt-20">
                Your Product
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

export default Home