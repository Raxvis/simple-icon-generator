import React from 'react';

const field = (props) => (
	<div>
		<label>
			Border Color
			<input
				onChange={(event) => props.onChange({ borderColor: event.target.value })}
				type="color"
				value={props.borderColor}
			/>
		</label>
	</div>
);

export default field;