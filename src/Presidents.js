import React, { Component } from 'react'
import President from './President'

class Presidents extends Component {
  render() {
    const presidents = this.props.presidents.map((president, i) => {
      return <President key={"president_" + i} name={president.name} from={president.from} to={president.to} />
    })
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">List of Presidents</h3>
        </div>
        <div className="panel-body">
          <ul className="list-group">
            {presidents}
          </ul>
        </div>
      </div>
    )
  }
}

Presidents.propTypes = {
  presidents: React.PropTypes.array.isRequired
}

export default Presidents
