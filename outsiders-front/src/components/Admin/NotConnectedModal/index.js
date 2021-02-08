//import React
import React from "react";
import { Link } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";

const NotConnectedModal = ({ closeModal }) => {
  const toggleModal = () => {
    closeModal();
  };

  return (
    <div className="modal modal__visible--active">
      <div className="modal__content">
        <IoIosCloseCircle
          className="modal__button__cross"
          onClick={toggleModal}
        />
        <div className="modal__description">
          <p className="modal__description__text">
            L'email et/ou le mot de passe sont érronés. Veuillez rééssayer.
          </p>
          <p className="modal__description__text">
            Si vous n'êtes pas administrateur, vous n'êtes pas au bon endroit
            pour vous connecter en tant que membre du site :
          </p>
          <Link className="modal__description__link" to="/login">Connexion Membre</Link>
          <p className="modal__description__text">Si vous souhaitez vous inscrire : </p>
          <Link className="modal__description__link" to="/signup">Inscription</Link>
        </div>
        <button className="modal__button__ok" onClick={toggleModal}>
          OK
        </button>
      </div>
    </div>
  );
};

export default NotConnectedModal;
