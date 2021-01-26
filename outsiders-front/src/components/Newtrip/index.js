// Import package
import React from 'react';



const Newtrip = ({
  sports,
  handleCreate,
  handleChange,
  titleValue,
  dateValue,
  fromValue,
  toValue,
  priceValue,
}) => {
  // sending the request to API
  const onClick =() => {
    handleCreate();
  };

  // tracking field changes
  const onChange = (event) => {
    handleChange(event.target.value, event.target.name);
  }

  return (
    <div className='newtrip-page'>
      <h1> TITLE CREE UNE SORTIE </h1>
        <form className='form'>
        <select name="sport" className="form__sport" onChange={onChange}>
          <option value="">Sport</option>
          {sports.map(s => {
            return <option key={s.id} value={s.title}>{s.title}</option>
          })}
        </select>
        <input name="title" value={titleValue} className="form__title" type="text" placeholder="Titre" onChange={onChange}/>
        <input name="date" value={dateValue} className="form__date" type="text" placeholder="Date" onChange={onChange}/>
        <input name="from" value={fromValue} className="form__departure" type="text" placeholder="Départ" onChange={onChange}/>
        <input name="to" value={toValue} className="form__to" type="text" placeholder="Destination" onChange={onChange}/>
        <input name="price" value={priceValue} className="form__price" type="number" placeholder="price" onChange={onChange}/>
        <button className='form__button' onClick={onClick}> Créer sortie </button>
        </form>
    </div>
  );
}

export default Newtrip;



