import React, { useState, useEffect } from 'react';
import './../weather.css';
import moment from 'moment';

function WeatherHooks() { //custom functional component
    const [weather, setWeather] = useState(0);
    const [city, setCity] = useState('London');
    const [date, setDate] = useState(0);
    const [time, setTime] = useState(0);
    const [maxTemp, setMaxTemp] = useState(0);
    const [minTemp, setMinTemp] = useState(0);



    //const [new State,setter function ] = useState(initial state); 
    /* setWeathe/setCityr: Custom method that updates the state variable, registered here
       weather/city: current value of state variable
       useState(0/"London") : inital state property value of weather & City
    */

    useEffect(() => {  //replaces componentDidMount, componentDidUpdate & componentWilUnmount that exist in a class component, for this functional component
        //executes once compnent is injected ino the page  

        //call external live web API & pass the city selected in dropdown list as query parameter
        fetch("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29")
            .then(res => res.json())
            .then(res => {
                setWeather(res.list[0].weather[0].description);
                setMaxTemp(res.list[0].temp.max);
                setMinTemp(res.list[0].temp.min);
                setDate(moment().format('LL'));
                setTime(moment().format('h:mm:ss a'))        //Calls setWeather to change the state of "weather" variable
            });
    });

    function updateWeatherForCity(e) { //custom event hanlder function called on dropdown list selection
        console.log(e.target.value);
        setCity(e.target.value);  //change the state of city variable to dropdown selection, view is updated once state changes
    }

    return (
        <div>
            <div className="jumbotron">
                <h2> Choose City...</h2>
                <select onChange={updateWeatherForCity} >   {/* On selection of city call this event handler */}
                    <option value="London">London</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Malmö">Malmö</option>
                    <option value="Berlin">Berlin</option>
                </select>
                {/*  <h2 className='display-4'>{city}</h2>
                <p className='lead'><strong>Temp: {weather} °C</strong> </p>      Wether data for London and title data displayed in the view */}
            </div>

            <div className='weather-container'>
                <div className="container-fluid px-1 px-md-4 py-5 mx-auto">
                    <div className="row d-flex justify-content-center px-3">
                        <div className="card">
                            <h2 className="ml-auto mr-4 mt-3 mb-0">City Name: {city}</h2>
                            <h3 className="ml-auto mr-4 med-font">Weather now: {weather}</h3>
                            <p className="ml-auto mr-4 mb-0 med-font"> Max Temp : {maxTemp}</p>
                            <p className="ml-auto mr-4 mb-0 med-font"> Min Temp : {minTemp}</p>
                            <h3>{date}.  {time}</h3>
         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherHooks;