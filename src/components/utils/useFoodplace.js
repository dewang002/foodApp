import React, { useEffect, useState } from 'react'

 function useFoodplace(id) {
    const [items, setitems] = useState(null)
    const foodItem = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`||`https://www.swiggy.com/restaurants/pizza-hut-h-c-sen-marg-omaxe-chandnichowk-delhi-${id}`)
         const json = await data.json();
        //  console.log(json.data);
         setitems(json.data);
       }

     useEffect(() => {
       foodItem()
      
     }, [])
     
      return items;
}

export default useFoodplace
