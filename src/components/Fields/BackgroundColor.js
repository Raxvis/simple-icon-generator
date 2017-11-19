import React from 'react';

const field = (props) => (
	<div>
		<label>
			Background Color
			<input
				className="color"
				onChange={(event) => props.onChange({ backgroundColor: event.target.value })}
				type="text"
				value={props.backgroundColor}
			/>
			<input
				onChange={(event) => props.onChange({ backgroundColor: event.target.value })}
				type="color"
				value={props.backgroundColor}
			/>
		</label>
	</div>
);

export default field;