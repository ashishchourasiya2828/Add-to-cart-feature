import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import Cart from './components/Cart'
import Button from './components/Button'
import axios from './components/Axios'

const App = () => {

  const [products, setproducts] = useState([])
  const [cartProduct, setcartProduct] = useState([])
  const getdata =async ()=>{
    const response = await axios.get("/products");
    // console.log(response.data);
    setproducts(response.data)
  }

   useEffect(()=>{
    getdata();
  },[])

  const cartHandler= (idx)=>{
    setcartProduct([...cartProduct,products[idx]])

  }

  const deleteHandler= (idx)=>{
    const copyArr = [...cartProduct]
    copyArr.splice(idx, 1);
    setcartProduct(copyArr);
  }
  return (
    <>
    <div className='h-screen w-full bg-zinc-200 gap-3 flex items-center justify-between p-4 ' >
      <Home cartHandler={cartHandler} products={products}  />
      <Cart deleteHandler={deleteHandler} cartProduct={cartProduct} />

    </div>
    </>
  )
}

export default App