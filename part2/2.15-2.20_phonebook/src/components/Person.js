import React from 'react';

const Person = ({person, handleDeletePerson}) =>
  <li>
    {person.name} {person.number}
    <button onClick={() => handleDeletePerson(person.name, person.id)}>Delete</button>
  </li>


export default Person;
