import React from 'react';
import Country from './Country';
import DetailCountry from './DetailCountry';

const Countries = ({countries, handleSearchQuery}) => {
  if (countries.length > 10) {
    return <h3>Too many matches, specify another filter</h3>
  }

  if (countries.length === 1) {
    return <DetailCountry country={countries[0]} />
  }

  const displayCountries = () =>
    countries.map(country =>
      <Country key={country.name} name={country.name} handleSearchQuery={handleSearchQuery} />)

  return (
    <ul>
      {displayCountries()}
    </ul>
  )
};

export default Countries;
