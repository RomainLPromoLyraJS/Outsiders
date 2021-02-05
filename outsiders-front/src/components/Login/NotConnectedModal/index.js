//import React
import React from "react";
import { Link } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";

const NotConnectedModal = ({ clicked, setClicked }) => {
  const toggleModal = () => {
    setClicked(false);
  };

  const modalStyle = clicked
    ? "modal modal__visible--active"
    : "modal modal__visible";

  return (
    <div className={modalStyle}>
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
            Si vous n'êtes pas encore inscrit, vous pouvez cliquer sur ce lien :{" "}
          </p>
          <Link className="modal__description__link" to="/signup">
            Inscription
          </Link>
        </div>
        <button className="modal__button__ok" onClick={toggleModal}>
          OK
        </button>
      </div>
    </div>
  );
};

export default NotConnectedModal;
