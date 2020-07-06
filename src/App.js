import React, { Component } from 'react'
import './App.css';
import Card from './components/Card/card.js'
import DropDown from './components/DropDown/DropDown';
import Score from './components/Score/Score.js'
import Persons from './components/Persons/Persons.js'

class App extends Component {
  
  render() {
    return (
      <div>
        <div className="columns is-centered is-multiline">
        <DropDown />
          <Card />
          <Score />
        </div>
        <Persons />
      </div>
    )
  }
}

export default App;
