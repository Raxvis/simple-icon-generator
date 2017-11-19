import React from 'react';

class Editor extends React.Component {
	state = { img: '' };

	componentDidMount () {
		const xml = new XMLSerializer().serializeToString(document.getElementById('svg'));

		this.setState({ img: `data:image/svg+xml;base64,${btoa(xml)}` });
	}

	componentDidUpdate (prevProps, prevState) {
		const xml = new XMLSerializer().serializeToString(document.getElementById('svg'));

		if (prevState.img !== `data:image/svg+xml;base64,${btoa(xml)}`) {
			this.setState({ img: `data:image/svg+xml;base64,${btoa(xml)}` });
		}
	}

	render () {
		return (
			<div className="inline">
				<a download={`export.svg`} href={this.state.img}>SVG</a>
			</div>
		);
	}
}

export default Editor;