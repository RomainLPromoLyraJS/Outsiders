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
      {/* With Console log you can see all data from 'weather' */}
      {console.log(weather)}
      {/* If weather.main ISNT undefined return div (Fix for crash)*/}
      {(typeof weather.main != 'undefined') ? (
        <div>
          {/* Choice what you want rendering in weather compo */}
          <div className='city'>{weather.name}</div>
          <div className='temp'>{weather.sys.country}</div>
          <div className='temp'>{Math.round(weather.main.temp)}</div>
          <div className='weather'>{weather.weather[0].main}</div>
        </div>
      ) : ('')}
      {/* If weather.main IS undefined return ('') (Fix for crash) */}
    </div>
  )
}

export default Weather;