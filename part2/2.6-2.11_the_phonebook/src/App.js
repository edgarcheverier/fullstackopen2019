import React, { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilter={handleFilter}/>
      <h3>Add a new</h3>
      <PersonForm
        handleSubmitPerson={handleSubmitPerson}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}/>
      <h2>Numbers</h2>
      <Persons newFilter={newFilter} filteredPersons={filteredPersons} persons={persons}/>
    </div>
  );
}

export default App;
