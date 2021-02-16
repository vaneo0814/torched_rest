import React, {useState} from 'react';
import './style.css';
import Modal from "./modal.js";

function Chefs (){
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
       <div className="genBackground">
          <div className="buttonWrapper">
        <button onClick={()=> setIsOpen(true)}>Open Modal</button>
        <Modal open={isOpen} onClose={()=> setIsOpen(false)}>
            Fancy Modal
        </Modal>
          </div>
          <div className="content">
              Other Content BS
          </div>
        </div>
        </>
    )
    
}
export default Chefs;
  