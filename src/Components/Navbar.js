import React ,{useState} from 'react'
import '../index.css'

function Navbar() {
    return (
        <ul>
            <h3>Fashion Feet Shoe Store </h3>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#news">Products</a></li>
            <li><a class="active" href="#home">Home</a></li>
            
        </ul>
        
       
    )
}

export default Navbar
