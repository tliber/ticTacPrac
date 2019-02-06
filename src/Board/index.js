import React, { Component } from 'react';
import Square from './../Square/index.js'

class Board extends Component {
  constructor(props) {
    super(props)
  }

  generateBoard(board) {
    return board.map((val, index) => {
      return (
        <div key={index}>
          <Square turn={() => this.props.onClickSquare([index, 0])} active={val[0]} />
          <Square turn={() => this.props.onClickSquare([index, 1])} active={val[1]} />
          <Square turn={() => this.props.onClickSquare([index, 2])} active={val[2]} />
          <div> ---------------</div>
        </div>
      )
    }
    );
  }

  render() {
    let board = this.generateBoard(this.props.board)

    return (
      <div>
        {board}
      </div>
    )
  }
}

export default Board;

