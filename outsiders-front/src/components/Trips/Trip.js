// == Package imports
import React from 'react';
import DayJS from 'react-dayjs';

const Trip = ({ trip }) => {
  return (
    <div className="trip">
      <div className="trip__header">
        <div className="trip__header__main">
          <h3>{trip.sport[0].title}</h3>
          <h2>{trip.title}</h2>
        </div>
        <h2 className="trip__header__username">{trip.user[0].username}</h2>
      </div>
      <div className="trip__travel">
        <div className="trip__travel__from">{trip.from}</div>
        <div className="trip__travel__separator">
        </div>
        <div className="trip__travel__to">{trip.to}</div>
      </div>
      <div className="trip__details">
        <div className="trip__details__date"><DayJS format="DD/MM/YYYY">{trip.date}</DayJS></div>
        <div className="trip__details__places">{trip.places} places</div>
        <div className="trip__details__price">Prix total : {trip.price}€</div>
      </div>
    </div>
  )
}


export default Trip;