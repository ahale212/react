import React, { Component } from 'react'
import President from './President'

class Presidents extends Component {
  render() {
    const presidents = this.props.presidents.map((president) => {
      return <President key={president.name} name={president.name} from={president.from} to={president.to} />
    })
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>From - To</th>
          </tr>
        </thead>
        <tbody>
          {presidents}
        </tbody>
      </table>
    )
  }
}



Presidents.propTypes = {
  presidents: React.PropTypes.array.isRequired
}

export default Presidents
