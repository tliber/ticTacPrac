import React from 'react'

class Title extends React.Component {

    header() {
      if (this.props.winner) {
        return (
          <div>{this.props.winner} wins!</div>
        )
      } else {
        return (
          <div>Currently {this.props.playerTurn}'s turn</div>
        )
      }
    }

    render() {
      return (this.header())
    }

}

export default Title;