import React from "react"
import "./App.css"
import {useEffect,useState} from "react"
const Weather =  (props)=>{
       const {temp,pressure,humidity,name,country,sunset,speed,description} = props.data
     console.log(props, "data")
     let sec = sunset;
     let date = new Date(sec *1000)
     let timestr = `${date.getHours()}:${date.getMinutes()}`

     const [weatherImg, setweatherImg] = useState("")
        useEffect(()=>{
            switch(description){
                case "smoke":{
                    setweatherImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNzRwj3Iz31gEUZoHsCwS9BIJ3d745xHFRcQ&usqp=CAU")
                    break;
                }
                case "haze":{
                    setweatherImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNzRwj3Iz31gEUZoHsCwS9BIJ3d745xHFRcQ&usqp=CAU")
                    break;
                }
                case "few clouds":{
                    setweatherImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd6pMUR9RcqMabP2y3MxsomEUcwOY_hHgEZA&usqp=CAU")
                    break;
                }
                case "moderate rain":{
                    setweatherImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb5zwowD_G6D1goh3M9ttKF-i0Wkp3ci8Yrw&usqp=CAU")
                    break;
                }
                case "rain":{
                    setweatherImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb5zwowD_G6D1goh3M9ttKF-i0Wkp3ci8Yrw&usqp=CAU")
                    break;
                }
                default:{
                    setweatherImg("https://img.freepik.com/free-photo/white-cloud-sky-background_74190-4646.jpg")
                }
            }
        },[description])
    return<div>
        <div className="wedDiv">
            <div className="upperWeatherinfo">
            <img src={weatherImg} alt="wdt" height="250px" width="100%"></img>
            </div>
            <div className="infoContainer">
                <div className="Weatherinfo">
                    <div><span>{temp}<sup>o</sup>C</span></div>
                    <div><span>{description}</span> <br></br><span style={{fontSize:"16px"}}>{name} ,{country}</span></div>
                </div>
                <div className="weatherdate">
                    {new Date().toLocaleString()}
                </div>
            </div>
            <div className="bottomdiv">
                <div className="bottomIcons">
                    <div><i className="fa-regular fa-sun"></i></div>
                    <div>{timestr} <br />Sunset</div>
                </div>
                <div className="bottomIcons">
                    <div><i className="fa-solid fa-droplet fa-beat"></i></div>
                    <div>{humidity} <br /> Humidity</div>
                </div>
                <div className="bottomIcons">
                    <div><i className="fa-solid fa-meteor"></i></div>
                    <div>{pressure} <br /> Pressure</div>
                </div>
                <div className="bottomIcons">
                    <div><i className="fa-solid fa-wind"></i></div>
                    <div>{speed} <br /> Speed</div>
                </div>
            </div>
        </div>
    </div>
}
export default Weather;