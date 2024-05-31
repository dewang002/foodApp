import React from "react";
import { useDispatch } from "react-redux";
// dikkt yaha hue
import { addItems } from "../components/reducers/cartSlice";

function Items({ items,btn }) {
    console.log(items)
    const dispatch = useDispatch()
    // tissri dikkt yaha hue
    const handleClick = (item)=>{
      dispatch(addItems(item))
    }
  return (
    <>
      {(items.itemCards || items ).map((elem) => (
        <div className="mb-10 border-t-[1px] border-zinc-300 ">
          <div className=" rounded p-2 font-semibold text-lg flex justify-between items-center ">
            <div>
          <span>{elem.card.info.name}</span> 
          <br/> 
          rs{" "}<span>{elem.card.info.price/100||elem.card.info.defaultPrice/100}</span> 
          <br/>
          {/* dusri dikkt yaha hue */}
          <button onClick={()=>handleClick(elem)} className="bg-green-600 p-1 rounded text-white">{btn}</button>
         </div>
         <img className="w-[100px] object-cover h-[100px] rounded" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${elem.card.info.imageId} `} alt="error" />
          </div>
          <p>{elem.card.info.description}</p>
        </div>
      ))}
    </>
  );
}

export default Items;
