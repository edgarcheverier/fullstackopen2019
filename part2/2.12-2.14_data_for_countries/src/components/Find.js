import React from 'react';

const Find = ({searchQuery, handleSearchQuery}) => {
  return (
    <div>
      Find countries <input value={searchQuery} onChange={handleSearchQuery}/>
    </div>
  )
};

export default Find;
