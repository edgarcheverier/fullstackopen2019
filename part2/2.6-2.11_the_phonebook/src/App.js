import React, { useState } from 'react';

function App() {
  const initialPersonsState = [
    {name: 'Edgar Cheverier', number: 45625},
    {name: 'Eileen Juergens', number: 1235},
    {name: 'Antoinete Powers', number: 85466},
    {name: 'Andrew powers', number: 9452},
    {name: 'Donovan powers', number: 521546},
  ];
  const [persons, setPersons] = useState(initialPersonsState);
  const [filteredPersons, setFilteredPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  const handleFilter = () => (e) => {
    const value = e.target.value
    setNewFilter(value);
    const newFilteredPersons =
      persons.filter(person => person.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredPersons(newFilteredPersons);
  };

  const verifyName = () =>
    persons.some(person => person.name.toLowerCase() === newName.toLowerCase());

  const handleSubmitPerson = (event) => {
    event.preventDefault();

    if (verifyName()) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons(persons.concat({name: newName, number: newNumber}));
      setNewName('');
      setNewNumber('');
    }
  };

  const displayNumbers = () => {
    if (newFilter) {
      if (filteredPersons.length) {
        return filteredPersons.map(filteredPerson =>
          <li key={filteredPerson.name}>{filteredPerson.name} {filteredPerson.number}</li>)
      }
      return <li>no results</li>
    }
    return persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={newFilter} onChange={handleFilter()} />
      </div>
      <form onSubmit={handleSubmitPerson}>
        <div>
          name: <input value={newName} onChange={e => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={e => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {displayNumbers()}
      </ul>
    </div>
  );
}

export default App;
