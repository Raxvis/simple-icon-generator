import BackgroundColor from './Fields/BackgroundColor';
import BorderColor from './Fields/BorderColor';
import BorderWidth from './Fields/BorderWidth';
import Export from './Export';
import ExportSvg from './ExportSVG';
import FontFamily from './Fields/FontFamily';
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
		exporting: false,
		fontFamily: 'Arial',
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
				const json = atob(hash);
				const newState = JSON.parse(json);

				this.setState(newState);
			}
		} catch (error) {
			console.log(error);
		}
	}

	changeState (params) {
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
					<Shape onChange={(params) => this.changeState(params)} {...this.state} />
					<BackgroundColor onChange={(params) => this.changeState(params)} {...this.state} />
					<BorderColor onChange={(params) => this.changeState(params)} {...this.state} />
					<BorderWidth onChange={(params) => this.changeState(params)} {...this.state} />
					<Text onChange={(params) => this.changeState(params)} {...this.state} />
					<GoogleFonts onChange={(params) => this.changeState(params)} {...this.state} />
					<FontFamily onChange={(params) => this.changeState(params)} {...this.state} />
					<FontWeight onChange={(params) => this.changeState(params)} {...this.state} />
					<FontSize onChange={(params) => this.changeState(params)} {...this.state} />
					<Image onChange={(params) => this.changeState(params)} {...this.state} />
					<ImageSize onChange={(params) => this.changeState(params)} {...this.state} />
					<ImageMask onChange={(params) => this.changeState(params)} {...this.state} />
					<div>
						<a href={`#${btoa(JSON.stringify(this.state))}`}>Bookmark Link</a>
					</div>
					{this.state.exporting ? ([
						<div key="svg">
							<div className="inline">Export Vector: </div>
							<ExportSvg {...this.state} />
						</div>,
						<div key="png">
							<div className="inline">Export PNG: </div>
							<Export size={32} {...this.state} />
							<Export size={64} {...this.state} />
							<Export size={128} {...this.state} />
							<Export size={256} {...this.state} />
							<Export size={512} {...this.state} />
							<Export size={1024} {...this.state} />
							<Export size={2048} {...this.state} />
							<Export size={4096} {...this.state} />
						</div>
					]) : (
						<div>
							<button onClick={(event) => this.startExporting(event)}>Prepare Export</button>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Editor;