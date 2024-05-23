import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import { Suspense } from "react";
import { lazy } from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import Error from "./components/Error";
import About from "./components/About";
import Nav from "./components/Nav";
import AllfoodItems from "./components/AllfoodItems";
import Foodplace from "./components/Foodplace";
// ----import Classe from "./src/components/Classe";

// ----this is jsx not js---

//----lazy loading is done below ---
const Grocery = lazy(()=>import("./components/Grocery"))
//---lazy loading is done above---

const Mainpage=()=>{
  return(
    <>
    <div className="page1">
     <Nav nav={"Logo"} />
     {/* --- yaha sirf children ate hai outlet mai --- */}
     <Outlet />
    </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
const Routing = createBrowserRouter([
  {path:'/',
    element: <Mainpage />,
     children:[
      {path:'/',
     element: <AllfoodItems />,
    },
      {path:'/about',
     element: <About />
   },
      {path:'/grocery',
     element: <Suspense fallback={<h1>loading...</h1>}><Grocery /></Suspense> 
   },
      {path:'/foodplace/:id',
     element: <Foodplace />
   }
  ],
  // ----uper mai sai koi bhi url match na hua to ye chale ga error Element----
    errorElement:<Error />
  },
  
 
])
root.render(<RouterProvider router ={Routing} />)

