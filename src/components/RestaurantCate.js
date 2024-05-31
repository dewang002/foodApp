import React, { useState } from 'react'
import Items from './Items'

function RestaurantCate({data,showitems,setshowitems}) {
  //  console.log(setshowitems)
    console.log(data)
  return (
    <div className=' w-6/12 mx-auto rounded drop-shadow-1xl m-4 '>
     <div onClick={()=>setshowitems()} className='w-full  h-[6vh] flex justify-between items-center p-2 bg-zinc-300 cursor-pointer rounded text-xl'>
       <span>{data.title} ({data.itemCards.length})</span> 
       <span>🔽</span>
        </div> 
        <div className='p-2 '>
            {showitems&&<Items items={data} btn={"Add+"}  />}
        </div>
    </div>
  )
}

export default RestaurantCate
