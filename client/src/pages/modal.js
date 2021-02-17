import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

export default function Modal({open, children, onClose}) {
    if(!open) return null
    return ReactDom.createPortal(
        <>
        <div className="overlayStyle"/>
        <div className="modalStyles">
            {children}
        </div>
        </>,
        document.getElementById('portal')
    )
}



