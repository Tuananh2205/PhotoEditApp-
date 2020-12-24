import React, { useState } from 'react';
import './index.css';
import BlackAndWhite from './BlackAndWhite';
import Warm from './Warm/index';
import Cold from './Cold/index';
import { Slider } from 'antd';
import Smooth from './Smooth';

function Filter(props) {
	const { setContext, ctx, canvas } = props;
	// // console.log(canvas);
	// let array = [];
	// const filters = [
	// 	{
	// 		name: 'Vintage',
	// 		url: 'https://cdn.jsdelivr.net/npm/photoeditorsdk@latest/assets/filter/categories/vintage.jpg',
	// 	},
	// 	{
	// 		name: 'Lomo',
	// 		url: 'https://cdn.jsdelivr.net/npm/photoeditorsdk@latest/assets/filter/categories/vintage.jpg',
	// 	},
	// 	{
	// 		name: 'Clarity',
	// 		url: 'https://cdn.jsdelivr.net/npm/photoeditorsdk@latest/assets/filter/categories/vintage.jpg',
	// 	},
	// 	{
	// 		name: 'SinCity',
	// 		url: 'https://cdn.jsdelivr.net/npm/photoeditorsdk@latest/assets/filter/categories/vintage.jpg',
	// 	},
	// 	{
	// 		name: 'Sunrise',
	// 		url: 'https://cdn.jsdelivr.net/npm/photoeditorsdk@latest/assets/filter/categories/vintage.jpg',
	// 	},
	// 	{
	// 		name: 'CrossProcess',
	// 		url: 'https://cdn.jsdelivr.net/npm/photoeditorsdk@latest/assets/filter/categories/vintage.jpg',
	// 	},
	// 	{
	// 		name: 'OrangePeel',
	// 		url: 'https://cdn.jsdelivr.net/npm/photoeditorsdk@latest/assets/filter/categories/vintage.jpg',
	// 	},
	// 	{
	// 		name: 'Love',
	// 		url: 'https://cdn.jsdelivr.net/npm/photoeditorsdk@latest/assets/filter/categories/vintage.jpg',
	// 	},
	// 	{
	// 		name: 'Grungy',
	// 		url: 'https://cdn.jsdelivr.net/npm/photoeditorsdk@latest/assets/filter/categories/vintage.jpg',
	// 	},
	// 	{
	// 		name: 'Jarques',
	// 		url: 'https://cdn.jsdelivr.net/npm/photoeditorsdk@latest/assets/filter/categories/vintage.jpg',
	// 	},
	// 	{
	// 		name: 'Pinhole',
	// 		url: 'https://cdn.jsdelivr.net/npm/photoeditorsdk@latest/assets/filter/categories/vintage.jpg',
	// 	},
	// 	{
	// 		name: 'OldBoot',
	// 		url: 'https://cdn.jsdelivr.net/npm/photoeditorsdk@latest/assets/filter/categories/vintage.jpg',
	// 	},
	// 	{
	// 		name: 'GlowingSun',
	// 		url: 'https://cdn.jsdelivr.net/npm/photoeditorsdk@latest/assets/filter/categories/vintage.jpg',
	// 	},
	// 	{
	// 		name: 'HazyDays',
	// 		url: 'https://cdn.jsdelivr.net/npm/photoeditorsdk@latest/assets/filter/categories/vintage.jpg',
	// 	},
	// 	{
	// 		name: 'HerMajesty',
	// 		url: 'https://cdn.jsdelivr.net/npm/photoeditorsdk@latest/assets/filter/categories/vintage.jpg',
	// 	},
	// 	{
	// 		name: 'Nostalgia',
	// 		url: 'https://cdn.jsdelivr.net/npm/photoeditorsdk@latest/assets/filter/categories/vintage.jpg',
	// 	},
	// 	{
	// 		name: 'Hemingway',
	// 		url: 'https://cdn.jsdelivr.net/npm/photoeditorsdk@latest/assets/filter/categories/vintage.jpg',
	// 	},
	// 	{
	// 		name: 'Concentrate',
	// 		url: 'https://cdn.jsdelivr.net/npm/photoeditorsdk@latest/assets/filter/categories/vintage.jpg',
	// 	},
	// ];
	const [visible, setVisible] = useState(false);
	// const handleClick = (e) => {
	// 	setVisible(true);
	// 	let id = e.currentTarget.id;
	// 	switch (id) {
	// 		case 'Vintage':
	// 			window.Caman(canvas, function () {
	// 				this.revert(false);
	// 				this.vintage().render();
	// 			});
	// 			break;
	// 		case 'Lomo':
	// 			window.Caman(canvas, function () {
	// 				this.revert(false);
	// 				this.lomo().render();
	// 			});
	// 			break;
	// 		case 'Clarity':
	// 			window.Caman(canvas, function () {
	// 				this.revert(false);
	// 				this.clarity().render();
	// 			});
	// 			break;
	// 		case 'SinCity':
	// 			window.Caman(canvas, function () {
	// 				this.revert(false);
	// 				this.sinCity().render();
	// 			});
	// 			break;
	// 		case 'Sunrise':
	// 			window.Caman(canvas, function () {
	// 				this.revert(false);
	// 				this.sunrise().render();
	// 			});
	// 			break;
	// 		case 'CrossProcess':
	// 			window.Caman(canvas, function () {
	// 				this.revert(false);
	// 				this.crossProcess().render();
	// 			});
	// 			break;
	// 		case 'OrangePeel':
	// 			window.Caman(canvas, function () {
	// 				this.revert(false);
	// 				this.orangePeel().render();
	// 			});
	// 			break;
	// 		case 'Love':
	// 			window.Caman(canvas, function () {
	// 				this.revert(false);
	// 				this.love().render();
	// 			});
	// 			break;
	// 		case 'Grungy':
	// 			window.Caman(canvas, function () {
	// 				this.revert(false);
	// 				this.grungy().render();
	// 			});
	// 			break;
	// 		case 'Jarques':
	// 			window.Caman(canvas, function () {
	// 				this.revert(false);
	// 				this.jarques().render();
	// 			});
	// 			break;
	// 		case 'Pinhole':
	// 			window.Caman(canvas, function () {
	// 				this.revert(false);
	// 				this.pinhole().render();
	// 			});
	// 			break;
	// 		case 'OldBoot':
	// 			window.Caman(canvas, function () {
	// 				this.revert(false);
	// 				this.oldBoot().render();
	// 			});
	// 			break;
	// 		case 'GlowingSun':
	// 			window.Caman(canvas, function () {
	// 				this.revert(false);
	// 				this.glowingSun().render();
	// 			});
	// 			break;
	// 		case 'HazyDays':
	// 			window.Caman(canvas, function () {
	// 				this.revert(false);
	// 				this.hazyDays().render();
	// 			});
	// 			break;
	// 		case 'HerMajesty':
	// 			window.Caman(canvas, function () {
	// 				this.revert(false);
	// 				this.herMajesty().render();
	// 			});
	// 			break;
	// 		case 'Nostalgia':
	// 			window.Caman(canvas, function () {
	// 				this.revert(false);
	// 				this.nostalgia().render();
	// 			});
	// 			break;
	// 		case 'Hemingway':
	// 			window.Caman(canvas, function () {
	// 				this.revert(false);
	// 				this.hemingway().render();
	// 			});
	// 			break;
	// 		case 'Concentrate':
	// 			window.Caman(canvas, function () {
	// 				this.revert(false);
	// 				this.concentrate().render();
	// 			});
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// };

	const removeFilter = async (e) => {
		window.Caman(canvas, function () {
			this.revert(false);
			this.render();
		});
		let imgData = await ctx.getImageData(0, 0, canvas.width, canvas.height);
		console.log(imgData.data);
		await ctx.putImageData(imgData, 0, 0);
		setContext(ctx);
	};
	return (
		<div>
			<div className="filter-wrapper">
				{visible ? (
					<div className="filter-tainer">
						<div className="label-filter">
							<label id="label" htmlFor="filter_range">
								Filter Intensity
							</label>
						</div>
						<Slider
							defaultValue={100}
							min={1}
							max={100}
							// onAfterChange={doConvert}
						/>
						<button className="btn_style" onClick={removeFilter}>
							Remove Filter
						</button>
					</div>
				) : null}
				<BlackAndWhite setContext={setContext} ctx={ctx} canvas={canvas} setVisible={setVisible} />
				<Warm canvas={canvas} setVisible={setVisible} />
				<Cold canvas={canvas} setVisible={setVisible} />
				<Smooth canvas={canvas} setVisible={setVisible} />
			</div>
		</div>
	);
}
export default Filter;
