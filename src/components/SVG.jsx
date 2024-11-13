const triangleHeight = (size) => Math.sqrt(size ** 2 - (size / 2) ** 2);
const triangleSpace = (size) => (size - triangleHeight(size)) / 2;
const triangle = (size) =>
  `
  ${size / 2},${triangleSpace(size)}
  0,${triangleHeight(size) + triangleSpace(size)}
  ${size},${triangleHeight(size) + triangleSpace(size)}
`
    .replace(/\n/g, ' ')
    .replace(/\t/g, '');
const square = () => '0,0 0,100 100,100 100,0';
const diamond = () => '0,50 50,100 100,50 50,0';
const hexagon = (size) =>
  `
  0,${size / 2}
  ${size / 4},${size / 15}
  ${(size * 3) / 4},${size / 15}
  ${size},${size / 2}
  ${(size * 3) / 4},${(size * 14) / 15}
  ${size / 4},${(size * 14) / 15}
`
    .replace(/\n/g, ' ')
    .replace(/\t/g, '');
const hexagon120 = (size) =>
  `
  ${size / 2},0
  ${size / 15},${size / 4}
  ${size / 15},${(size * 3) / 4}
  ${size / 2},${size}
  ${(size * 14) / 15},${(size * 3) / 4}
  ${(size * 14) / 15},${size / 4}
`
    .replace(/\n/g, ' ')
    .replace(/\t/g, '');
const types = {
  diamond,
  hexagon,
  hexagon120,
  square,
  triangle,
};
const coords = (type) => types[type](100);

const SVG = (props) => (
  <svg id="svg" version="1.1" viewBox="0 0 100 100" x="0px" y="0px">
    <title>Simple Icon Generator Icon</title>
    <defs>
      <clipPath id="circleClip">
        <circle cx="50" cy="50" r="50" />
      </clipPath>
      {props.shape !== 'circle' && (
        <clipPath id="polygonClip">
          <polygon points={coords(props.shape)} />
        </clipPath>
      )}
      {props.image && props.imageMask ? (
        <mask height="100" id="imageMask" maskUnits="objectBoundingBox" width="100" x="0" y="0">
          <image
            fill={props.borderColor}
            height={`${props.imageSize}px`}
            href={props.image}
            width={`${props.imageSize}px`}
            x={50 - props.imageSize / 2}
            y={50 - props.imageSize / 2}
          />
        </mask>
      ) : null}
    </defs>
    {props.shape === 'circle' && (
      <circle
        clipPath="url(#circleClip)"
        cx="50"
        cy="50"
        fill={props.backgroundColor}
        r="50"
        stroke={props.borderColor}
        strokeWidth={props.borderWidth * 2}
      />
    )}
    {props.shape !== 'circle' && (
      <polygon
        clipPath="url(#polygonClip)"
        fill={props.backgroundColor}
        points={coords(props.shape)}
        stroke={props.borderColor}
        strokeWidth={props.borderWidth * 2}
      />
    )}

    {!props.image && (
      <text
        fill={props.borderColor}
        fontFamily={props.fontFamily}
        fontSize={props.fontSize}
        fontWeight={props.fontWeight}
        textAnchor="middle"
        x="50"
        y={props.fontPosition}
      >
        {props?.text.split(`\n`).map((line, index) => (
          <tspan dy={props.fontSize * index} key={index} x="50">
            {line}
          </tspan>
        ))}
      </text>
    )}
    {props.image && !props.imageMask ? (
      <image
        fill={props.borderColor}
        height={`${props.imageSize}px`}
        href={props.image}
        mask="url(#imageMask)"
        width={`${props.imageSize}px`}
        x={50 - props.imageSize / 2}
        y={50 - props.imageSize / 2}
      />
    ) : null}
    {props.image && props.imageMask ? (
      <rect fill={props.borderColor} height="100" mask="url(#imageMask)" width="100" x="0" y="0" />
    ) : null}
  </svg>
);

export default SVG;
