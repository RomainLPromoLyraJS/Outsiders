// == Package Import
import React from 'react';

const Message = ({ msg, username }) => {
  const messageStyle = (username === msg.username)
    ? 'message--sent'
    : 'message'

  const containerStyle = (username === msg.username)
  ? 'message__container--sent'
  : 'message__container'
  return (
    <div className={messageStyle}>
      <div className={containerStyle}>
        <h2 className="message__container__user">{msg.username}</h2>
        <p className="message__container__content">{msg.content}</p>
      </div>
    </div>
  );
};

export default Message;