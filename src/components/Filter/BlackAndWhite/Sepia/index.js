import React from "react";

function Sepia(props) {
  const { setContext, ctx, canvas, setVisible } = props;
  let array = [];
  const getImgData = async () => {
    let newData = await ctx.getImageData(0, 0, canvas.width, canvas.height);
    array = newData.data;
  };
  const changeToFilter = async () => {
    await getImgData();
    const output = [];
    const channel = 4;
    let row = [];
    let counter = 0;
    let max = channel;

    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      row.push(item);
      if (counter + 1 === max) {
        output.push(row);
        row = [];
        counter = -1;
      }
      counter++;
    }
    for (let item of output) {
      const sepia = 0.299 * item[0] + 0.587 * item[1] + 0.114 * item[2];
      item[0] = sepia + 100;
      item[1] = sepia + 80;
      item[2] = sepia + 40;
    }

    let newArr = [];
    for (let item of output) {
      for (let element of item) {
        newArr.push(element);
      }
    }
    return newArr;
  };
  const doConvert = async () => {
    setVisible(true);
    let newArr = await changeToFilter();
    let imgData = await ctx.getImageData(0, 0, canvas.width, canvas.height);
    imgData.data.set(newArr);
    await ctx.putImageData(imgData, 0, 0);
    setContext(ctx);
    // ctx.drawImage(img, 0, 0);
  };
  return (
    <div>
      <button className="btn_style" id="sepia" onClick={doConvert}>
        Sepia
      </button>
    </div>
  );
}

export default Sepia;
