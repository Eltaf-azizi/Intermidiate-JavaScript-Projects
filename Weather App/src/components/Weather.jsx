import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.jpg'
import sunny_icon from '../assets/sunny.jpg'
import search_icon from '../assets/search.jpg'
import search_icon from '../assets/search.jpg'
import search_icon from '../assets/search.jpg'
import search_icon from '../assets/search.jpg'
import search_icon from '../assets/search.jpg'

const Weather = () => {
  return (
    <div className='weather'>
        <div className="search-bar">
            <input type="text" placeholder='Search' />
            <img src={search_icon} alt="" />
        </div>
        <img src={sunny_icon} alt="" className='weather-icon' />
        <p className='temperature'>16°c</p>
        <p className='location'>London</p>
    </div>
  )
}

export default Weather