import React from 'react';

class Field extends React.Component {
  uploadImage(event) {
    const [file] = event.target.files;
    const reader = new FileReader();

    reader.onload = () => {
      this.props.onChange({ image: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  render() {
    return (
      <div>
        <label>
          Image
          <a className="button">Upload</a>
          <input id="image" onChange={(event) => this.uploadImage(event)} style={{ display: 'none' }} type="file" />
        </label>
      </div>
    );
  }
}

export default Field;
