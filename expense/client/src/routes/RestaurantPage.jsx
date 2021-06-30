import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantContext } from '../context/RestaurantContext'

const RestaurantPage = () => {
    const {id} = useParams()
    const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantContext);

    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])
    return (
        <div>
            Restaurant Detail
        </div>
    )
}

export default RestaurantPage
