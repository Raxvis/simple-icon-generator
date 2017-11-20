/* global WebFont */
import React from 'react';

const fonts = require('./fonts.json');

class Field extends React.Component {

	onChange (value) {
		try {
			WebFont.load({ google: { families: [value] } });
		} catch (error) {
			console.log(error);
		}
		this.props.onChange({ fontFamily: value });
	}

	render () {
		return (
			<div>
				<label>
					Google Font
					<select
						onChange={(event) => this.onChange(event.target.value)}
						value={this.props.fontFamily}
					>
						<option value="" />
						{fonts.map((font) => <option key={font} value={font}>{font}</option>)}
					</select>
				</label>
			</div>
		);
	}
}

export default Field;