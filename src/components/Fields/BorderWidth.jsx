const field = (props) => (
  <div>
    <label>
      Border Width
      <input
        onChange={(event) => props.onChange({ borderWidth: event.target.value })}
        step="any"
        type="number"
        value={props.borderWidth}
      />
    </label>
  </div>
);

export default field;
