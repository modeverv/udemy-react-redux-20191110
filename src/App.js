import React, {Component} from 'react'

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
