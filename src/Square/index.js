import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 'empty'
    }
  }

  render() {
    return (
      <button onClick={() => this.props.turn()}>| {this.props.active} |</button>
    )
  }
}

export default Square ;

