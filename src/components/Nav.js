import { useState } from "react";
import { Link } from "react-router-dom";
import useStatus from "./utils/useStatus";

const Nav = ({ nav }) => {
    const [sign, setsign] = useState("Log-in")
    const status = useStatus();
      return (
        <div className="nav flex justify-between items-center p-10 bg-zinc-500 h-16 w-full text-white ">
        <Link className="bg-zinc-800 p-2 rounded hover:bg-sky-700" to="/"><h3>{nav}</h3> </Link>
        <Link className="bg-zinc-800 p-2 rounded hover:bg-sky-700" to="/grocery"><h3>Grocery</h3> </Link>
        <Link className="bg-zinc-800 p-2 rounded hover:bg-sky-700" to="/"><h3>online status:{status?"✔":"😢"}</h3> </Link>

    <button className={`${sign==="Log-in"?"bg-green-600":"bg-red-600"} p-2 rounded w-20`} onClick={()=>sign==="Log-in"?setsign("Log-out"):setsign("Log-in")} >{sign}</button>
        <Link className="bg-zinc-800 p-2 rounded hover:bg-sky-700" to="/about"> <h3>About</h3> </Link> 
          
        </div>
      );
    };

export default Nav
