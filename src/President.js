import React, { Component } from 'react'

class President extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.from} - {this.props.to}</td>
      </tr>
    )
  }
}

President.propTypes = {
  name: React.PropTypes.string.isRequired,
  from: React.PropTypes.number.isRequired,
  to: React.PropTypes.number.isRequired
}

export default President
