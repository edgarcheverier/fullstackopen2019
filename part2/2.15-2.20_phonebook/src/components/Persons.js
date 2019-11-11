import React from 'react';
import Person from './Person';

const Persons = ({newFilter, filteredPersons, persons}) => {
  const displayNumbers = () => {
    if (newFilter) {
      if (filteredPersons.length) {
        return filteredPersons.map(filteredPerson =>
          <Person key={filteredPerson.name} person={filteredPerson} />)
      }
      return <li>no results</li>
    }
    return persons.map(person => <Person key={person.name} person={person} />)
  }

  return (
    <ul>
      {displayNumbers()}
    </ul>
  )
}

export default Persons;
