import React, { useEffect } from 'react';
import './index.css';
function ControlText(props) {
	const { text, setText, drawText } = props;

	useEffect(() => {
		fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDmsHMz7ufFxXwkgn8HDmUpWcpPEZpgwBI`)
			.then((response) => response.json())
			.then(
				(data) =>
					setText((prevState) => {
						return {
							...prevState,
							fonts: [data.items],
						};
					})
				// console.log(data)
			);
	}, []);
	//

	const changeStyle = (e) => {
		console.log(e.currentTarget.id);
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

		// console.log("🚀 ~ file: index.js ~ line 282 ~ changeText ~ e.target.value", e.target.value)
	};

	const showOnImage = (e) => {
		e.preventDefault();
		console.log(text);
		drawText();
	};

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
							{/* <div className="text-status">
								<button type="submit" className="btn-status" id="light" onClick={changeStyle}>
									<i className="fas fa-underline" />
								</button>
							</div> */}
						</div>
					</div>
					<div className="col">
						{text.fonts.map((font, index) => (
							<select className="form-control" key={index} id="fontName" name="fontName">
								{/* { const el = font[index]} */}
								<option key={font[index].family} value={font[index].family}>
									{font[index].family}
								</option>
							</select>
						))}
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
