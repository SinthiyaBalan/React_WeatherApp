import React from 'react'

function GetWeather({data ,f}) {

    // C = K – 273.15  kelvin to Celsius 
    let toCelsius = 0;
    toCelsius = Math.round(data && data.main.temp - 273.15);
    let realFeel_toCelsius = Math.round(data && data.main.feels_like - 273.15);
  return (
    <div className='weather-app'>
        <h2 className='title'>Weather Forcast</h2>
        <form className='from-wrapper' onSubmit={f}>
            <input type="text" name='city' placeholder='City Name'/>
            <button type='submit' className='btn'>Get Details</button>
        </form>

        <div className='weather-report'>
    
            <h3>{data && data.name}  {data && data.sys.country}</h3>
            <div className="report">
                <div className="img-desc">
                    <img src={`https://openweathermap.org/img/w/${data && data.weather[0].icon}.png`} alt="weather icon" /> 
                    <p className='desc'>{data && data.weather[0].main}</p>
                </div>
                <div className="temp-desc">
                    <p className='temp'>{toCelsius} °C</p>
                    <p>Real Feel : {realFeel_toCelsius} °C</p>
                </div>
            </div>
            </div> 
     
    </div>
  )
}

export default GetWeather