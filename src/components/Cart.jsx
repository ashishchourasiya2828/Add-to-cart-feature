import React from 'react'

const Cart = ({cartProduct,deleteHandler}) => {
  return (
    <div className='w-1/4 h-full  rounded-lg ' >
        <h1 className='font-semibold text-2xl' >Cart</h1>
        <div className='  h-[42vw] flex flex-col gap-2 w-full overflow-y-auto p-2 ' >
            {
                cartProduct.map(function(elem,idx){
                    return  <div key={idx} className='w-full flex p-2 rounded-md bg-white' >
                    <div className='h-32 w-32 rounded-md  overflow-hidden' >
                    <img className='w-full h-full object-center' src={elem.image} alt="" />
                    </div>
                    <div>
    
                    <div className='p-2' >
                        <h1 className='text-lg w-[11vw] leading-[1.5vw]  font-semibold  ' >{elem.title}</h1>
                    </div>
                    <div className='flex  items-center justify-between w-full h-[5vw] ' >
                        <h1 className='text-xl font-bold m-3' > {elem.price}$</h1>
                        <div>
                        <button onClick={()=>{deleteHandler(idx)}} className='bg-red-600 text-white rounded-md px-3 py-2 font-semibold' >Delete</button>
                        </div>
                    </div>
                    </div>
    
                </div>
                })
            }
       
        
        </div>
    </div>
  )
}

export default Cart