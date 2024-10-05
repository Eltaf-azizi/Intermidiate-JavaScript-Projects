import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.jpg'
import sunny_icon from '../assets/sunny.jpg'
import humidity_icon from '../assets/humidity.jpg'
import wind_icon from '../assets/wind.jpg'
import search_icon from '../assets/search.jpg'
import search_icon from '../assets/search.jpg'
import search_icon from '../assets/search.jpg'

const Weather = () => {
  const search = async(city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data)

    }catch(error) {

    }
  }
  
  return (
    <div className='weather'>
        <div className="search-bar">
            <input type="text" placeholder='Search' />
            <img src={search_icon} alt="" />
        </div>
        <img src={sunny_icon} alt="" className='weather-icon' />
        <p className='temperature'>16°c</p>
        <p className='location'>London</p>
        <div className="weather-data">
          <div className="col">
            <img src={humidity_icon} alt="" />
            <div>
              <p>91</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className="col">
            <img src={wind_icon} alt="" />
            <div>
              <p>3.7 Km/h</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Weather