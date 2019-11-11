import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios';

function App() {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      })
  },[])

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
      const newPerson = {
        name: newName,
        number: newNumber
      }

      axios
        .post('http://localhost:3001/persons', newPerson)
        .then(response => response.data)
        .then(data => {
          setPersons(persons.concat(data));
        });
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
