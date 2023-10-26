import React from "react"
import { useState,useEffect } from "react"
import Weather from "./Weather"
import axios from "axios"
import "./App.css"

const App = ()=>{
const [inputSearch, setinputSearch] = useState("Agra")
const [datainfo,setdatainfo] = useState()
  const  searchWeather = ()=>{
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${inputSearch}&units=Metric&appid=964a4fea27e8f7e8ca06c27eb2830744`)
     .then((res)=>{
      const {temp, pressure,humidity} = res.data.main
      const {name} = res.data
      const {country,sunset} = res.data.sys
      const {speed} = res.data.wind
      const {description} = res.data.weather[0]
      const objData = {temp,pressure,humidity,name,country,sunset,speed,description,}
      console.log(objData)
        setdatainfo(objData)
      // console.log(res.data)
    })
    .catch((err)=>console.log(err))
  }
  useEffect(()=>{
    searchWeather()
  },[])
  return<div>
    <div className="container">
      <div className="subcontainer">
        <div className="topsearch">
          <input type="search" value={inputSearch} placeholder="Serach..." onChange={(e)=>setinputSearch(e.target.value)}></input>
          <input type="button" value="Serach" onClick={()=>searchWeather()}></input>
        </div>
        {
          datainfo && (
            <Weather data ={datainfo} />
          )
        }
      </div>
    </div>
  </div>
}
export default App;