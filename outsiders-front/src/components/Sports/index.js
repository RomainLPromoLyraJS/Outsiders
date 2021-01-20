// == Package imports
import React from 'react';

// == Local imports
// data
import catData from '../../data/categories';
// components
import SportsCat from './SportsCat';

const Sports = ({ categories = catData }) => (
  <div className="sports">
    <h1 className="sports__title">Sports</h1>
    {categories.map((c) => {
      return <SportsCat key={c.id} category={c} />
    })}
  </div>
);

export default Sports;