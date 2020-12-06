import React from "react";
import './index.css';
function CropImage(props) {
  const {canvas, image, setCrop, drawImage } = props;

  const changeCrop = (e) => {
    console.log("width vs height: ", canvas.width, canvas.height);
    setCrop({"sX": e.target.value,
    "sY" : e.target.value,
    "sW" : image.width,
    "sH" : image.height,
    "dW" : canvas.width,
    "dH" : canvas.height,
    "dX" : e.target.value,
    "dY" : e.target.value})
  }

  const doCrop = (e) => {
    drawImage(e)
  };

  return (
    <div>
      <form id="crop" className="crop-filter" onSubmit={doCrop}>
        <label>Start position:</label>

        <div className="form-row">
          <div className="col">
            <input name="sX" className="form-control" type="text" placeholder="Input x" onChange={changeCrop} required/>
          </div>
          <div className="col">
            <input name="sY" className="form-control" type="text" placeholder="Input y" onChange={changeCrop} required/>
          </div>
        </div>
        <br></br>
        <label>End position:</label>
        <div className="form-row">
          <div className="col">
            <input
              name="dX"
              className="form-control"
              type="text"
              placeholder="Input x'"
              onChange={changeCrop}
              required
            />
          </div>
          <div className="col">
            <input
              name="dY"
              className="form-control"
              type="text"
              placeholder="Input y'"
              onChange={changeCrop}
              required
            />
          </div>
        </div>
        <div className="button_container">
        <button type="submit" className="btn btn-light">Crop</button>
        </div>
      </form>
    </div>
  );
}

export default CropImage;
