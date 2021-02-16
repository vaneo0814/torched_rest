import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

function Modal({open, children, onClose}) {
    if(!open) return null
    return ReactDom.createPortal(
        <>
        <div className="overlayStyle"/>
        <div className="modalStyles">
            <button onClick={onClose}>Close Modal</button>
            {children}
        </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal;
