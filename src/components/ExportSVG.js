import 'whatwg-fetch';
import { Base64 } from 'js-base64';
import React from 'react';

class Editor extends React.Component {
	state = { img: '' };

	componentDidMount () {
		this.updateLink();
	}

	componentDidUpdate (prevProps, prevState) {
		this.updateLink(prevState);
	}

	updateLink (prevState) {
		let xml = new XMLSerializer().serializeToString(document.getElementById('svg'));

		console.log(`https://fonts.googleapis.com/css?family=${this.props.fontFamily.replace(' ', '+')}`);

		fetch(`https://fonts.googleapis.com/css?family=${this.props.fontFamily.replace(' ', '+')}`)
			.then((response) => response.text())
			.then((css) => {
				xml = xml.replace(`<defs>`, `<style type="text/css">${css}</style><defs>`);

				if (!prevState) {
					this.setState({ img: `data:image/svg+xml;base64,${Base64.encode(xml)}` });
				} else if (prevState.img !== `data:image/svg+xml;base64,${Base64.encode(xml)}`) {
					this.setState({ img: `data:image/svg+xml;base64,${Base64.encode(xml)}` });
				}
			});
	}

	render () {
		return (
			<div className="inline">
				{this.state.img ? (
					<a className="button" download={`export.svg`} href={this.state.img}>SVG</a>
				) : null}
			</div>
		);
	}
}

export default Editor;