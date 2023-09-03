import React, { useContext } from 'react'

// import our global context
import { GlobalContext } from '../GlobalContextProvider'

export default function CartItemCard({item}) {
  const{increaseQuantityHandler,decreaseQuantityHandler , removeFromCartHandler} = useContext(GlobalContext)

  return (
    <div className="bg-white rounded-md shadow-md flex p-4 text-slate-800 max-h-[175px]">
        <div>
            <img src={item.imgURL} className="w-24 md:w-28 lg:w-36 lg:max-h-[145px] object-contain" alt="" />
        </div>
        <div className="mr-4 flex flex-auto flex-col justify-around">
            <p className='font-semibold md:text-lg'>{item.title}</p>
            <span className="text-orange-600 font-semibold md:text-lg">{item.priceTag} تومان</span>
        </div>
        <div className="flex flex-col items-end justify-around">
            <button onClick={(e)=> removeFromCartHandler(item)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-5 h-5 stroke-orange-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            <div className="flex items-center gap-x-2">
                <button onClick={(e)=> increaseQuantityHandler(item)} className="bg-gray-300 rounded-full w-4 h-4 md:w-6 md:h-6 flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                  </svg>
                </button>
                <span className="border border-orange-400 en-font py-1 px-1.5 rounded-sm md:text-lg">
                  {item.quantity}
                </span>
                <button onClick={(e)=> decreaseQuantityHandler(item)} className="bg-orange-100 rounded-full w-4 h-4 md:w-6 md:h-6 flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                  </svg>
                </button>
            </div>
        </div>
    </div>
  )
}
