import React from 'react';

const field = (props) => (
	<div>
		<label>
			Font Family
			<input
				onChange={(event) => props.onChange({ fontFamily: event.target.value })}
				type="text"
				value={props.fontFamily}
			/>
		</label>
	</div>
);

export default field;