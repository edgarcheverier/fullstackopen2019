import React from 'react';
import Person from './Person';

const Persons = ({newFilter, filteredPersons, persons, handleDeletePerson}) => {
  const displayNumbers = () => {
    if (newFilter) {
      if (filteredPersons.length) {
        return filteredPersons.map(filteredPerson =>
          <Person key={filteredPerson.id} person={filteredPerson} handleDeletePerson={handleDeletePerson}/>)
      }
      return <li>no results</li>
    }
    return persons.map(person => <Person key={person.id} person={person} handleDeletePerson={handleDeletePerson}/>)
  }

  return (
    <ul>
      {displayNumbers()}
    </ul>
  )
}

export default Persons;
