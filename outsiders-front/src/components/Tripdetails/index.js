// == Package Import
import React from 'react';
import DayJS from 'react-dayjs';
import { Redirect } from 'react-router-dom';

// == Local Import
import ButtonSection from './ButtonSection';

const Tripdetails = ({ handleDelete, handleJoin, isLogged, isLoaded, trip }) => {
  const nullToArray = (tab) => {
    if (tab == null) {
      return 0;
    } else {
      return tab.length;
    }
  }

  const spotCalculator = (nbSpot, nbPax) => {
    return nbSpot - nbPax;
  };

  const priceCalculator = (nbPax) => {
    return trip.price / (nbPax + 1);
  };
  
  return (
    <main>
      {/* Redirect if not logged */}
			{!isLogged && (
				<Redirect to='/login' />
			)}

      {/* Display loader */}
			{!isLoaded && (
				<div className="trips__loader" />
			)}
      
      {/* Display result */}
      {isLoaded && (
        <div className="tripDetails">
          <section className="tripInfo">
            <header className="tripInfo__header">
              <div className="tripInfo__header__main">
                <h2>{trip.sport_title}</h2>
                <h1>{trip.trip_title}</h1>
              </div>
              <h2 className="tripInfo__header__username">{trip.creator[0].username}</h2>
            </header>
            <div className="tripInfo__container">
              <div className="tripInfo__container__desc">
                <h2 className="tripInfo__container__desc__title">Description de la sortie</h2>
                <div className="tripInfo__container__desc__travel">
                  <div className="tripInfo__container__desc__travel__from">{trip.from}</div>
                  <div className="tripInfo__container__desc__travel__separator" />
                  <div className="tripInfo__container__desc__travel__to">{trip.to}</div>
                </div>
                <p className="tripInfo__container__desc__text">{trip.trip_description}</p>
              </div>
              <div className="tripInfo__container__details">
                <div className="tripInfo__container__details__date">Départ le <span><DayJS format="DD/MM/YYYY">{trip.date}</DayJS></span> à <span>{trip.time.slice(0, 5)}</span></div>
                <div className="tripInfo__container__details__places">Places disponibles : <span>{spotCalculator(trip.places, nullToArray(trip.participants))}</span></div>
                <div className="tripInfo__container__details__min">Munimum de participants : <span>{trip.minimum}</span></div>
                <div className="tripInfo__container__details__duration">Durée : <span>{trip.duration} jours</span></div>
                <div className="tripInfo__container__details__tot">Prix total : <span>{trip.price}€</span></div>
                <div className="tripInfo__container__details__price">Prix actuel par personne : <span>{priceCalculator(nullToArray(trip.participants))}€</span></div>
              </div>
            </div>
          </section>
          <ButtonSection handleDelete={handleDelete} handleJoin={handleJoin} />
        </div>
      )}
    </main>
  )
};

export default Tripdetails;