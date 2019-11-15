import React from 'react';

const Notification = ({message}) => {
  if (!message) return null;

  const notificationStyles = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16,
    background: 'lightgrey',
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    margin: 10
  }
  return (
    <div style={notificationStyles}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
