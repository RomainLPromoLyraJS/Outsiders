// == Package Import
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import DayJS from 'react-dayjs';
import { FaArrowLeft } from "react-icons/fa";

// == Local Import
// components
import ButtonSection from './ButtonSection';
import MessageSection from './MessageSection';
import Weather from './Weather';
import Loader from '../Loader';
import Map from '../../containers/Map';
// utils
import { nullToArray } from '../../utils';

const Tripdetails = ({ handleChange, handleDelete, handleJoin, handleLeave, handleNewMessage, isLoaded, messageValue, trip, userId, username, weather, getMessages }) => {

  /** 
   * useEffect with interval & clearInterval
   * Call getMessages(); every 10seconds // Refresh chatbox
   * @params 1000ms = 1 second
   * @link https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks
   */
  useEffect(() => {
   const interval = setInterval(() => {
      getMessages();
  }, 10000);
  return () => clearInterval(interval);
  })

  const spotCalculator = (nbSpot, nbPax) => {
    return nbSpot - nbPax;
  };

  const pricePaxCalculator = (nbPax) => {
    return trip.price / nbPax;
  };

  const priceCalculator = (nbPax) => {
    return trip.price / (nbPax + 1);
  };

  // compare user with participants
  const isParticipant = (participants, username) => {
    const user = participants.find(p => p.username === username);
    if (!!user) {
      return true;
    }
    return false;
  };
  
  return (
    <main className="tripDetails">
      {/* Display loader */}
			{!isLoaded && (
				<Loader />
			)}
      
      {/* Display result */}
      {isLoaded && (
        <>
        <section className="tripInfo">
          <div className="tripInfo__back">
            <NavLink to="/sorties" className="tripInfo__back__btn">
              <FaArrowLeft />
              <p> Retour</p>
            </NavLink>
          </div>
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
              <div className="tripInfo__container__details__date">D??part le <span><DayJS format="DD/MM/YYYY">{trip.date}</DayJS></span> ?? <span>{trip.time.slice(0, 5)}</span></div>
              <div className="tripInfo__container__details__places">Nombre de places : <span>{trip.places}</span></div>
              <div className="tripInfo__container__details__places">Places disponibles : <span>{spotCalculator(trip.places, nullToArray(trip.participants).length)}</span></div>
              <div className="tripInfo__container__details__min">Munimum de participants : <span>{trip.minimum}</span></div>
              <div className="tripInfo__container__details__duration">Dur??e : <span>{trip.duration} jours</span></div>
              <div className="tripInfo__container__details__tot">Prix total : <span>{trip.price}???</span></div>
              <div className="tripInfo__container__details__price">Prix/pers : <span>{pricePaxCalculator(nullToArray(trip.participants).length).toFixed(2)}???</span></div>
              <div className="tripInfo__container__details__price">Prix/pers si tu nous rejoins : <span>{priceCalculator(nullToArray(trip.participants).length).toFixed(2)}???</span></div>
            </div>
          </div>
        </section>
        <ButtonSection
          creatorId={trip.creator[0].id}
          handleDelete={handleDelete}
          handleJoin={handleJoin}
          handleLeave={handleLeave}
          userId={userId}
          isParticipant={isParticipant(trip.participants, username)}
        />
        <MessageSection
          handleChange={handleChange}
          handleNewMessage={handleNewMessage}
          messageValue={messageValue}
          messages={nullToArray(trip.message)}
          username={username}
          isParticipant={isParticipant(trip.participants, username)}
        />
        {/*  Weather sub components */}
        <div className="tripInfo__weatherAndMap">
          <Weather trip={trip} weather={weather}/>
          <Map />
        </div>
        <div className="tripInfo__container">
          <div className="tripInfo__container__infos">
            <h2 className="tripInfo__container__infos__title">Quelques infos sur {trip.creator[0].username}</h2>
            <p className="tripInfo__container__infos__text">{trip.creator[0].description}</p>
          </div>
        </div>
        </>
      )}
    </main>
  )
};

Tripdetails.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleJoin: PropTypes.func.isRequired,
  handleLeave: PropTypes.func.isRequired,
  handleNewMessage: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  messageValue: PropTypes.string.isRequired,
  trip: PropTypes.shape({
    sport_title: PropTypes.string.isRequired,
    creator: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string.isRequired,
      })
    ).isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    trip_description: PropTypes.string.isRequired,
    message: PropTypes.array,
  }),
  userId: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
}

export default Tripdetails;

