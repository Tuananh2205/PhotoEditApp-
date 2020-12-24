import React, { useState, useRef } from "react";
import "../styles/Editor.css";
import "../components/UploadFille/index";
// import GreyScale from "../components/GreyScale/index";
// import ControlText from "../components/ControlText/index";
import SaveImage from "../components/SaveImage/index";
import Reset from "../components/Reset/index";
import Sidebar from "../components/Sidebar/index";
import "./style.scss";
import { Layout, Breadcrumb } from "antd";
// import {
//   GatewayOutlined,
//   BgColorsOutlined,
//   FileOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
const { Content, Sider } = Layout;
// const { SubMenu } = Menu;

function Editor() {
  const [imgsrc, setImgsrc] = useState(null);
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState();

  const canvas = canvasRef.current;

  const image = new Image();
  image.crossOrigin = "Anonymous";
  image.src = imgsrc;
  // console.log("image", imgsrc);
  // console.log("imgsrc", image.src.split("/")[image.src.split("/").length]);
  const setContext = (newCtx) => {
    console.log("set context");
    setCtx(newCtx);
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
      // newCtx.save();
    } else {
      if (!canvas) {
        alert("Image not found!");
        return;
      } else {
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
  if (imgsrc !== null) {
    drawImage("initial");
  }

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider theme="light" width="400">
          <Sidebar
            setFile={setImgsrc}
            ctx={ctx}
            setContext={setContext}
            canvas={canvas}
            image={image}
          />
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }} theme="dark">
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
              <Breadcrumb.Item>Detail</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {/* <UploadFile setFile={setImage} /> */}
              <br />
              {/* <h1 id="title-text">IMAGE FIELD</h1> */}
              <div className="file-container container mt-3">
                {/* <UseCanvasImage imgsrc={image} /> */}
                <div className="present-container">
                  <Reset drawImage={drawImage} />
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
                  <SaveImage canvas={canvas} />
                  <hr />
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
      {/* <UploadFile setFile={setImage} />
      <br />
      <h1 id="title-text">IMAGE FIELD</h1>
      <div className="file-container container mt-3">
        <UseCanvasImage imgsrc={image} />
      </div> */}
    </>
  );
}

export default Editor;
