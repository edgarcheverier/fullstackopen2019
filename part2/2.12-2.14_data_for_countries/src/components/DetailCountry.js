import React from 'react';

const DetailCountry = ({country}) => {

  const displayLanguages = () =>
    country.languages.map(language => <li key={language.name}>{language.name}</li>)

  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h1>Languages</h1>
      <ul>
        {displayLanguages()}
      </ul>
      <img src={country.flag} alt={country.name} style={{width: '150px'}}/>
    </div>
  )
};

export default DetailCountry;
