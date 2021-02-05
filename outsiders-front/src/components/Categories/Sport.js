import React from 'react';
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

export default Sport;