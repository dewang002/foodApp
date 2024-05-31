import React from 'react'
import Items from '../components/Items'
import { useDispatch, useSelector } from 'react-redux'
import { clearItems } from './reducers/cartSlice'
function Cart() {
    const dispatch = useDispatch()

    const items = useSelector(store=>store.cart.items)
    const handleClick=()=>{
        dispatch(clearItems())
    }
  return (
    <div className='text-center mx-auto p-4 m-4 w-5/12'>
        <h1 className='text-xl pb-10'>Cart</h1>
      <button onClick={handleClick} className='bg-red-600 p-3 rounded text-white'>ClearCart</button>
      <Items items={items} />
      {items.length===0&&<h1>no items to show</h1>}
   
    </div>
  )
}

export default Cart
