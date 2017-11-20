import React from 'react';

const field = (props) => (
	<div>
		<label>
			Font Position
			<input
				onChange={(event) => props.onChange({ fontPosition: event.target.value })}
				type="number"
				value={props.fontPosition}
			/>
		</label>
	</div>
);

export default field;