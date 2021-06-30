import React, {useEffect, useContext} from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantContext } from '../context/RestaurantContext';

const RestaurantList = (props) => {
    // need to store our data
    const {restaurants, setRestaurants}= useContext(RestaurantContext)

    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const response = await RestaurantFinder.get("/")
                setRestaurants(response.data.data.restaurants);
           } catch (err) {}
        };
        fetchData();
        
    },[])


    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="table-primary">
                        <th scope="col">Restaurant</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price Range</th>
                        <th scope="col">Ratings</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { restaurants && restaurants.map(restaurant =>{
                        return(
                            <tr key = {restaurant.id}>
                            <td>restaurant.name</td>
                            <td>restaurant.location</td>
                            <td>{"$".repeat(restaurant.price_range)}</td>
                            <td>reviews</td>
                            <td>
                                <button className="btn btn-warning">Update</button>
                            </td>
                            <td>
                            <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>

                        )
                       
                    })}
                    {/* <tr>
                        <td>Jollibees</td>
                        <td>Las Vegas</td>
                        <td>$</td>
                        <td>Ratings</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr> */}
                </tbody>
            </table>
            
        </div>
    )
}

export default RestaurantList
