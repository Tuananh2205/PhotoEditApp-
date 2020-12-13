import React from 'react';
import './index.css';
function Filter(props) {
	const { setContext, ctx, canvas } = props;
	// console.log(canvas);
	let array = [];
	const getImgData = async () => {
		let newData = await ctx.getImageData(0, 0, canvas.width, canvas.height);
		array = newData.data;
	};
	const changeToBandW = async () => {
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
			const sepia = 0.393 * item[0] + 0.769 * item[1] + 0.189 * item[2];
			item[0] = sepia;
			item[1] = sepia;
			item[2] = sepia;
		}

		let newArr = [];
		for (let item of output) {
			for (let element of item) {
				newArr.push(element);
			}
		}
		return newArr;
	};

	const doConvertBW = async (e) => {
		let newArr = await changeToBandW();
		let imgData = await ctx.getImageData(0, 0, canvas.width, canvas.height);
		imgData.data.set(newArr);
		await ctx.putImageData(imgData, 0, 0);
		setContext(ctx);
		// ctx.drawImage(img, 0, 0);
	};
	return (
		<div>
			<div className="btn-group">
				<button id="button-filter" type="button" className="btn dropdown-toggle" data-toggle="dropdown">
					B & W<span className="caret"></span>
				</button>

				<ul className="dropdown-menu" role="menu">
					<li>
						<button onClick={doConvertBW}>Sepia</button>
					</li>
					<li>
						<button> Hello</button>
					</li>
					<li>
						<button> Hello</button>
					</li>
				</ul>
			</div>
			{/* <button className="button-filter" onClick={doConvertBW}>
				<div>B & W </div>
				<span class="caret"></span>
			</button> */}
		</div>
	);
}

export default Filter;
