import React from 'react';
import Logo from '../../Resources/Icon/Logo.png';
import Css from './Header.css';
import {Link}from "react-router-dom";
const Header = () => {
    return (
        <div>
          
         <nav class=" navbar navbar-light bg-light navbar-expand-sm">

                <span class="ml-5 logo">
                    <img src={Logo} width="100" alt="Logo"/>
                </span>
               
                <form class="form-inline mr-auto ml-5 form">
               
                    <input id="1" class="form-control mr-sm-2 my-10" type="search" placeholder="Search" aria-label="Search"/>
                    <button  id ="2" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <ul class="navbar-nav mr-5">
                    <li class="nav-item">
                        <a href="/news" class="nav-link">News</a>
                    </li>
                    <li class="nav-item">
                        <a href="/destination" class="nav-link">Destination</a>
                    </li>
                    <li class="nav-item">
                        <a href="/blog" class="nav-link">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a href="/contact" class="nav-link">Contact</a>
                    </li>
                    <li class="nav-item">
                        <Link to={"/login"}>
                        <button class="nav-link btn btn-warning">Login</button>
                        </Link>
                    </li>
                </ul>
        </nav>
           
        </div>
    );
};

export default Header;