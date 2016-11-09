import React, { Component } from 'react'
import Summary from './Summary'
import Presidents from './Presidents'

const source = [
  { name: "George W. Bush", from: 2001, to: 2009 },
  { name: "Barack Obama", from: 2009, to: 2017 },
  { name: "Mickey Mouse", from: 2017, to: 2021 }
]

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Summary amount={source.length} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Presidents presidents={source} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
