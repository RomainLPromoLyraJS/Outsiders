//import React
import React from 'react';
import { IoIosCloseCircle } from "react-icons/io";

const Modal = ({ visible, hidden, action, title }) => {

 
	const toggleModal = () => {
		hidden(!visible);
	}

	const modalStyle = visible ? 'modal modal__visible--active' : 'modal modal__visible';
	
	return (
		<div className={modalStyle}>
			<div className='modal__content'>
				<IoIosCloseCircle className='modal__button__cross' onClick={toggleModal} />
				<p className="modal__sport">{title} a bien été {action}.</p>
				<button className='modal__button__ok' onClick={toggleModal}>OK</button>
			</div>
		</div>
	);
};

export default Modal;