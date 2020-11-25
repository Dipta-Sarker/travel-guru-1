import React from 'react';
import css from './Hotel.css';
const Hotel = (props) => {
    
    const{image, title,capacity,description,rating,price} =props.item;
    return (
        <div className="hotels">
            <div>
                <img className="hotel-img" src={image} alt=""/>
            </div>
            <div className="hotel-details">
                <h3>{title}</h3>
                <h5>{capacity}</h5>
                <h5>{description}</h5>
                <h5>{rating} $ {price}</h5>
            </div>
        </div>
    );
};

export default Hotel;