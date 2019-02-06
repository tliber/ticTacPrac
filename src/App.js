import React, { Component } from 'react';
import logo from './logo.svg';
import Board from './Board/index.js'
import Title from './Title/index.js'
import './App.css';
import INITIAL_BOARD from "./INITIAL_BOARD";

class App extends Component {
  constructor() {
    super();

    this.state = {
      board: INITIAL_BOARD,
      playerTurn: 'x',
      winner: null
    };
  }

  updateBoard(loc) {
    const board = this.state.board.slice();
    board[loc[0]][loc[1]] = this.state.playerTurn;
    this.setState({board: board});
  }

  swapPlayer() {
    let nextPlayer = (this.state.playerTurn === 'x' ? 'o' : 'x');
    this.setState({playerTurn: nextPlayer})
  }

  move(loc) {
    this.updateBoard(loc);
    this.checkWinner(loc)
    this.swapPlayer();
  }


  checkWinner(loc){
    let row = loc[0];
    let column = loc[1]
    let boardState = this.state.board;

    let wonRow = boardState[row].every((val) => val === this.state.playerTurn);
    let wonColumn = boardState.every((val) => val[column] === this.state.playerTurn);
    let crossAtRightTop = [boardState[0][0], boardState[1][1], boardState[2][2]].every((value => value === this.state.playerTurn));
    let crossAtRightBottom = [boardState[0][0], boardState[1][1], boardState[2][2]].every((value => value === this.state.playerTurn));

    if (wonRow || wonColumn || crossAtRightTop || crossAtRightBottom) {
      this.setState({winner: this.state.playerTurn})
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title playerTurn={this.state.playerTurn} winner={this.state.winner}/>
          <Board
            onClickSquare={this.move.bind(this)}
            board={this.state.board}
            playerTurn={this.state.playerTurn} turn/>
          <p>
            Edit <code>src/App.js</code>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
