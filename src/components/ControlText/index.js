import React, { useEffect, useState } from 'react';
// import FontOption from "./fontOption";

import './index.css';
function ControlText(props) {
	const { text, setText, ctx } = props;
	const [fonts, setFonts] = useState([]);
	const getData = () =>
		fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDmsHMz7ufFxXwkgn8HDmUpWcpPEZpgwBI`)
			.then((response) => response.json())

			.catch((error) => {
				console.log(error);
			});
	useEffect(() => {
		getData().then((response) => setFonts(response.items));
	}, []);

	// const changeFont = (e) => {
	// 	console.log(e.currentTarget.value);
	// 	setText((prevState) => {
	// 		return {
	// 			...prevState,
	// 			fonts: [e.currentTarget.value],
	// 		};
	// 	});
	// };
	const changeFont = (e) => {
		console.log(e.target.options[e.target.selectedIndex].getAttribute('url'));
		console.log(e.target.id);
		const url = e.target.options[e.target.selectedIndex].getAttribute('url');
		const regex = /http/gi;
		const sUrl = url.replace(regex, 'https');
		console.log(sUrl);
		setText((prevState) => {
			return {
				...prevState,
				[e.target.id]: sUrl,
			};
		});
	};

	const changeStyle = (e) => {
		// console.log(e.target.options[e.target.selectedIndex].getAttribute("url"));
		console.log(e.target.id);

		const id = e.currentTarget.id;
		switch (id) {
			case 'bold':
				setText((prevState) => {
					return {
						...prevState,
						weight: id,
					};
				});
				break;
			case 'italic':
				setText((prevState) => {
					return {
						...prevState,
						weight: id,
					};
				});
				break;
			// case "fontName":
			//   setText((prevState) => {
			//     return {
			//       ...prevState,
			//       [e.target.id]: e.target.options[
			//         e.target.selectedIndex
			//       ].getAttribute("url"),
			//     };
			//   });
			//   break;
			// case 'light':
			// 	setText((prevState) => {
			// 		return {
			// 			...prevState,
			// 			weight: id,
			// 		};
			// 	});
			// 	break;
			default:
				break;
		}
	};

	const changeText = (e) => {
		console.log(e.target.name);
		setText((prevState) => {
			return {
				...prevState,
				[e.target.name]: e.target.value,
			};
		});
	};
	const drawText = async () => {
		let f = new FontFace('fontne', `url(${text.fontName})`);
		await f.load();
		document.fonts.add(f);
		ctx.fillStyle = `${text.txt_color}`;
		ctx.textBaseline = 'top';
		ctx.font = `${text.weight} ${text.size}px 'fontne'`;
		// ctx.font = "italic 100px 'ABeeZee'";
		ctx.fillText(text.content, text.x, text.y);
		console.log(text.content, text.x, text.y, text.fontName);
	};
	const showOnImage = (e) => {
		e.preventDefault();
		console.log(text);
		drawText();
	};
	// console.log(text.fonts.items);

	return (
		<div>
			<form className="comment-filter" onSubmit={showOnImage}>
				<label>Text</label>
				<div className="form-row">
					<div className="col">
						<input
							className="form-control"
							name="content"
							type="text"
							placeholder="Fill content"
							onChange={changeText}
							required
						/>
					</div>
					<div className="col">
						<input
							type="color"
							className="form-control"
							onChange={changeText}
							id="txt_color"
							name="txt_color"
							required
						/>
					</div>
					<div className="col">
						<input
							className="form-control"
							name="size"
							type="text"
							placeholder="Text size"
							onChange={changeText}
							required
						/>
					</div>
					<div className="col">
						<div className="text-weight">
							<div className="text-status">
								<button type="submit" className="btn-status" id="bold" onClick={changeStyle}>
									<i className="fas fa-bold" />
								</button>
							</div>
							<div className="text-status">
								<button type="submit" className="btn-status" id="italic" onClick={changeStyle}>
									<i className="fas fa-italic" />
								</button>
							</div>
						</div>
					</div>
					<div>
						<div className="col">
							<select className="form-control" id="fontName" name="fontName" onChange={changeFont}>
								{fonts.map((item, index) => (
									<option key={index} url={item.files.regular}>
										{item.family}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className="col">
						<input
							className="form-control"
							name="x"
							type="number"
							placeholder="Text Position (X)"
							onChange={changeText}
							required
						/>
					</div>
					<div className="col">
						<input
							className="form-control"
							name="y"
							type="number"
							placeholder="Text Position (Y)"
							onChange={changeText}
							required
						/>
					</div>
				</div>
				<div className="button_container">
					<button className="btn btn-light" type="submit">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default ControlText;
