/* global WebFont */
import React from 'react';

class Field extends React.Component {
  onChange(value) {
    try {
      WebFont.load({ google: { families: [value] } });
    } catch (error) {
      console.log(error);
    }
    this.props.onChange({ fontFamily: value });
  }

  render() {
    return (
      <div>
        <label>
          Font Family
          <input onChange={(event) => this.onChange(event.target.value)} type="text" value={this.props.fontFamily} />
        </label>
      </div>
    );
  }
}

export default Field;
