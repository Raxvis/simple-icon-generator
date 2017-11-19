import React from 'react';

const field = (props) => (
	<div>
		<label>
			Text
			<input
				onChange={(event) => props.onChange({ text: event.target.value })}
				type="text"
				value={props.text}
			/>
		</label>
	</div>
);

export default field;