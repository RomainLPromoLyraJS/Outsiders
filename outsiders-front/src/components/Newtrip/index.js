// == Package imports == \\
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// == Import utils == \\
import { buildTripURL } from '../../utils';

const Newtrip = ({
  sports,
  handleSubmit,
  handleChange,
  resetForm,
  trip,
}) => {
  // reset form
  useEffect(() => {
    resetForm();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // sending the request to API
  const onClick = () => {
    handleSubmit();
  };
  // tracking field changes
  const onChange = (event) => {
    handleChange(event.target.value, event.target.name);
  }

  return (
    <main className="newTrip">
      <h1 className="newTrip__title">Nouvelle sortie</h1>
      <form className="newTrip__form">
        <label className='newTrip__form__label'>Sport</label>
        <select className="newTrip__form__select" name="sport_id" onChange={onChange}>
          <option value="">Sport</option>
            {sports.map(s => {
              return <option key={s.id} value={s.id}>{s.title}</option>
            })}
        </select>
        <label className='newTrip__form__label'>Titre</label>
        <input name="trip_title" value={trip.trip_title} className="newTrip__form__input" type="text" placeholder="Titre" onChange={onChange}/>
        <label className='newTrip__form__label'>Description</label>
        <textarea name="trip_description" value={trip.trip_description} className="newTrip__form__textarea" type="text" placeholder="Description" onChange={onChange} />
        <label className='newTrip__form__label'>Date de départ</label>
        <input name="date" value={trip.date} className="newTrip__form__input" type="date" placeholder="Date" onChange={onChange} />
        <label className='newTrip__form__label'>Heure de départ</label>
        <input name="time" value={trip.time} className="newTrip__form__input" type="time" placeholder="Heure départ" onChange={onChange} />
        <label className='newTrip__form__label'>Ville de départ</label>
        <input name="from" value={trip.from} className="newTrip__form__input" type="text" placeholder="Départ" onChange={onChange} />
        <label className='newTrip__form__label'>Lieu de destination</label>
        <input name="to" value={trip.to} className="newTrip__form__input" type="text" placeholder="Destination" onChange={onChange} />
        <label className='newTrip__form__label'>Durée</label>
        <div className="newTrip__form__container">
          <input className="newTrip__form__container__slider" name="duration" value={trip.duration} onChange={onChange} type="range" min="0.5" max="3" step="0.5" />
          <p className="newTrip__form__container__result">{`${trip.duration}`} jours</p>
        </div>
        <label className='newTrip__form__label'>Coût total du trajet</label>
        <input name="price" value={trip.price} className="newTrip__form__input" type="number" placeholder="price" onChange={onChange} />
        <label className='newTrip__form__label'>Minimum de participants</label>
        <input name="minimum" value={trip.minimum} className="newTrip__form__input" type="number" placeholder="Minimum de personne" onChange={onChange} />
        <label className='newTrip__form__label'>Total de places <span>(driver compris)</span></label>
        <div className="newTrip__form__container">
          <input className="newTrip__form__container__slider" name="places" value={trip.places} onChange={onChange} type="range" min="2" max="10" step="1" />
          <p className="newTrip__form__container__result">{`${trip.places}`} places</p>
        </div>
        <NavLink className='newTrip__form__button' onClick={onClick} to={buildTripURL(trip.trip_title)}>
          <button className='newTrip__form__button' type='submit'>C'est parti !</button>
        </NavLink>
      </form>
    </main>
  );
};

Newtrip.propTypes = {
  sports: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  trip: PropTypes.objectOf(PropTypes.shape({
    trip_id: PropTypes.number.isRequired,
    trip_title: PropTypes.string.isRequired,
    trip_description: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    time: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    places: PropTypes.number.isRequired,
    minimum: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired
  }))

}
export default Newtrip;
