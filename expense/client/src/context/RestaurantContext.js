import React, {useState, createContext} from 'react';


export const RestaurantContext = createContext();

export const RestaurantContextProvider = props => {
    const [Restaurants, setRestaurants]= useState([])
    return(
        <RestaurantContext.Provider value={{restaurants, setRestaurants}}> 
            {props.children}
        </RestaurantContext.Provider>
    )
}