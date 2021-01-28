//Package Import
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';

// Local Import

// We need to import {trip:id} 


const Tripdetails = ({ trip, changeLoading, handleDelete, isDeleted, changeDeleteState }) => {
  
  const [ open, setOpen ] = useState();
  const opening = () => {
    setOpen(!open);
  };

  const delTrip = (event) => {
    // event.preventDefault();
    // handleDelete();
    // opening();
  }

  const changeDeleteStatus = () => {
    changeDeleteState();
  }


  return (
    <div className='tripdetails'>
      <NavLink onClick={changeLoading} to='/modifier-sortie'><FiSettings /></NavLink>
      
        <RiDeleteBin6Line onClick={opening} />
        {open && (
          <div> ARE YOU SURE YOU WANT TO DELETE ?
          <button onClick={delTrip} > yes </button>
          <button onClick={opening}> no </button>
          </div>
        )}
        {isDeleted && (
            <div>Le trip à bien été supprimée
              <NavLink to='/' onClick={changeDeleteStatus}> Accueil </NavLink>
            </div>
          )}
        
      <section className='trip_section_place'>
        <h1 className='trip_title'>{trip.title}</h1>
        <div className='trip_date'>{trip.date}</div>
        <div className='trip_departure'>{trip.from}</div>
        <div className='trip_traveltime'> 03:00</div>
        <div className='trip_destination'>{trip.to}</div>
      </section>
      <section className='trip_section_activity'>
        <div className='trip_logo_activity'>img</div>
        <div className='trip_logo_time'>img</div>
        <div className='trip_duration'>{trip.duration}</div>
      </section>
      <section className='trip_section_price'>
        <div className='trip_total_price'>{trip.price}</div>
        <div className='trip_price_person'>50</div>
      </section>
      <section className='trip_section_creator'>
        <div className='trip_profil'>trip.user.username</div>
        <div className='trip_description'>{trip.description}</div> 
      </section>
      <section className='trip_section_participants'>
        <div className='trip_p'>PROFIL</div>
        <div className='trip_participants_logo'>img</div>
        <div className='trip_participants_title'>Participants</div>
        <div className='trip_participants_number'>{trip.places}</div>
        <div className='trip_participants_profil'>img + name</div>
        <div className='trip_participants_profil'>img + name</div>
      </section>
      
      <button className='trip_button_inscription'>J'y participe</button>

    </div>
  )
};

export default Tripdetails;