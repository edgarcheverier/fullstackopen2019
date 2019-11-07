import React, { useState } from 'react';

function App() {

  const [persons, setPersons] = useState([{name: 'Edgar Cheverier', number: 123456}]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

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

  const displayNumbers = () =>
    persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)

  return (
    <div>
      <h2>Phonebook</h2>
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
