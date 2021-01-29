// == Package imports == \\
import React from 'react';
import { NavLink } from 'react-router-dom';
// == Import utils == \\
import { buildTripURL } from '../../utils';

const Patchtrip = ({
  sports,
  handleModify,
  handleChange,
  titleValue,
  dateValue,
  fromValue,
  toValue,
  priceValue,
  timeValue,
  descriptionValue,
  durationValue,
  minimumValue,
  placesValue,
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
  // array for select number input (placesValue)
  const numbr10 = ['2','3','4','5','6','7','8','9','10'];

  return (
    <div className='patchtrip-page'>
      <h1> TITLE MODIFIER UNE SORTIE </h1>
      <form className='form'>
        <select name="sport_title" className="form__sport" onChange={onChange}>
          <option value="">Sport</option>
          {sports.map(s => {
            return <option key={s.id} value={s.id}>{s.title}</option>
          })}
        </select>
        <input name="trip_title" value={titleValue} className="form__title" type="text" placeholder="Titre" onChange={onChange}/>
        <input name="trip_description" value={descriptionValue} className="form__description" type="text" placeholder="Description" onChange={onChange}/>
        <input name="date" value={dateValue} className="form__date" type="date" placeholder="Date" onChange={onChange}/>
        <input name="time" value={timeValue} className="form__time" type="time" placeholder="Heure départ" onChange={onChange}/>
        <input name="from" value={fromValue} className="form__from" type="text" placeholder="Départ" onChange={onChange}/>
        <input name="to" value={toValue} className="form__to" type="text" placeholder="Destination" onChange={onChange}/>
        <input name="duration" value={durationValue} className="form__duration" type="number" placeholder="durée" onChange={onChange}/>
        <input name="price" value={priceValue} className="form__price" type="number" placeholder="price" onChange={onChange}/>
        <input name="minimum" value={minimumValue} className="form__minimum" type="number" placeholder="Minimum de personne" onChange={onChange}/>
        <select name="places" value={placesValue} className="form__minimum" type="number"  min="2" placeholder="Places disponible" onChange={onChange}>
          <option value="">Places disponibles(2 places minimum)</option>
          {numbr10.map(n => {
            return <option key={n} value={n}>{n}</option>
          })}
        </select>
        <NavLink onClick={modifySubmit} to={buildTripURL(trip.trip_title)}>
          <button>Modifier sortie</button>
        </NavLink>
      </form>
    </div>
  )
}


export default Patchtrip;