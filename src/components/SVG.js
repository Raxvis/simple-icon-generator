import React from 'react';

const triangleHeight = (size) => Math.sqrt(Math.pow(size, 2) - Math.pow(size/2, 2));
const triangleSpace = (size) => (size - triangleHeight(size)) / 2;
const triangle = (size) => `
	${size/2},${triangleSpace(size)}
	0,${triangleHeight(size) + triangleSpace(size)}
	${size},${triangleHeight(size) + triangleSpace(size)}
`;
const square = () => `0,0 0,100 100,100 100,0`;
const diamond = () => `0,50 50,100 100,50 50,0`;
const hexagon = (size) => `
	0,${size/2}
	${size/4},${size/15}
	${size*3/4},${size/15}
	${size},${size/2}
	${size*3/4},${size*14/15}
	${size/4},${size*14/15}
`;
const hexagon120 = (size) => `
	${size/2},0
	${size/15},${size/4}
	${size/15},${size*3/4}
	${size/2},${size}
	${size*14/15},${size*3/4}
	${size*14/15},${size/4}
`;
const types = {
	diamond,
	hexagon,
	hexagon120,
	square,
	triangle
};
const coords = (type) => types[type](100);

const app = (props) => (
	<svg version="1.1" id="svg" x="0px" y="0px" viewBox="0 0 100 100">
		<defs>
			<clipPath id="circleClip">
				<circle cx="50" cy="50" r="50" />
			</clipPath>
			{props.shape !== 'circle' &&
				<clipPath id="polygonClip">
					<polygon points={coords(props.shape)} />
				</clipPath>
			}
			{props.image && props.imageMask ?
				<mask
					id="imageMask"
					maskUnits="objectBoundingBox"
					x="0"
					y="0"
					width="100"
					height="100"
				>
					<image
						href={props.image}
						x={50-(props.imageSize/2)}
						y={50-(props.imageSize/2)}
						height={`${props.imageSize}px`}
						width={`${props.imageSize}px`}
						fill={props.borderColor}
					/>
				</mask>
			: null}
		</defs>
		{props.shape === 'circle' &&
			<circle
				fill={props.backgroundColor}
				cx="50"
				cy="50"
				r="50"
				stroke={props.borderColor}
				strokeWidth={props.borderWidth * 2}
				clipPath="url(#circleClip)"
			/>
		}
		{props.shape !== 'circle' &&
			<polygon
				fill={props.backgroundColor}
				points={coords(props.shape)}
				stroke={props.borderColor}
				strokeWidth={props.borderWidth * 2}
				clipPath="url(#polygonClip)"
			/>
		}

		{!props.image &&
			<text
				x="50"
				y={props.shape === 'triangle' ? 100 - triangleSpace(100) - (props.fontSize / 2) : '54'}
				fontFamily={props.fontFamily}
				fontSize={props.fontSize}
				fontWeight={props.fontWeight}
				fill={props.borderColor}
				textAnchor="middle"
				alignmentBaseline="middle"
			>
				{props.text}
			</text>
		}
		{props.image && !props.imageMask ?
			<image
				href={props.image}
				x={50-(props.imageSize/2)}
				y={50-(props.imageSize/2)}
				height={`${props.imageSize}px`}
				width={`${props.imageSize}px`}
				mask="url(#imageMask)"
				fill={props.borderColor}
			/>
		: null}
		{props.image && props.imageMask ?
			<rect
				x="0"
				y="0"
				width="100"
				height="100"
				fill={props.borderColor}
				mask="url(#imageMask)"
			/>
		: null}
	</svg>
);

export default app;