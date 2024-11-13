const field = (props) => (
  <div>
    <label>
      Text
      <textarea onChange={(event) => props.onChange({ text: event.target.value })} value={props.text} />
    </label>
  </div>
);

export default field;
