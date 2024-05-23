import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useFoodplace from "./utils/useFoodplace";
import RestaurantCate from "./RestaurantCate";

const Foodplace = () => {
  const { id } = useParams();
  const resInfo = useFoodplace(id)
  const [showitems, setshowitems] = useState(0)
  // console.log(resInfo);
  
  if (resInfo === null) {
    return <Shimmer />;
  }
  // this is the name of restrauent.
  const { text } = resInfo?.cards[0]?.card?.card;
// this is the information about the menu, ye chiz ['@type'] isliye ki kuki error ata ni laga te to @ ni rocognize karra js .
  const category = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(elem =>elem.card?.card?.['@type']==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory') ;
  console.log(category)

  return (
    <>
      <div className="page2 flex flex-col items-center bg-zinc-200">
        <h2 className="font-black text-4xl pb-3">{text}</h2>
        {category.map((elem,index) => (
         <div className="w-full">
          <RestaurantCate key={elem.card?.card?.title} data={elem.card.card} showitems={index===showitems&&true} setshowitems={()=>setshowitems(index)}   />
          </div>
        ))}
      </div>
    </>
  );
};

export default Foodplace;
