import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 'empty'
    }
  }




  render(n) {
    console.log('this.props sqr', this.props.turn(n))

    return (
      <button onClick={this.props.turn(n)}>| {this.props.active} |</button>
    )
  }
}

export default Square ;

