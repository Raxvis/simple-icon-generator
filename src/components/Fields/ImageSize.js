import React from 'react';

const field = (props) => (
	<div>
		<label>
			Image Size
			<input
				onChange={(event) => props.onChange({ imageSize: event.target.value })}
				step="any"
				type="number"
				value={props.imageSize}
			/>
		</label>
	</div>
);

export default field;