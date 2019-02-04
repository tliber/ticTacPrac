import React from 'react'

class Title extends React.Component {


    render() {
      return (
        <div>{this.props.playerTurn || 'No turn'}</div>
      )
    }

}

export default Title;