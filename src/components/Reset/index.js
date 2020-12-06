import React from "react";
import "./index.css"
function Reset(props) {
    const {drawImage} = props
    return (
    <div className="reset-container">
    <div className="center">
      <button className="btn btn-primary" id="reset" onClick={drawImage}>
        Reset
      </button>
    </div>
    </div>
  );
}

export default Reset;
