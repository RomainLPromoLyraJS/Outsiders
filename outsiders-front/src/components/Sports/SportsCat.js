// == Package imports
import React from 'react';

const SportsCat = ({ category }) => {
  return (
    <section className={`category category--${category.title.toLowerCase()}`}>
      <div className={`category__header category__header--${category.title.toLowerCase()}`}>
        <h2 className="category__header__title">
          {category.title}
        </h2>
      </div>
      <div className="category__content">
        {category.sports.map((s) => {
          return <p key={s.id}>{s.title}</p>
        })}
      </div>
    </section>
  );
};

export default SportsCat;