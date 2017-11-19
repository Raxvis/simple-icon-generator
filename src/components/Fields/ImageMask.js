import React from 'react';

const field = (props) => (
	<div>
		<label>
			Image Mask
			<input
				defaultChecked={false}
				onChange={() => props.onChange({ imageMask: !props.imageMask })}
				type="checkbox"
			/>
			<div className="small">Alpha Mask (white shows up)</div>
		</label>
	</div>
);

export default field;