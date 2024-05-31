import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useStatus from "./utils/useStatus";
import UserContext from "./partial/UserContext";
import { useSelector } from "react-redux";

const Nav = ({ nav }) => {
  //selector hook 
  const cart = useSelector(elem =>elem.cart.items)
  console.log(cart)
    const [sign, setsign] = useState("Log-in")
    const status = useStatus();
    const {loggedIn} =  useContext(UserContext)
      return (
        <div className="nav flex justify-between items-center p-10 bg-zinc-500  backdrop-blur-md  shadow-xl h-16 w-full text-white ">
        <Link className="bg-zinc-800 bg-opacity-30 p-2 rounded hover:bg-sky-700" to="/"><h3>{nav}</h3> </Link>
        <Link className="bg-zinc-800 bg-opacity-30 p-2 rounded hover:bg-sky-700" to="/grocery"><h3>Grocery</h3> </Link>
        <Link className="bg-zinc-800 bg-opacity-30 p-2 rounded hover:bg-sky-700" to="/"><h3>online status:{status?"✔":"😢"}</h3> </Link>

    <button className={`${sign==="Log-in"?"bg-green-600":"bg-red-600"} p-2 rounded w-20`} onClick={()=>sign==="Log-in"?setsign("Log-out"):setsign("Log-in")} >{sign}</button>
        <Link to="/cart" className="list-none font-bold">cart ( {cart.length} )</Link>
        <Link className="bg-zinc-800 bg-opacity-30 p-2 rounded hover:bg-sky-700" to="/about"> <h3>About</h3> </Link> 
        <Link className="bg-zinc-800 bg-opacity-30 p-2 rounded hover:bg-sky-700" > <h3>{loggedIn}</h3> </Link> 
          
        </div>
      )}

export default Nav
