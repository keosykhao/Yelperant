import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantContext } from '../context/RestaurantContext'

const RestaurantPage = () => {
    const {id} = useParams()
    const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantContext);

   useEffect(()=>{
       const fetchData = async () => {
           try {
            const response = await RestaurantFinder.get(`/${id}`);
            setSelectedRestaurant(response.data.data.restaurant)
           } catch (err) {
               console.log(err)
           }
         
       }
       fetchData();
   })
    return (
        <div>
            {selectedRestaurant && selectedRestaurant.name}
        </div>
    )
}

export default RestaurantPage
