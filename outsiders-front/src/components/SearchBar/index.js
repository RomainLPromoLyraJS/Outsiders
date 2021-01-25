// == Package imports
import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ sports, sportValue, fromValue, dateValue, handleChange, handleSearch }) => {

  // sending the request to API
  const onSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  // tracking field changes
  const onChange = (event) => {
    handleChange(event.target.value, event.target.name);
  };

  return (
    <div className="searchBar">
      <form className="form" onSubmit={onSubmit}>
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
  sports: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  sportValue: PropTypes.string,
  fromValue: PropTypes.string.isRequired,
  dateValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired
}

export default SearchBar;