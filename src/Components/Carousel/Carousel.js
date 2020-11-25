import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../../Resources/FakeData/FakeData';
import Css from './Carousel.css';

const Carousel = () => {
    
    const [coxsBazar,sundorbon,sreemongol,sajek] = Data;

    return (
         <div>
            <div className="details">
                <h1>SUNDARBAN</h1>
    
                <p>
            The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal..

                </p>
                
              <Link to={`/booking/${sundorbon.id}`}><button class="btn btn-success">Booking</button></Link>  

            </div>

            <div className="cart d-flex">
                <div className="card mr-2 " style={{width: '17rem'}}>
                <Link to={`/booking/${coxsBazar.id}`}>
                    <img src={coxsBazar.image} class="card-img-top" style={{height: '20rem'}} alt="..."/>
                </Link>    
                </div>

                <div className="card mr-2" style={{width: '17rem'}}>
                 <Link to={`/booking/${sreemongol.id}`}>
                    <img src={sreemongol.image} class="card-img-top" style={{height: '20rem'}} alt="..."/>
                 </Link>                
                </div>

                <div className="card mr-2" style={{width: '17rem'}}>
                 <Link to={`/booking/${sundorbon.id}`}>
                  <img src={sundorbon.image} class="card-img-top" style={{height: '20rem'}} alt="..."/>
                </Link>                      
                </div>

                <div className="card" style={{width: '17rem'}}>
                <Link to={`/booking/${sajek.id}`}>
                    <img src={sajek.image} class="card-img-top" style={{height: '20rem'}} alt="..."/>  
                 </Link>     
                </div>
            </div>
        </div>
    );
};

export default Carousel;