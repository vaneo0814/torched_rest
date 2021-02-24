import React from "react";
import "./style.css";
import { FaPencilAlt } from 'react-icons/fa';

function UpdateBtn(props) {
  return (
    <span className="update-btn mr-4" {...props} role="button" tabIndex="0">
      <FaPencilAlt/>
    </span>
  );
}

export default UpdateBtn;
