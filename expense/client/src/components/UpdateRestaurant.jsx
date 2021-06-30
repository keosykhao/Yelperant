import React, {useState, useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantContext } from '../context/RestaurantContext';

const UpdateRestaurant = (props) => {
   const {id} =  useParams();
   const {restaurants} =  useContext(RestaurantContext);
   const [name, setName] =  useState("")
   const [location, setLocation] =  useState("")
   const [priceRange, setPriceRange] =  useState("")

    useEffect(()=>{
        const fetchData = async() =>{
            const response = await RestaurantFinder.get(`/${id}`)
            console.log(response.data.data)
            setName(response.data.data.name)
            setLocation(response.data.data.location)
            setPriceRange(response.data.data.price_range)
        };
        fetchData();
    },[]);
    const handleSubmit = async(e) =>{
        e.preventDefault()
        const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
            name,
            location,
            price_range: priceRange
        });
        console.log(updatedRestaurant);
    }

    return (
        <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange= {e => setName(e.target.value)} id="name" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Location</label>
                    <input value={location} onChange= {e =>setLocation(e.target.value)} id="location" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Price Range</label>
                    <input value={priceRange} onChange= {e =>setPriceRange(e.target.value)} id="price_range" className="form-control" type="number" />
                </div>
                <button  type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default UpdateRestaurant
