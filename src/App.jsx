import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState();
  const [city, setCity] = useState()

  useEffect(() => {
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=00a9df123c39ed794be1b99e63c1866c`).then(i => {setData(i.data) })

  },[city])

  function submitHandler(e){
    e.preventDefault();
    console.log("inside fun");
    setCity(e.target.city.value)
  }


  return (
    <>
    <form onSubmit={submitHandler}>
      <input type="text" name='city' />
      <button type='submit'>Change</button>
    </form>

      {data && data.main.temp}
    </>
  )
}

export default App
