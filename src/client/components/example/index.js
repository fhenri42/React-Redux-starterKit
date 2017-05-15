import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import example from '../../actions/example'
import "./style.scss"

const mapDispatchToProps = (dispatch) => {
  return {
    example: (data) => dispatch(example(data)),
  }
}

const mapStateToProps = (state) => {
  return {}
}

class Example extends Component {

  static propTypes = {
    example: PropTypes.func,
  }


  state = {
    text : "Hello from my Component",
  }

  render () {
    const { text }  = this.state
    const { example } = this.props
    example({ msg: 'changein state' })
    return (
      <div className="text">
      { text }
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Example)
