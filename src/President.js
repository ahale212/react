import React, { Component } from 'react'

class President extends Component {
  render() {
    return (
      <li className="list-group-item">
        <h4 className="list-group-item-heading">{this.props.name}</h4>
        <p className="list-group-item-text">{this.props.from} - {this.props.to}</p>
      </li>
    )
  }
}

President.propTypes = {
  name: React.PropTypes.string.isRequired,
  from: React.PropTypes.number.isRequired,
  to: React.PropTypes.number.isRequired
}

export default President
