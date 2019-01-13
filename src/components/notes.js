import React, { Component } from 'react';

class Note extends Component {
  render() {
    return (
      <div className="note">
        {this.props.text}
        <span className="cross" onClick={this.props.deleteMethod}>X</span>
      </div>
    );
  }
}

export default Note;
