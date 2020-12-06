import React, { useRef, useState } from 'react';
import './index.css';
import FlipImage from '../FlipImage/index';
import GreyScale from '../GreyScale/index';
import Rotate from '../Rotate/index';
import CropImage from '../CropImage/index';
import ControlText from '../ControlText/index';
import SaveImage from '../SaveImage/index';
import Reset from '../Reset/index';
// import fontList from "font-list"
function UseCanvasImage(props) {
	const { imgsrc } = props;
	const canvasRef = useRef(null);

	const [text, setText] = useState({
		content: '',
		x: 0,
		y: 0,
		txt_color: '#000000',
		weight: '',
		size: '',
		fonts: [],
	});
	const [ctx, setCtx] = useState();

	const [crop, setCrop] = useState({
		sX: 0,
		sY: 0,
		sW: 0,
		sH: 0,
		dW: 0,
		dH: 0,
		dX: 0,
		dY: 0,
	});

	// const [dataURL, setDataURL] = useState();
	// const [isFirstRun, setIsFirstRun] = useState(true);
	// const [rotateAngle, setRotateAngle] = useState(0);
	const canvas = canvasRef.current;

	const image = new Image();
	image.crossOrigin = 'Anonymous';
	image.src = imgsrc;

	async function drawText() {
		const canvas = canvasRef.current;
		const ctx = await canvas.getContext('2d');

		ctx.fillStyle = text.txt_color;
		ctx.textBaseline = 'top';
		console.log(text.weight);
		console.log(text.size);
		console.log(typeof text.weight);
		console.log(typeof text.size);
		console.log(typeof text.font);
		ctx.font = `${text.weight} ${text.size} Broadway`;
		console.log(ctx.font);
		// ctx.font = "italic 100px 'ABeeZee'";
		ctx.fillText(text.content, text.x, text.y);
		console.log(text.content, text.x, text.y);
	}

	function setContext(newCtx) {
		setCtx(newCtx);
		console.log('setCtx');
	}

	// function setData(dataURL) {
	//   setDataURL(dataURL);
	// }

	async function drawImage(e) {
		if (e === 'initial') {
			let newCtx = await canvas.getContext('2d');
			setContext(newCtx);
			newCtx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
			newCtx.save();
		} else {
			if (!canvas) {
				console.log('Canvas not found');
			} else {
				e.preventDefault();
				// ctx = canvas.getContext("2d");
				if (image) {
					if (e.target.id === 'reset') {
						ctx.restore();
						ctx.setTransform(1, 0, 0, 1, 0, 0);
						// ctx.clearRect(0,0,canvas.width, canvas.height)
						ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
					}

					let imgData = await ctx.getImageData(0, 0, canvas.width, canvas.height);

					//---------filter--------------
					let filter = e.target.id;
					let dataChange;
					switch (filter) {
						case 'flipH':
							// dataChange = flipHorizontal(pixelArr, canvas.width);
							imgData.data.set(dataChange);
							ctx.putImageData(imgData, 0, 0);
							break;
						case 'flipV':
							// dataChange = flipVerticle(pixelArr, canvas.width);
							imgData.data.set(dataChange);
							ctx.putImageData(imgData, 0, 0);
							break;
						case 'greyScale':
							// dataChange = convertToGreyscale(pixelArr);
							imgData.data.set(dataChange);
							ctx.putImageData(imgData, 0, 0);
							break;
						case 'crop':
							ctx.restore();
							ctx.clearRect(0, 0, canvas.width, canvas.height);
							ctx.drawImage(
								image,
								parseInt(crop.sX),
								parseInt(crop.sY),
								crop.sW,
								crop.sH,
								parseInt(crop.dX),
								parseInt(crop.dY),
								crop.dW,
								crop.dH
							);
							break;
						case 'rotate':
							break;
						default:
							break;
					}
				}
			}
		}
	}

	if (imgsrc != null) {
		drawImage('initial');
	}

	return (
		<div className="present-container">
			<Reset drawImage={drawImage} />
			{/* --------------------------------------------------------- */}
			<br />
			<div className="center-canvas">
				<canvas id="my_canvas" ref={canvasRef} width={600} height={400} style={{ border: '1px solid black' }} />
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
			<CropImage canvas={canvas} image={image} setCrop={setCrop} drawImage={drawImage} />
			<hr />
			<ControlText text={text} setText={setText} drawText={drawText} />
		</div>
	);
}

export default UseCanvasImage;
