// == Package imports == \\
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// == Import utils == \\
import { buildTripURL } from '../../utils';

const Patchtrip = ({
  sports,
  handleModify,
  handleChange,
  trip,
}) => {
  // sending the request to API
  const modifySubmit = () => {
    handleModify();
  };
  // tracking field changes
  const onChange = (event) => {
    handleChange(event.target.value, event.target.name);
  }

  return (
    <main className="patchTrip">
      <h1 className="patchTrip__title">Modifier Sortie</h1>
      <form className="patchTrip__form">
        <label className='patchTrip__form__label'>Sport</label>
        <select className="patchTrip__form__select" name="sport_id" onChange={onChange}>
          <option value="">Sport</option>
            {sports.map(s => {
              return <option key={s.id} value={s.id}>{s.title}</option>
            })}
        </select>
        <label className='patchTrip__form__label'>Titre</label>
        <input name="trip_title" value={trip.trip_title} className="patchTrip__form__input" type="text" placeholder="Titre" onChange={onChange}/>
        <label className='patchTrip__form__label'>Description</label>
        <textarea name="trip_description" value={trip.trip_description} className="patchTrip__form__textarea" type="text" placeholder="Description" onChange={onChange} />
        <label className='patchTrip__form__label'>Date de départ</label>
        <input name="date" value={trip.date} className="patchTrip__form__input" type="date" placeholder="Date" onChange={onChange} />
        <label className='patchTrip__form__label'>Heure de départ</label>
        <input name="time" value={trip.time} className="patchTrip__form__input" type="time" placeholder="Heure départ" onChange={onChange} />
        <label className='patchTrip__form__label'>Ville de départ</label>
        <input name="from" value={trip.from} className="patchTrip__form__input" type="text" placeholder="Départ" onChange={onChange} />
        <label className='patchTrip__form__label'>Lieu de destination</label>
        <input name="to" value={trip.to} className="patchTrip__form__input" type="text" placeholder="Destination" onChange={onChange} />
        <label className='patchTrip__form__label'>Durée</label>
        <div className="patchTrip__form__container">
          <input className="patchTrip__form__container__slider" name="duration" value={trip.duration} onChange={onChange} type="range" min="0.5" max="3" step="0.5" />
          <p className="patchTrip__form__container__result">{`${trip.duration}`} jours</p>
        </div>
        <label className='patchTrip__form__label'>Coût total du trajet</label>
        <input name="price" value={trip.price} className="patchTrip__form__input" type="number" placeholder="price" onChange={onChange} />
        <label className='patchTrip__form__label'>Minimum de participants</label>
        <input name="minimum" value={trip.minimum} className="patchTrip__form__input" type="number" placeholder="Minimum de personne" onChange={onChange} />
        <label className='patchTrip__form__label'>Total de places <span>(driver compris)</span></label>
        <div className="patchTrip__form__container">
          <input className="patchTrip__form__container__slider" name="places" value={trip.places} onChange={onChange} type="range" min="2" max="10" step="1" />
          <p className="patchTrip__form__container__result">{`${trip.places}`} places</p>
        </div>
        <NavLink className='patchTrip__form__button' onClick={modifySubmit} to={buildTripURL(trip.trip_title)}>
          <button className='patchTrip__form__button' type='submit'>On y retourne !</button>
        </NavLink>
      </form>
    </main>
  );
};

Patchtrip.propTypes = {
  sports: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  handleModify: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  trip: PropTypes.shape({
    trip_id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    trip_title: PropTypes.string.isRequired,
    trip_description: PropTypes.string.isRequired,
    date: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date)
    ]),
    time: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    places: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    minimum: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    price: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    duration: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  })
}

export default Patchtrip;