import logo from './logo.svg';
import './App.css';
import Header from './component/header.js';
import { Outlet } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { setDataProducer, setDataProduct } from './redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.product)
  console.log(productData)
  useEffect(()=>{
    (async()=>{
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/product`)
      const resData = await res.json()
      dispatch(setDataProduct(resData)) 
    })()
  },[])
  return (
    <>
    <Toaster />
    <div>
      <Header/>
      <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
        <Outlet/>
      </main>
    </div>
    </>
  );
}

export default App;
