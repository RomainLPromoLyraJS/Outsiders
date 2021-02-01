// == Package imports
import React, { useState } from 'react';

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

export default Sports;