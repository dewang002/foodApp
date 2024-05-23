import { Link } from "react-router-dom";

const Card = ( props ) => {
      const {s} = props
      const { avgRating, name, costForTwo,cloudinaryImageId} = s?.info;
    
    return (
      <>
      <div  className="card h-full w-full border bg-zinc-400 rounded overflow-hidden">
          <div className="top h-[14vw] bg-zinc-700 ">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId
}`} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="bottom text-center text-white">
            <h1>Rating:{avgRating}</h1>
            <h1 >{name}</h1>
            <h1 className=" font-bold">cost:{costForTwo}</h1>
          </div>
        </div>
       
      </>
    );
  };

  // ----This is higher order function----
export const Open = (WrappedComponent)=>{
  return ( props )=>{
    // const { avgRating, name, costForTwo } = s;
    return (
      <div>
        <label className="font-bold text-white bg-green-700 p-2 rounded absolute">open</label>
        <WrappedComponent  {...props}/>
      </div>
    )
  }
 }
//  --------------------------------------------
  export default Card;