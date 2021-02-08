// == Package imports
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == Local imports
// components
import SportsCat from './SportsCat';

const Sports = ({ categories, sportTitle, handleSearch }) => {
  const [ isOpen, setIsOpen ] = useState('');

  return (
    <div className="sports">
      <h1 onClick={() => setIsOpen('')} className="sports__title">Sports</h1>
      {categories.map((c) => {
        return <SportsCat
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          key={c.id}
          category={c}
          sportTitle={sportTitle}
          handleSearch={handleSearch}
          />
      })}
    </div>
  );
};

Sports.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  sportTitle: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sport: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
}

export default Sports;