const field = (props) => (
  <div>
    <label>
      Shape
      <select onChange={(event) => props.onChange({ shape: event.target.value })} value={props.shape}>
        <option value="circle">Circle</option>
        <option value="triangle">Triangle</option>
        <option value="square">Square</option>
        <option value="diamond">Diamond</option>
        <option value="hexagon">Hexagon</option>
        <option value="hexagon120">Hexagon 120</option>
      </select>
    </label>
  </div>
);

export default field;
