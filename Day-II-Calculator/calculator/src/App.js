import React, { Component } from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import Row2 from './components/RowComponents/Row2'
import Row3 from './components/RowComponents/Row3'
import Row4 from './components/RowComponents/Row4'
import Row5 from './components/RowComponents/Row5'
import Row6 from './components/RowComponents/Row6'

class App extends Component {
  constructor() {
    super()
    this.state = {
      total: 0,
    }
  }

  clear = () => {
    let total = 0
    this.setState({ total })
  }
  divide = (num) => {
    console.log(num)
  }
  multiply = (num) => {
    console.log(num)
  }
  substract = (num) => {
    console.log(num)
  }
  add = (num) => {
    console.log(num)
  }
  total = (num) => {
    console.log(num)
  }

  render() {
    return (
      <div className="App">
        <CalculatorDisplay total={this.state.total} />
        <Row2 
          clear={this.clear}
          divide={this.divide}
        />
        <Row3 multiply={this.multiply} />
        <Row4 subtract={this.subtract} />
        <Row5 add={this.add} />
        <Row6 total={this.total} />
      </div>
    )
  }
}

export default App
