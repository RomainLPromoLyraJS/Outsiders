// == Package imports
import React from 'react';

// == Local imports
import iconPaser from './iconParser';

const Weather = ({ weather, trip }) => {
  return (
    <section className='weather'>
      {(typeof weather.city != 'undefined') ? (
        <>
        <h2 className="weather__title">Météo à {trip.to}</h2>
        <div className="weather__container">
          <div className="weather__container__current">
            <h3 className="weather__container__current__title">Aujourd'hui</h3>
            <div className="weather__container__current__icon">
              {/* weather.list[0].weather[0].icon = WeatherIcon */}
              {iconPaser(weather.list[0].weather[0].icon)}
            </div>
            {/* Round + weather.list[0].main.temp = ROUNDED TEMPERATURE*/}
            <p className="weather__container__current__temp">{Math.round(weather.list[0].main.temp)}°C</p>
          </div>
          <div className="weather__container__forecast">
            <div className="weather__container__forecast__day">
              <h3 className="weather__container__forecast__day__title">J+1</h3>
              <div className="weather__container__forecast__day__icon">
                {iconPaser(weather.list[8].weather[0].icon)}
              </div>
              <p className="weather__container__forecast__day__temp">{Math.round(weather.list[8].main.temp)}°C</p>
            </div>
            <div className="weather__container__forecast__day">
              <h3 className="weather__container__forecast__day__title">J+2</h3>
              <div className="weather__container__forecast__day__icon">
                {iconPaser(weather.list[16].weather[0].icon)}
              </div>
              <p className="weather__container__forecast__day__temp">{Math.round(weather.list[16].main.temp)}°C</p>
            </div>
            <div className="weather__container__forecast__day">
              <h3 className="weather__container__forecast__day__title">J+3</h3>
              <div className="weather__container__forecast__day__icon">
                {iconPaser(weather.list[24].weather[0].icon)}
              </div>
              <p className="weather__container__forecast__day__temp">{Math.round(weather.list[32].main.temp)}°C</p>
            </div>
            <div className="weather__container__forecast__day">
              <h3 className="weather__container__forecast__day__title">J+4</h3>
              <div className="weather__container__forecast__day__icon">
                {iconPaser(weather.list[32].weather[0].icon)}
              </div>
              <p className="weather__container__forecast__day__temp">{Math.round(weather.list[24].main.temp)}°C</p>
            </div>
            <div className="weather__container__forecast__day">
              <h3 className="weather__container__forecast__day__title">J+5</h3>
              <div className="weather__container__forecast__day__icon">
                {iconPaser(weather.list[39].weather[0].icon)}
              </div>
              <p className="weather__container__forecast__day__temp">{Math.round(weather.list[39].main.temp)}°C</p>
            </div>
          </div>
        </div>
        </>
      ) : ('')}
      {/* If weather.city IS undefined return ('') (Fix for crash) */}
    </section>
  )
}

export default Weather;