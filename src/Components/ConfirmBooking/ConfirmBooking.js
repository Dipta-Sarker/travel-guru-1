import React from 'react';
import { useParams } from 'react-router-dom';
import FakeData from '../../Resources/FakeData/FakeData';
import Hotel from '../Hotel/Hotel';
const ConfirmBooking = () => {
    const {id} = useParams();
    const place = FakeData.find(item => item.id == id);
    const hotels = place.hotels;
    
    return (
        <div>
            <h1>{place.name}</h1>
            {
                hotels.map (item => <Hotel  item={item}></Hotel>)
            }

        </div>
    );
};

export default ConfirmBooking;