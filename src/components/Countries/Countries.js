import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  //console.log(countries);
  return (
    <div className=''>
      <h2>Hello from Countries: {countries.length}</h2>
      <div className='countries-container'>
        {countries.map((country) => (
          <Country
            country={country}
            // name={country.name.common}
            // population={country.population}
            // area={country.area}
            // region={country.region}
            key={country.cca3}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
