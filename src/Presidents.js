import React, { Component } from 'react'
import President from './President'

class Presidents extends Component {

  constructor(props){
    super(props)
    this.onSubmit=this.onSubmit.bind(this)
  }

  onSubmit(event){
    event.preventDefault()
    console.log(this.props.pid);
    this.props.onRemovePresident(this.props.pid)
  }

  render() {
    const presidents = this.props.presidents.map((president, i) => {
      console.log(president.name + " in Presidents")
      return (
        <form>
        <President key={"president_" + i} pid={president.pid} name={president.name} from={president.from} to={president.to} />
        <button key={"index_"} type="submit" onClick={this.onSubmit}>Delete</button>
        </form>
        )
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
  presidents: React.PropTypes.array.isRequired,
  onRemovePresident: React.PropTypes.func.isRequired
}

export default Presidents
