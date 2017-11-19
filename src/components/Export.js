import React from 'react';

class Editor extends React.Component {
	state = { img: '' };

	componentDidMount () {
		const xml = new XMLSerializer().serializeToString(document.getElementById('svg'));
		const img = new Image();

		img.onload = () => {
			const canvas = document.getElementById(`canvas${this.props.size}`);
			const context = canvas.getContext('2d');

			context.clearRect(0, 0, canvas.width, canvas.height);
			context.drawImage(img, 0, 0);
			this.setState({ img: canvas.toDataURL('image/png') });
		};
		img.src = `data:image/svg+xml;base64,${btoa(xml)}`;
	}

	componentDidUpdate (prevProps, prevState) {
		const xml = new XMLSerializer().serializeToString(document.getElementById('svg'));
		const img = new Image();

		img.onload = () => {
			const canvas = document.getElementById(`canvas${this.props.size}`);
			const context = canvas.getContext('2d');

			context.clearRect(0, 0, canvas.width, canvas.height);
			context.drawImage(img, 0, 0);
			if (prevState.img !== canvas.toDataURL('image/png')) {
				this.setState({ img: canvas.toDataURL('image/png') });
			}
		};
		img.src = `data:image/svg+xml;base64,${btoa(xml)}`;
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
				<a download={`export${this.props.size}px.png`} href={this.state.img}>{this.props.size}px</a>
			</div>
		);
	}
}

export default Editor;