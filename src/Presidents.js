import React, { Component } from 'react'
import President from './President'

class Presidents extends Component {
  render() {
    const presidents = this.props.presidents.map((president, i) => {
      return <President key={"president_" + i} name={president.name} from={president.from} to={president.to} />
    })
    return (
      <div>
        <h3>List of Presidents</h3>
        <ul>
          {presidents}
        </ul>
      </div>
    )
  }
}

Presidents.propTypes = {
  presidents: React.PropTypes.array.isRequired
}

export default Presidents
