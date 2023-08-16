import React, { useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { ImagetoBase64 } from "../utility/imagetoBase64";
import { toast } from "react-hot-toast";

const NewProduct = () => {
     
     const [data, setData] = useState( {
        name : "",
        category : "",
        image : "",
        price: "",
        description : "",
     })

     const handleOnChange = (e) => {
        const {name, value} = e.target
        setData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })
     }
     
     const uploadImage = async(e) => {
        const data = await ImagetoBase64(e.target.files[0])
        console.log(data)

        setData((preve) => {
            return {
                ...preve,
                image : data
            }
        })
     }

     const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(data)
        

        const {name, image, category, price} = data
        if(name && image && category && price) {
            const fetchData = await fetch( `${process.env.REACT_APP_SERVER_DOMAIN}/uploadProduct`, {
                method : 'POST',
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify(data)
            })
    
            const fetchRes = await fetchData.json()
            console.log(fetchRes)
            toast(fetchRes.message)
        }
        else {
            toast("Enter required Fields")
        }
        
     }
    return (
        <div className="p-4">
            <form className="m-auto w-full max-w-md shadow flex flex-col p-3 bg-white" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type={"text"} name="name" className="bg-slate-200 p-1 my-2" onClick={handleOnChange} />
                
                <label htmlFor="category">Category</label>
                <select className="bg-slate-200 p-1 my-2" id="category" name="category" onClick={handleOnChange}>
                    <option value={"other"}>Select Category</option>
                    <option value={"fruits"}>Fruits</option>
                    <option value={"vegetables"}>Vegetables</option>
                    <option value={"ice-cream"}>Ice-Cream</option>
                    <option value={"dosa"}>Dosa</option>
                    <option value={"pizza"}>Pizza</option>
                    <option value={"rice"}>Rice</option>
                </select>

                <label htmlFor="image">Image
                <div className="h-40 w-full bg-slate-200 rounded flex items-center justify-center cursor-pointer">
                    {
                        data.image ? <img src={data.image} className="h-full"/> : <span className="text-6xl"><BsCloudUpload/></span>
                    }
                <input type ={"file"} id="image" accept="image/*" onChange={uploadImage} className="hidden"/>
                </div>
                </label>


                <label htmlFor="price" className="my-2">Price</label>
                <input type ={"text"} name="price" className="bg-slate-200 p-1 my-2" onClick={handleOnChange} />

                <label htmlFor="description">Description</label>
                <textarea rows={3} className="bg-slate-200 p-1 my-2 resize-none" name="description" onClick={handleOnChange}></textarea>

                <button className="max-w-[120] w-full m-auto bg-gray-600 hover:bg-gray-700 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">Save</button>
            </form>
        </div>
    )
}

export default NewProduct