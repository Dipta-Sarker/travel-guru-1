import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../Resources/FakeData/FakeData';
import Css from './Booking.css';
import { Link} from "react-router-dom";
const Booking = () => {   
    const {id} = useParams()
    const location = Data.find(item => item.id == id);
    const {name} = location;
    return (
        <div>
            <div className="location">
                <h1>{location.name}</h1>
                <p>{location.description}</p>
            </div>
            <div className="main-from">
                <label>
                 Name 
                    <br/>
                    <input type="text"/>
                </label>
                <br/>
                <label>Destination
                    <br/>
                    <input type="text" defaultValue={name}/>
                </label>
                <br/>
                <label>From 
                    <br/>
                    <input type="date"/>
                </label>
                <label>
                    To <br />
                    <input type="date" />
                </label><br />
                <Link to={`/confirmBooking/${id}`}>
                <button className="form-button">Start Booking</button>
                </Link>                
            </div>
        </div>
    );
};

export default Booking;