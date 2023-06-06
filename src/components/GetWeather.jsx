import React from 'react'

function GetWeather({data ,f}) {

    // C = K – 273.15  kelvin to Celsius 

    let toCelsius = Math.round(data && data.main.temp - 273.15);
    let realFeel_toCelsius = Math.round(data && data.main.feels_like - 273.15);
  return (
    <>
    <form onSubmit={f}>
      <input type="text" name='city' placeholder='City name'/>
      <button type='submit'>Get Details</button>
    </form>

    

      temp{toCelsius} °C
      <p>real feel{realFeel_toCelsius} °C</p>
      <p>Country{data && data.sys.country}</p>
      <p>Description{data && data.weather[0].main}</p>
      
      <img src={`https://openweathermap.org/img/w/${data && data.weather[0].icon}.png`} alt="weather icon" />
    </>
  )
}

export default GetWeather