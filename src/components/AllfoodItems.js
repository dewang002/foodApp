import { useState, useEffect } from "react";
import Card,{Open} from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useHomeCard from "./utils/useHomeCard";
import useStatus from "./utils/useStatus";
const Body = () => {
 
  const [filture, setfilture] = useState([]);
  const [search, setSearch] = useState("");

  const status = useStatus()
  // custom hook hai ye " use " jo likha hua hai
// This card is accepting two data one is card and one through this argument setfilture.
  const card = useHomeCard(setfilture)

// here we accept the higher order function & put the Card component in it.
  const OpenTime= Open(Card);

  console.log(filture)
  if (status === false)return("check you internet")
  return card.length != 0 ? (
    <>
      {/* <Outlet /> */}
      <div className="boddy bg-zinc-200  h-[100vh] w-full ">
        <div className="nav2 ">
          <button className="bg-red-200 p-2"
            onClick={() => {
              const filtured = card.filter((elem) =>
                elem.info.name.toUpperCase().includes(search.toUpperCase())
              );
              setfilture(filtured);
            }}
          >
            click
          </button>

          <input
          className="p-2 rounded outline-none"
            type="text"
            placeholder="search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
<div className=" flex flex-wrap h-full w-full justify-center ">
        {filture.map((elem) => (
        <Link className="m-1 h-[40%] w-[14%]" to={`/foodplace/${elem.info.id}`} key={elem.info.id}>
         {elem.info.isOpen ? (<OpenTime s={elem} />) :( <Card s={elem} />) }  
           </Link> 
        ))}
</div>
      </div>
    </>
  ) : (
    <h1>
      {" "}
      <Shimmer />{" "}
    </h1>
  );
};

export default Body;
