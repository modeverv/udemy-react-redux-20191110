import React, {Component} from 'react'

/*
const App = () => {return <Counter></Counter>}

class Counter extends Component {
  constructor(props){
    super(props)
    console.log(this.state)
    this.state = {count : 0}
  }

  handlePlus = () => {
    this.setState({count: this.state.count + 1})
  }

  handleMinus = () => {
    window.console.log("handleMinus")
    const currentCount = this.state.count
    this.setState({count: currentCount - 1})
  }


  render() {
    console.log(this.state)
    return (
      <React.Fragment>
    <div>count: {this.state.count}</div>
    <button onClick={this.handlePlus}>+1</button>
    <button onClick={this.handleMinus}>-1</button>
    </React.Fragment>
    );
  }
}

export default App;
*/

import {connect} from 'react-redux'

import {increment, decrement} from '../actions'

class App extends Component {
  render() {
    const props = this.props
    return (
    <React.Fragment>
      <div>count: {props.value}</div>
      <button onClick={props.increment}>+1</button>
      <button onClick={props.decrement}>-1</button>
    </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({value: state.count.value})
/*
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})
*/
const mapDispatchToProps = ({increment, decrement})

export default connect(mapStateToProps,mapDispatchToProps)(App)
