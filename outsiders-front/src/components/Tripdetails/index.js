//Package Import
import React from 'react';

// Local Import

// We need to import {trip:id} 


const Tripdetails = ({ trip }) => {
  
  return (
    <div className='tripdetails'>
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