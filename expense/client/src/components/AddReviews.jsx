import React, { useState } from 'react'
import {  useParams, useHistory, useLocation } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'

const AddReviews = () => {
    const location = useLocation();
    const history = useHistory();
    console.log(location)
    const {id} = useParams();
    console.log(id);


    const [name, setName] = useState("")
    const [reviewText, setReviewText] = useState("")
    const [rating, setRating] = useState("Rating")


    const handleSubmitReview = async(e) =>{
       try {
        e.preventDefault()
        const response = await RestaurantFinder.post(`/${id}/addReview`, {
            name,
            review: reviewText,
            rating
        })
        // this sets it so when we add a review it updates and stays on this page
        history.push("/");
        history.push(location.pathname);
       } catch (error) {}
    }
    return (
        <div className="mb-2">
            <form action="">
                <div className="form-row">
                    <div className="form-group col-8">
                        <label htmlFor="name">Name</label>
                        <input value={name} 
                                onClick={(e) => setName(e.target.value)}
                                id="name" 
                                placeholder="name" 
                                type="text" 
                                className="form-control" />
                    </div> 
                    <div className="form-group col-4">
                        <label htmlFor="rating">Rating</label>
                        <select
                            value={rating}
                            onClick= {(e)=> setRating(e.target.value)}  
                            id="rating" 
                            className="custom-select">
                        <option disabled>Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="Review">Review</label>
                    <textarea
                        onClick={(e)=> setReviewText(e.target.value)}
                        value={reviewText}
                        id="Review" 
                        className="form-control"></textarea>
                </div>
                <button type="submit" onClick={handleSubmitReview} className="btn btn-primary">Submit</button>
            </form>
            
        </div>
    )
}

export default AddReviews
