import React, {useState, useEffect} from 'react';

const DetailCountry = ({country}) => {
  const [weather, setWeather] = useState({});

  const displayLanguages = () =>
    country.languages.map(language => <li key={language.name}>{language.name}</li>)

  const displayWeather = () => {
    if (weather.current) {
      return (
        <>
          <p>
            <strong>temperature: </strong> {weather.current.temperature} Celsius
          </p>
          <img src={weather.current.weather_icons} alt={weather.current.weather_icons} style={{width: '100px'}}/>
          <p>
            <strong>wind: </strong> {weather.current.wind_speed} kph direction {weather.current.wind_dir}
          </p>
        </>
      )
    }
    return <p>An error has occurred when trying getting the {country.capital} weather, try again later.</p>
  };

  useEffect(() => {
    const url = `http://api.weatherstack.com/current?access_key=80d19fe10c1845ff2a8ae2b9b00e0e1c&query=${country.capital}`;
    fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return {}
    })
    .then(res => {
      setWeather(res)
    })
    setWeather({})
  }, [country.capital]);

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
      <h1>Weather in {country.capital}</h1>
      {displayWeather()}
    </div>
  )
};

export default DetailCountry;
