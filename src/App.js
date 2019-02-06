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

  // swapPlayer = this.bind(this.swapPlayer)

  swapPlayer() {

    console.log('swap player')
    let nextPlayer = (this.state.playerTurn === 'x' ? 'o' : 'x');
    this.setState({playerTurn: nextPlayer})
  }

  move(squareId) {
    console.log("squareId", squareId)
    this.swapPlayer()
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title playerTurn={this.state.playerTurn}/>
          <Board
            onClickSquare={this.swapPlayer.bind(this)}
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
