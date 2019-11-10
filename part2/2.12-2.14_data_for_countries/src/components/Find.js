import React from 'react';

const Find = ({searchQuery, handleSearchQuery}) => {
  const handleOnChange = (e) => {
    handleSearchQuery(e.target.value)
  }

  return (
    <div>
      Find countries <input value={searchQuery} onChange={handleOnChange}/>
    </div>
  )
};

export default Find;
