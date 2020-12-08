import React, { useState } from "react";
import "./index.css";
function CropImage(props) {
  const { canvas, image, ctx, setContext } = props;
  const [crop, setCrop] = useState();
  const valueRef = React.useRef();

  // const changeCrop = (e) => {
  //   console.log("width vs height: ", canvas.width, canvas.height);
  //   console.log(e.target.value);
  //   setCrop({
  //     sX: e.target.value,
  //     sY: e.target.value,
  //     sW: image.width,
  //     sH: image.height,
  //     dW: canvas.width,
  //     dH: canvas.height,
  //     dX: e.target.value,
  //     dY: e.target.value,
  //   });
  // };

  const handleClick = (e) => {
    console.log("width vs height: ", canvas.width, canvas.height);
    console.log(valueRef);
    setCrop((prevState) => {
      return {
        ...prevState,
        sX: valueRef.current.value,
        sY: valueRef.current.value,
        sW: image.width,
        sH: image.height,
        dW: canvas.width,
        dH: canvas.height,
        dX: valueRef.current.value,
        dY: valueRef.current.value,
        // const changeCrop = (e) => {
        //   setCrop((prevState) => {
        //     return { ...prevState, [e.target.name]: e.target.value };
      };
    });
  };
  const doCrop = async (e) => {
    e.preventDefault();
    console.log("start to do crop", crop.sX, crop.sY, crop.dX, crop.dY);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
    ctx.drawImage(
      image,
      parseInt(crop.sX),
      parseInt(crop.sY),
      parseInt(crop.dX),
      parseInt(crop.dY),
      0,
      0,
      canvas.width,
      canvas.height
    );
    await setContext(ctx);
  };

  return (
    <div>
      <form id="crop" className="crop-filter" onSubmit={doCrop}>
        <label>Start position:</label>

        <div className="form-row">
          <div className="col">
            <input
              ref={valueRef}
              name="sX"
              className="form-control"
              type="text"
              placeholder="Source x"
              // onChange={changeCrop}
              required
            />
          </div>
          <div className="col">
            <input
              ref={valueRef}
              name="sY"
              className="form-control"
              type="text"
              placeholder="Source y"
              // onChange={changeCrop}
              required
            />
          </div>
        </div>
        <br></br>
        <label>End position:</label>
        <div className="form-row">
          <div className="col">
            <input
              ref={valueRef}
              name="dX"
              className="form-control"
              type="text"
              placeholder="Source width'"
              // onChange={changeCrop}
              required
            />
          </div>
          <div className="col">
            <input
              ref={valueRef}
              name="dY"
              className="form-control"
              type="text"
              placeholder="Source Height'"
              // onChange={changeCrop}
              required
            />
          </div>
        </div>
        <div className="button_container">
          <button type="submit" className="btn btn-light" onClick={handleClick}>
            Crop
          </button>
        </div>
      </form>
    </div>
  );
}

export default CropImage;
