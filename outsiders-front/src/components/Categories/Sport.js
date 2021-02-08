import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight } from "react-icons/fa";

const Sport = ({ sport }) => {
  return (
    <div  className='sportCard'>
      <h2>{sport.title}</h2>
      <div>{sport.description}</div>
      <div className="sportCard__btn">
        <p>Voir les sorties {sport.title}</p>
        <FaArrowRight />
      </div>
    </div> 
  )
}

Sport.propTypes = {
  sport: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })
}

export default Sport;