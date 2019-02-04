import React, { Component } from 'react';
import Square from './../Square/index.js'
import initialBoard from '../INITIAL_BOARD'

class Board extends Component {
  constructor(props) {
    super(props)
  }







  counter = 0;



  generateBoard = initialBoard.map(val => {
    this.counter++;



    return (
      <div key={this.counter}>
        <Square turn={() => this.props.onClickSquare} active={val[0]} />
        <Square turn={() => this.props.onClickSquare} active={val[1]} />
        <Square turn={() => this.props.onClickSquare} active={val[2]} />
        <div> --------------</div>
      </div>

  )
  });

  render() {
    return (
      <div>{this.generateBoard}</div>
    )
  }
}

export default Board;

