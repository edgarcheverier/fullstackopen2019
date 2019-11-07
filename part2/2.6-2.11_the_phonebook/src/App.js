import React, { useState } from 'react';

function App() {

  const [persons, setPersons] = useState([{name: 'Edgar Cheverier'}]);
  const [newName, setNewName] = useState('');

  const handleSubmitPerson = (event) => {
    event.preventDefault();
    setPersons(persons.concat({name: newName}));
    setNewName('');
  };

  const displayNumbers = () =>
    persons.map(person => <li key={person.name}>{person.name}</li>)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmitPerson}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
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
