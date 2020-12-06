import React from "react";

function GreyScale(props) {
  const { setContext, ctx, canvas } = props;
  // console.log(canvas);
  let array = [];
  const getImgData = async () => {
    let newData = await ctx.getImageData(0, 0, canvas.width, canvas.height);
    array = newData.data;
  };
  const changeToGreyscale = async () => {
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
      const gray = 0.2126 * item[0] + 0.7152 * item[1] + 0.0722 * item[2];
      item[0] = gray;
      item[1] = gray;
      item[2] = gray;
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
    let newArr = await changeToGreyscale();
    let imgData = await ctx.getImageData(0, 0, canvas.width, canvas.height);
    imgData.data.set(newArr);
    await ctx.putImageData(imgData, 0, 0);
    setContext(ctx);
    // ctx.drawImage(img, 0, 0);
  };
  return (
    <div className="grey-scale-filter">
      <button className="btn btn-light" id="greyScale" onClick={doConvert}>
        Change Greyscale
      </button>
    </div>
  );
}

export default GreyScale;
