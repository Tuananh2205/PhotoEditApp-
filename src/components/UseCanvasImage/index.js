import React, { useRef, useState } from "react";
import "./index.css";
import FlipImage from "../FlipImage/index";
import GreyScale from "../GreyScale/index";
import Rotate from "../Rotate/index";
import CropImage from "../CropImage/index";
import ControlText from "../ControlText/index";
import SaveImage from "../SaveImage/index";
import Reset from "../Reset/index";
// import fontList from "font-list"
function UseCanvasImage(props) {
  const { imgsrc } = props;
  const canvasRef = useRef(null);

  const [ctx, setCtx] = useState();

  // const [dataURL, setDataURL] = useState();
  // const [isFirstRun, setIsFirstRun] = useState(true);
  // const [rotateAngle, setRotateAngle] = useState(0);
  const canvas = canvasRef.current;

  const image = new Image();
  image.crossOrigin = "Anonymous";
  image.src = imgsrc;

  const setContext = (newCtx) => {
    setCtx(newCtx);
    console.log("setCtx");
  };

  async function drawImage(e) {
    if (e === "initial") {
      let newCtx = await canvas.getContext("2d");
      setContext(newCtx);
      newCtx.drawImage(
        image,
        0,
        0,
        image.width,
        image.height,
        0,
        0,
        canvas.width,
        canvas.height
      );
      newCtx.save();
    } else {
      if (!canvas) {
        console.log("Canvas not found");
      } else {
        // e.preventDefault();
        // ctx = canvas.getContext("2d");
        if (image) {
          if (e.target.id === "reset") {
            ctx.restore();
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
              image,
              0,
              0,
              image.width,
              image.height,
              0,
              0,
              canvas.width,
              canvas.height
            );
          }
        }
      }
    }
  }

  if (imgsrc != null) {
    drawImage("initial");
  }

  return (
    <div className="present-container">
      <Reset drawImage={drawImage} />
      {/* --------------------------------------------------------- */}
      <br />
      <div className="center-canvas">
        <canvas
          id="my_canvas"
          ref={canvasRef}
          width={600}
          height={400}
          style={{ border: "1px solid black" }}
        />
      </div>
      {/* --------------------------------------------------------- */}
      <SaveImage canvas={canvas} />
      <hr />
      <div className="basic-function">
        <div className="do_flip">
          <FlipImage canvas={canvas} ctx={ctx} setContext={setContext} />
        </div>
        <div className="do_greyscale">
          <GreyScale canvas={canvas} ctx={ctx} setContext={setContext} />
        </div>
      </div>
      <hr />
      {/* --------------------------------------------------------- */}
      <Rotate image={image} canvas={canvas} ctx={ctx} setContext={setContext} />
      <hr />
      <CropImage
        canvas={canvas}
        image={image}
        ctx={ctx}
        setContext={setContext}
      />
      <hr />
      <ControlText ctx={ctx} />
    </div>
  );
}

export default UseCanvasImage;
