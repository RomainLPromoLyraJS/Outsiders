// == Package imports
import React, { useEffect } from 'react';

// == Local imports



const Weather = ({ loadWeather, weather }) => {
  
  // call API
  useEffect(() => {
    loadWeather();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
// Lyon is default city (see exapi reducers)
  return (
    
    <div className='weather_comp'>
      {/* Weather return data for 5Day/3 hour Forecast */}
      {/* @LINK https://openweathermap.org/forecast5 */}
      {/* With Console log you can see all data from 'weather' */}
      {console.log(weather)}
      {/*  @PARAMS weather.list[@NUMBER] each number is equal to 3 hours.
      [0] is equal to At the moment.
      [8] is equal to + 24hours (3*8 = 24) */}
      {/* If weather.city ISNT undefined return div (Fix for crash // ternary operator)*/}
      {(typeof weather.city != 'undefined') ? (
        <div>
          {/* Choice what you want rendering in weather compo */}
          <div className='city'>{weather.city.name}</div>
          <div className='temp'>{weather.city.country}</div>
          {/* list[0] = ACTUAL TIME FORECAST */}
          <div className='day1'>
            {/* dt_txt = DATE */}
            <div className='day1_date'>{weather.list[0].dt_txt} DAY 1</div>
            {/* Round + weather.list[0].main.temp = ROUNDED TEMPERATURE*/}
            <div className='day1_temp'>{Math.round(weather.list[0].main.temp)}°C</div>
            {/* weather.list[0].weather[0].icon = WeatherIcon
            for more informations please follow the link below */}
            {/* https://openweathermap.org/weather-conditions  */}
            <img className='day1_weatherLOGO' src={`http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`} alt='logoWeather'/>
            {/* weather.list[0].weather[0].main = Weather SHORT DESCRIPTION (Sunny, Cloud..)*/}
            <div className='day1_weather'>{weather.list[0].weather[0].main}</div>
          </div>
          {/* list[8] = ACTUAL TIME + 24H FORECAST */}
          <div className='day2'>
            <div className='day2_date'>{weather.list[8].dt_txt} DAY 2</div>
            <div className='day2_temp'>{Math.round(weather.list[8].main.temp)}°C</div>
            <img className='day2_weatherLOGO' src={`http://openweathermap.org/img/wn/${weather.list[8].weather[0].icon}@2x.png`} alt='logoWeather'/>
            <div className='day2_weather'>{weather.list[8].weather[0].main}</div>
          </div>
          {/* list[16] = ACTUAL TIME + 48H FORECAST */}
          <div className='day3'>
            <div className='day3_date'>{weather.list[16].dt_txt} DAY 3</div>
            <div className='day3_temp'>{Math.round(weather.list[16].main.temp)}°C</div>
            <img className='day3_weatherLOGO' src={`http://openweathermap.org/img/wn/${weather.list[16].weather[0].icon}@2x.png`} alt='logoWeather'/>
            <div className='day3_weather'>{weather.list[16].weather[0].main}</div>
          </div>
          {/* list[24] = ACTUAL TIME + 72H FORECAST */}
          <div className='day4'>
            <div className='day4_date'>{weather.list[24].dt_txt} DAY 4</div>
            <div className='day4_temp'>{Math.round(weather.list[24].main.temp)}°C</div>
            <img className='day4_weatherLOGO' src={`http://openweathermap.org/img/wn/${weather.list[24].weather[0].icon}@2x.png`} alt='logoWeather'/>
            <div className='day4_weather'>{weather.list[24].weather[0].main}</div>
          </div>
          {/* list[32] = ACTUAL TIME + 96H FORECAST */}
          <div className='day5'>
            <div className='day5_date'>{weather.list[32].dt_txt} DAY 5</div>
            <div className='day5_temp'>{Math.round(weather.list[32].main.temp)}°C</div>
            <img className='day5_weatherLOGO' src={`http://openweathermap.org/img/wn/${weather.list[32].weather[0].icon}@2x.png`} alt='logoWeather'/>
            <div className='day5_weather'>{weather.list[32].weather[0].main}</div>
          </div>
          {/* list[39] = ACTUAL TIME + 117H FORECAST */}
          <div className='day6'>
            <div className='day5_date'>{weather.list[39].dt_txt} DAY 6</div>
            <div className='day5_temp'>{Math.round(weather.list[39].main.temp)}°C</div>
            <img className='day5_weatherLOGO' src={`http://openweathermap.org/img/wn/${weather.list[39].weather[0].icon}@2x.png`} alt='logoWeather'/>
            <div className='day5_weather'>{weather.list[39].weather[0].main}</div>
          </div>
        </div>
      ) : ('')}
      {/* If weather.city IS undefined return ('') (Fix for crash) */}
    </div>
  )
}

export default Weather;