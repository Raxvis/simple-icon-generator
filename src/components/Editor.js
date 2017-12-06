/* global WebFont */
import BackgroundColor from './Fields/BackgroundColor';
import { Base64 } from 'js-base64';
import BorderColor from './Fields/BorderColor';
import BorderWidth from './Fields/BorderWidth';
import ExportPng from './ExportPNG';
import ExportSize from './Fields/ExportSize';
import ExportSvg from './ExportSVG';
import FontFamily from './Fields/FontFamily';
import FontPosition from './Fields/FontPosition';
import FontSize from './Fields/FontSize';
import FontWeight from './Fields/FontWeight';
import GoogleFonts from './Fields/GoogleFonts';
import Image from './Fields/Image';
import ImageMask from './Fields/ImageMask';
import ImageSize from './Fields/ImageSize';
import React from 'react';
import Shape from './Fields/Shape';
import Svg from './SVG';
import Text from './Fields/Text';

class Editor extends React.Component {
	state = {
		backgroundColor: '#990033',
		borderColor: '#ff9966',
		borderWidth: '4',
		exportSize: 512,
		exporting: false,
		fontFamily: 'Arial',
		fontPosition: 62,
		fontSize: 35,
		fontWeight: 600,
		image: '',
		imageMask: '',
		imageSize: 50,
		shape: 'hexagon120',
		text: 'SIG'
	}

	componentWillMount () {
		try {
			const hash = window.location.href.split('#').pop();

			if (hash && hash.indexOf('http') === -1) {
				const json = Base64.decode(hash);
				const newState = JSON.parse(json);

				this.updateState(newState);
			}
		} catch (error) {
			console.log(error);
		}
	}

	updateState (newState) {
		delete newState.exporting;

		this.setState(newState);
		if (newState.fontFamily) {
			try {
				WebFont.load({ google: { families: [newState.fontFamily] } });
			} catch (error) {
				console.log(error);
			}
		}
	}

	changeState (params) {
		if (!params.exporting) {
			this.setState({ exporting: false });
		}
		this.setState(params);
	}

	startExporting (event) {
		event.preventDefault();
		this.setState({ exporting: true });
	}

	render () {
		return (
			<div>
				<div className="split viewer">
					<Svg {...this.state} />
				</div>
				<div className="split editor">
					<div style={{ textAlign: 'right' }}>
						<a href={`#${Base64.encodeURI(JSON.stringify(this.state))}`}>Bookmark Link</a>
					</div>
					<Shape onChange={(params) => this.changeState(params)} {...this.state} />
					<BackgroundColor onChange={(params) => this.changeState(params)} {...this.state} />
					<BorderColor onChange={(params) => this.changeState(params)} {...this.state} />
					<BorderWidth onChange={(params) => this.changeState(params)} {...this.state} />
					<Text onChange={(params) => this.changeState(params)} {...this.state} />
					<GoogleFonts onChange={(params) => this.changeState(params)} {...this.state} />
					<FontFamily onChange={(params) => this.changeState(params)} {...this.state} />
					<FontWeight onChange={(params) => this.changeState(params)} {...this.state} />
					<FontSize onChange={(params) => this.changeState(params)} {...this.state} />
					<FontPosition onChange={(params) => this.changeState(params)} {...this.state} />
					<Image onChange={(params) => this.changeState(params)} {...this.state} />
					<ImageSize onChange={(params) => this.changeState(params)} {...this.state} />
					<ImageMask onChange={(params) => this.changeState(params)} {...this.state} />
					<ExportSize onChange={(params) => this.changeState(params)} {...this.state} />
					{this.state.exporting ? (
						<div>
							<label>Export:
								<ExportSvg {...this.state} />
								<ExportPng size={this.state.exportSize} {...this.state} />
							</label>
						</div>
					) : (
						<div>
							<label>Export:
								<button className="inline" onClick={(event) => this.startExporting(event)}>Prepare Export</button>
							</label>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Editor;