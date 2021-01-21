import React from "react";

import PropTypes from 'prop-types';

// == Local imports
import ImgWip from '../../components/Home/wip.jpg';
// import tripData from "../../data/data-trips";

const Profile = ({ description, username, trips, isConnected }) => ( 
  
    <div className="profile-page">
      <div className="profil-page__header">
        <div className="profil-page__image">
        <img className="profil-page__image__picture" src={ImgWip} alt="mon-visage" />
        </div>
        <h1 className="profil-page__name">{username}</h1>
        <div className="profil-page__modification">
          <h3><span><i className="fas fa-dot-circle"></i></span>Modifier mon profil</h3>
        </div>
      </div>
      <div className="profil-page__description">
        <p>{description}</p>
      </div>
      <div className="profil-page__last-trips">
        {trips.slice(0, 3).map((trip) => {
        return <article key={trip.id} className="profil-page__article">
          <p >Sortie : {trip.title} {trip.description}</p>
          <div>Date :{trip.date} Horaire de départ : {trip.time}h</div>
          <div >De {trip.from}</div>
          <div >Vers {trip.to}</div>
          <div>{trip.places} places dispos</div>
          <div>{trip.price}€</div>
          <div>Durée du trajet : {trip.duration} journée</div>
          <div>Créateur de la sortie : {trip.user.username}</div>
        </article>
        })}
      </div>
    </div>
    
  );

Profile.propTypes = {
  description: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  lastTrips: PropTypes.object.isRequired,
  isConnected: PropTypes.bool.isRequired
};

export default Profile;
