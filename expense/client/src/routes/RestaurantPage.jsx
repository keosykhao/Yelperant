import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantContext } from '../context/RestaurantContext'
import Reviews from '../components/Reviews'
import AddReviews from '../components/AddReviews'

const RestaurantPage = () => {
    const {id} = useParams()
    const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantContext);

   useEffect(()=>{
       const fetchData = async () => {
           try {
            const response = await RestaurantFinder.get(`/${id}`);
            
            setSelectedRestaurant(response.data.data)

           } catch (err) {
               console.log(err)
           }
         
       }
       fetchData();
   })
    return (
        <div>

            {selectedRestaurant && (
            <>
            <h1 className="text-center">{selectedRestaurant.restaurant.name}</h1>
            <div className="mt-3">
                <Reviews reviews={selectedRestaurant.reviews}/>

            </div>
            <AddReviews/>
            </>
            )}
        </div>
    )
}

export default RestaurantPage
