import React from 'react';

const Notification = ({newMessage, newError}) => {
  if (!newMessage) return null;

  const successStyles = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16,
    background: 'lightgrey',
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    margin: 10
  };

  const errorStyles = {
    color: 'red',
    fontStyle: 'italic',
    fontSize: 16,
    background: 'lightgrey',
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    margin: 10
  };

  return (
    <div style={newError ? errorStyles: successStyles}>
      <p>{newMessage}</p>
    </div>
  );
};

export default Notification;
