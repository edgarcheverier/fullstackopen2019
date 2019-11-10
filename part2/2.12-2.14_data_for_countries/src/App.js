import React, {useState} from 'react';
import Find from './components/Find';
import Countries from './components/Countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuery = (value) => {
    setSearchQuery(value)
    if (value) {
      fetch(`https://restcountries.eu/rest/v2/name/${value}`)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return [];
      })
      .then(res => {
        setCountries(res)
      })
    }
    setCountries([])
  };

  return (
    <div className="App">
      <Find searchQuery={searchQuery} handleSearchQuery={handleSearchQuery}/>
      <Countries countries={countries} handleSearchQuery={handleSearchQuery}/>
    </div>
  );
}

export default App;
