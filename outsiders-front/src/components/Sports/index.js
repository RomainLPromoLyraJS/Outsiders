// == Package imports
import React, { useState } from 'react';

// == Local imports
// data
import catData from '../../data/categories';
// components
import SportsCat from './SportsCat';

const Sports = ({ categories = catData }) => {
  const [ isOpen, setIsOpen ] = useState('');

  return (
    <div className="sports">
      <h1 onClick={() => setIsOpen('')} className="sports__title">Sports</h1>
      {categories.map((c) => {
        return <SportsCat isOpen={isOpen} setIsOpen={setIsOpen} key={c.id} category={c} />
      })}
    </div>
  );
};

export default Sports;