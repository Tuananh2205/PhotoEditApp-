import React from "react";
import "./index.css";
function Rotate(props) {
  const { image, canvas, setContext, ctx } = props;
  // const image = new Image();
  // image.crossOrigin = "Anonymous";
  console.log("render rotate");
  let isFirstRun = true;
  let currentAngle = 0;
  async function setImageSrc() {
    image.src = await canvas.toDataURL();
  }
  const doRotate = async (e) => {
    e.preventDefault();
    if (isFirstRun) {
      isFirstRun = false;
      await setImageSrc();
      currentAngle = parseInt(e.target.inputRotate.value);
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const x = 0;
    const y = 0;
    const radians = (Math.PI / 180) * currentAngle,
      cos = Math.cos(radians),
      sin = Math.sin(radians),
      nx = cos * (x - cx) + sin * (y - cy) + cx,
      ny = cos * (y - cy) - sin * (x - cx) + cy;
    ctx.rotate((currentAngle * Math.PI) / 180);
    console.log(image.src);
    ctx.drawImage(
      image,
      0,
      0,
      image.width,
      image.height,
      -nx,
      -ny,
      canvas.width,
      canvas.height
    );
    ctx.save();
    await setContext(ctx);
    currentAngle = currentAngle + parseInt(e.target.inputRotate.value);
  };

  return (
    <div className="rotate-filter ">
      <form onSubmit={doRotate} id="rotate" className="form-group">
        <input
          type="text"
          placeholder="Rotate angle"
          id="inputRotate"
          className="form-control"
          // onChange={changeAngle}
          required
        />
        <div className="button_container">
          <button id="rotate-btn" type="submit" className="btn btn-light">
            Rotate
          </button>
        </div>
      </form>
    </div>
  );
}

export default Rotate;
