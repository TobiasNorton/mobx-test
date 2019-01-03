import React, { Component } from 'react'
import { observer } from 'mobx-react'

import dataStore from './DataStore'

class Counter extends Component {
  render() {
    return (
      <div>
        <p>{dataStore.value}</p>
        <button onClick={dataStore.increment}>Increment</button>
        <button onClick={dataStore.decrement}>Decrement</button>
      </div>
    )
  }
}

export default observer(Counter)
