import React from 'react';
import './Country.css';

const Country = (props) => {
  //console.log(props.country);
  const { area, region, name, flags } = props.country;
  return (
    <div className='country bg-success'>
      <h2>Country Name: {name.common}</h2>
      <p>
        <small>Area: {area}</small>
      </p>
      <img src={flags.png} alt='' />
      <p>
        <small>Region: {region}</small>
      </p>
    </div>
  );
};

export default Country;
