import { useEffect, useState } from 'react'
import axios from 'axios'
import GetWeather from './components/GetWeather';

function App() {
 
  const [data, setData] = useState();
  const [city, setCity] = useState("Munich")

  useEffect(() => {
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=00a9df123c39ed794be1b99e63c1866c`)
    .then(i => {setData(i.data)})

  },[city])

  function submitHandler(e){
    e.preventDefault();
    setCity(e.target.city.value);
    e.target.city.value = ""
   };

  return (
    <div className='App'>
      <GetWeather data = {data} f = {submitHandler}/>
    </div>
  )
}

export default App
