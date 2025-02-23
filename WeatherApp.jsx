import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
export default function WeatherApp(){
    const[weatherInfo,setweatherInfo]=useState({

        city: "Wonderland",
        feelSLike: 33.03,
        humidity: 20,
        temp: 34.99,
        tempMax: 34.99,
        tempMin: 31.94,
        weather: "Smoke"

    });

    let updateInfo=(newInfo)=>{
        setweatherInfo(newInfo);
    }
    return(
    <div style={{textAlign:"center"}}>
    <h1>Weather App by Abhishek</h1>
     <SearchBox updateInfo={updateInfo}/>
    <InfoBox info={weatherInfo}/> 
    </div>
    );
}