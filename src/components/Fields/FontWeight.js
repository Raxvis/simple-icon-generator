import React from 'react';

const field = (props) => (
	<div>
		<label>
			Font Weight
			<input
				onChange={(event) => props.onChange({ fontWeight: event.target.value })}
				type="number"
				value={props.fontWeight}
			/>
		</label>
	</div>
);

export default field;