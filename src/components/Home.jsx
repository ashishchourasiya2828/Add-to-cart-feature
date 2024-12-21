import React, { useState } from 'react'
import Button from './Button';

const Home = ({products,cartHandler}) => {
    // console.log(products);
    const [isExpanded, setisExpanded] = useState(false)
    const maxCharacters = 100;


  const toggleDescription = () => {
    setisExpanded(!isExpanded);
  };

  return (
    <div className='bg-white w-3/4 h-full p-3 rounded-lg' >
        <div className='flex justify-between w-full' >
        <h1 className='text-2xl font-bold mb-3' >Products</h1>
        </div>
        <div className='bg-white border-[1px] border-zinc-400 w-full flex flex-wrap overflow-y-auto gap-2 rounded-lg h-[40vw] p-4' >
           

            {
                products.map(function(elem,idx){
                    return  <div key={idx} className='h-[28vw] text-center w-[22vw]  bg-gray-100 border-[1px] border-zinc-200 flex flex-col p-2 items-center  rounded-md ' >
                    <div className='h-40 w-40 mt-4  bg-red-400 overflow-hidden rounded-md ' >
                        <img className='h-full w-full object-center' src={elem.image} alt="" />
                    </div>
                    <h1 className='text-xl font-semibold mb-3 mt-4 h-12 leading-none tracking-tight' >{elem.title}</h1>
                    {console.log(elem.description.substring(0, maxCharacters))}

                    <p className='text-sm ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eius corrupti inventore.</p>
                        
                    <h1 className='font-bold text-2xl mb-2' >${elem.price}</h1>
                    <button onClick={()=>{cartHandler(idx)}} className='px-4 py-2 bg-blue-600 rounded-md text-white' >Add to cart</button>
                </div>
                })
            }
        </div>

    </div>
  )
}

export default Home