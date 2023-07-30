import React from 'react';
import {Link} from 'react-router-dom';
import Background from '../assets/background.jpg';
import '../styles/Home.css';
function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${Background})`}}>
        <div className='headerContainer' >
            <h1 style={{color:'whitesmoke'}}>FoodCalling</h1>
            <p style={{color:'whitesmoke'}}>CALL THE TASTE</p>
            <Link to="/menu">
            <button>Order Now</button>
            </Link>
        </div>
    </div>
  )
}

export default Home;