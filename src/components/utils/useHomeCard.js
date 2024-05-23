import React, { useEffect, useState } from 'react'

function useHomeCard(setfilture) {
  const [card, setcard] = useState([]);

  useEffect(() => {
    fetching();
  }, []);

  const fetching = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );
      const result = await response.json();
      setcard(
        result.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setfilture(
        result.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    } catch (error) {
      // Handle errors here
      console.error("Error fetching data:", error);
    }
  };

  return card
}

export default useHomeCard
