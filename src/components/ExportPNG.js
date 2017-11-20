/* global canvg */
import React from 'react';

class Editor extends React.Component {
	state = { img: '' };

	componentDidMount () {
		this.updateCanvas();
	}

	componentDidUpdate (prevProps, prevState) {
		this.updateCanvas(prevState);
	}

	updateCanvas (prevState) {
		const xml = new XMLSerializer().serializeToString(document.getElementById('svg'));
		const canvas = document.getElementById(`canvas${this.props.size}`);

		canvg(canvas, xml);

		if (!prevState) {
			this.setState({ img: canvas.toDataURL('image/png') });
		} else if (prevState.img !== canvas.toDataURL('image/png')) {
			this.setState({ img: canvas.toDataURL('image/png') });
		}
	}

	render () {
		return (
			<div className="inline">
				<canvas
					height={this.props.size}
					id={`canvas${this.props.size}`}
					style={{ display: 'none' }}
					width={this.props.size}
				/>
				<a className="button" download={`export${this.props.size}px.png`} href={this.state.img}>PNG</a>
			</div>
		);
	}
}

export default Editor;