import React, { useEffect, useState } from "react";

export const Weather = () => {
    const [searchValue, setSearchValue] = useState("ghaziabad");
    const [myWeather, setMyWeather] = useState({});

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=713fd4cd41e1f339cfc3b935127d01c4`;
            const res = await fetch(url);
            const data = await res.json();

            const { name } = data;
            const { country, sunrise, sunset } = data.sys;
            const { temp, pressure, humidity } = data.main;
            const weather = data.weather[0].main;
            const { speed } = data.wind;

            const date = new Date(sunset * 1000);
            const sunsetTime = date.toLocaleTimeString("en-IN");

            const info = {
                name,
                temp,
                country,
                sunrise,
                weather,
                sunsetTime,
                pressure,
                humidity,
                speed,
            };

            setMyWeather(info);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getWeatherInfo();
    }, []);

    return (
        // <div>Pi e {process.env.REACT_APP_WEATHER_API_KEY}</div>

        <div className='container-sm my-5'>
            <div className='row'>
                <div className='col-sm'></div>
                <div className='input-group mb-3 col-sm'>
                    <input
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        type='text'
                        className='form-control'
                        placeholder='Search your favourite place'
                        aria-label='Search your favourite place'
                        aria-describedby='button-addon2'
                    />
                    <button
                        className='btn btn-outline-secondary'
                        type='button'
                        id='button-addon2'
                        onClick={() => getWeatherInfo()}
                    >
                        Search
                    </button>
                </div>
                <div className='col-sm'></div>
            </div>

            <div className='card text-center'>
                <div className='py-3 card-header'>
                    <i className='fa-solid fa-sun fa-2xl'></i>
                </div>
                <div className='card-body'>
                    <h5 className='card-title'>
                        {myWeather.name}-{myWeather.country}
                    </h5>
                    <p className='card-text'>
                        <span>
                            {myWeather.temp} {myWeather.weather}&deg;
                        </span>
                    </p>
                    <p className='card-text'>{myWeather.weather}</p>
                    {/* <p className='card-text'></p> */}
                    <div className='container my-3'>
                        <div className='row'>
                            <div className='col-sm mx-2'>
                                <div className='row '>
                                    <div className='col-sm'>
                                        <i className='fa-solid fa-sun fa-2xl'></i>
                                    </div>
                                    <div className='col-sm'>
                                        <p>
                                            {myWeather.sunsetTime} <br /> Sunset
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm mx-2'>
                                <div className='row '>
                                    <div className='col-sm'>
                                        <i className='fa-solid fa-sun fa-2xl'></i>
                                    </div>
                                    <div className='col-sm'>
                                        <p>
                                            {myWeather.humidity} <br /> Humidity
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm mx-2'>
                                <div className='row '>
                                    <div className='col-sm'>
                                        <i className='fa-solid fa-sun fa-2xl'></i>
                                    </div>
                                    <div className='col-sm'>
                                        <p>
                                            {myWeather.pressure} <br /> Pressure
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm mx-2'>
                                <div className='row '>
                                    <div className='col-sm'>
                                        <i className='fa-solid fa-wind fa-2xl'></i>
                                    </div>
                                    <div className='col-sm'>
                                        <p>
                                            {myWeather.speed} kmph
                                            <br /> Speed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href='/' className='btn btn-primary'>
                        Go somewhere
                    </a>
                </div>
                <div className='card-footer text-muted'>
                    {new Date().toLocaleString()}
                </div>
            </div>
        </div>
    );
};

// API_SITE https://openweathermap.org/current
// API_KEY = 713fd4cd41e1f339cfc3b935127d01c4
