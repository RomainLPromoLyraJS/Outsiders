//import React
import React from 'react';

const Modal = ({ visible, hidden }) => {

    return (

        <div className='modal' style={{
            transform: visible ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: visible ? '1' : '0',
        }}>
    
            <button onClick={hidden}>X</button>
            <p>Le sport a bien été créé.</p>
            <button onClick={hidden}>OK</button>
        </div>
    )

}

export default Modal;