import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personsService from './services/persons';

function App() {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    personsService
      .getAll()
        .then(data => {
          setPersons(data)
        });
  },[])

  const handleFilter = () => (e) => {
    const value = e.target.value
    setNewFilter(value);
    const newFilteredPersons =
      persons.filter(person => person.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredPersons(newFilteredPersons);
  };

  const verifyNameAndNumber = () => {
    return persons.some(person => {
      return person.name.toLowerCase() === newName.toLowerCase() &&
      person.number === newNumber
    })
  }

  const verifyName = () =>
    persons.some(person => person.name.toLowerCase() === newName.toLowerCase());

  const handleSubmitPerson = (event) => {
    event.preventDefault();

    if (verifyNameAndNumber()) {
      alert(`${newName} is already added to the phonebook`);
    } else if(verifyName()) {
      const message = `Would you like to replace the phone number of ${newName}?`;
      const result = window.confirm(message);
      if (result) {
        const person = persons.find(person => {
          return person.name.toLowerCase() === newName.toLowerCase()
        })

        personsService
          .update(person.id, {name: person.name, number: newNumber})
            .then((data) => {
              setPersons(persons.map(person => person.id === data.id ? data : person))
              setNewName('');
              setNewNumber('');
            })
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }

      personsService
        .create(newPerson)
        .then(data => {
          setPersons(persons.concat(data));
          setNewName('');
          setNewNumber('');
        });
    }
  };

  const handleDeletePerson = (name, id) => {
    const message = `Delete ${name}?`
    const result = window.confirm(message);
    if (result) {
      personsService
        .deleteOne(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        });
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
      <Persons
        newFilter={newFilter}
        filteredPersons={filteredPersons}
        persons={persons}
        handleDeletePerson={handleDeletePerson}/>
    </div>
  );
}

export default App;
