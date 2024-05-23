import React from "react";

function Items({ items }) {
    console.log(items)
  return (
    <>
      {items.itemCards.map((elem) => (
        <div className="mb-10 border-t-[1px] border-zinc-300 ">
          <div className=" rounded p-2 font-semibold text-lg flex justify-between items-center ">
            <div>
          <span>{elem.card.info.name}</span> 
          <br/> 
          rs{" "}<span>{elem.card.info.price/100||elem.card.info.defaultPrice/100}</span> 
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
