import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Example from '../components/example'


const mapDispatchToProps = (dispatch) => {
  return
}

class App extends Component {

  render () {
    console.log("hello");
    return (
      <div className='App'>
      <Example />
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(App)
