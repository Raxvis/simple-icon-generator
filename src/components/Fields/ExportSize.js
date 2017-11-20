import React from 'react';

const field = (props) => (
	<div>
		<label>
			Export Size
			<input
				onChange={(event) => props.onChange({ exportSize: event.target.value })}
				step="any"
				type="number"
				value={props.exportSize}
			/>
		</label>
	</div>
);

export default field;