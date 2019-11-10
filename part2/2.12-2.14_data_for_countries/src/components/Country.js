import React from 'react';

const Country = ({name, handleSearchQuery}) =>
  <li>{name} <button onClick={() => handleSearchQuery(name)}>Show</button></li>

export default Country;
