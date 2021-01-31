// == Package Import
import React, { useState } from 'react';
import { FaPaperPlane } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

// == Local Import
import Message from './Message';

const MessageSection = ({ messages, username }) => {
  // toggle message window
  const [ displayMessages, setDisplayMessages] = useState(false);
  const messengerStyle = displayMessages
    ? 'messageSection__messenger active'
    : 'messageSection__messenger inactive'
  const toggleMessages = () => {
    setDisplayMessages(!displayMessages);
  };

  return (
    <section className="messageSection">
      <button onClick={toggleMessages} className="messageSection__toggle">Messagerie de la sortie</button>
      <div className={messengerStyle}>
        <div className="messageSection__messenger__container">
          <div className="messageSection__messenger__container__header">
            <h2 className="messageSection__messenger__container__header__title">Messagerie</h2>
            <IoIosCloseCircle onClick={toggleMessages} className="messageSection__messenger__container__header__btn" />
          </div>
          <div className="messageSection__messenger__container__viewer">
            {messages.map((msg) => {
              return <Message key={msg.id} msg={msg} username='Surf Mania' />
            })}
          </div>
          <form className="messageSection__messenger__container__form">
            <textarea className="messageSection__messenger__container__form__input" placeholder="C'est ici que tu peux raconter ta vie..." />
            <button className="messageSection__messenger__container__form__btn"><FaPaperPlane /></button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;