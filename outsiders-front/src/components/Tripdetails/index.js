// == Package Import
import React from 'react';

// == Local Import

const Tripdetails = ({ trip }) => {
  
  return (
    <div className="tripDetails">
      <section className="tripInfo">
        <header className="tripInfo__header">
          <div className="tripInfo__header__main">
            <h2>{trip.sport.title}</h2>
            <h1>{trip.title}</h1>
          </div>
          <h2 className="tripInfo__header__username">{trip.creator.username}</h2>
        </header>
        <div className="tripInfo__container">
          <div className="tripInfo__container__desc">
            <h2 className="tripInfo__container__desc__title">Description de la sortie</h2>
            <div className="tripInfo__container__desc__travel">
              <div className="tripInfo__container__desc__travel__from">{trip.from}</div>
              <div className="tripInfo__container__desc__travel__separator" />
              <div className="tripInfo__container__desc__travel__to">{trip.to}</div>
            </div>
            <p className="tripInfo__container__desc__text">{trip.description}</p>
          </div>
          <div className="tripInfo__container__details">
            <div className="tripInfo__container__details__date">Départ le <span>29/01/2021</span> à <span>09h00</span></div>
            <div className="tripInfo__container__details__places">Places disponibles : <span>3</span></div>
            <div className="tripInfo__container__details__min">Munimum de participants : <span>2</span></div>
            <div className="tripInfo__container__details__duration">Durée : <span>0.5 jours</span></div>
            <div className="tripInfo__container__details__tot">Prix total : <span>100€</span></div>
            <div className="tripInfo__container__details__price">Prix par personne : <span>25€</span></div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default Tripdetails;