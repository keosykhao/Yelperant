import React, {useEffect} from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';

const RestaurantList = () => {

    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const response = await RestaurantFinder.get("/")
                console.log(response)
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
                    <tr>
                        <td>Jollibees</td>
                        <td>Las Vegas</td>
                        <td>$</td>
                        <td>Ratings</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}

export default RestaurantList
