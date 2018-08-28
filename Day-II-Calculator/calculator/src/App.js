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

  render() {
    return (
      <div className="App">
        <CalculatorDisplay total={this.state.total} />
        <Row2 />
        <Row3 />
        <Row4 />
        <Row5 />
        <Row6 />
      </div>
    )
  }
}

export default App
