import React from 'react'
import './Weather.css'
import searchicon from '../assets/search.png'

const Weather = () => {
  return (
    <div className='weather'>
        <div className="search-bar">
            <input type="text" placeholder='Search' />
            <img src={searchicon} alt="" />
        </div>
    </div>
  )
}

export default Weather