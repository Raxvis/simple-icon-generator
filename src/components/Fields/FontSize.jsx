const field = (props) => (
  <div>
    <label>
      Font Size
      <input
        onChange={(event) => props.onChange({ fontSize: event.target.value })}
        step="any"
        type="number"
        value={props.fontSize}
      />
    </label>
  </div>
);

export default field;
