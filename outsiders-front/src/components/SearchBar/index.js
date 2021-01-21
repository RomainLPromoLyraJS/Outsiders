// == Package imports
import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ sports, sportValue, fromValue, dateValue, handleChange }) => {
  const onChange = (event) => {
    handleChange(event.target.value, event.target.name);
  }

  return (
    <div className="searchBar">
      <form className="form">
        <select name="sport" className="form__sport" onChange={onChange}>
          <option value="">Sport</option>
          {sports.map(s => {
            return <option key={s.id} value={sportValue}>{s.title}</option>
          })}
        </select>
        <input name="from" className="form__from" type="text" placeholder="Départ" value={fromValue} onChange={onChange} />
        <input name="date" className="form__date" type="date" value={dateValue} onChange={onChange} />
        <button className="form__button" type="submit">Rechercher</button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  sports: PropTypes.array.isRequired,
  fromValue: PropTypes.string.isRequired,
  dateValue: PropTypes.string.isRequired,
}

export default SearchBar;