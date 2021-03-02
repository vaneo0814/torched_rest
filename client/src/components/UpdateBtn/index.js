import React from "react";
import "./style.css";
import { FaPencilAlt } from 'react-icons/fa';

//might need to map through button for id grab?

function UpdateBtn(props) {
  return (
    <span className="update-btn-secondary mr-4" {...props} role="button" tabIndex="0">
      <FaPencilAlt/>
    </span>
  );
}

export default UpdateBtn;

// button here on the other page just needs to route to this component
