import React, { Component } from 'react'
import './App.css';
import Card from './components/Card/card.js'



class App extends Component {
  state = {
    guess: "",
    who:"Bob",
  }
 
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div>
        <div className="columns is-centered is-multiline">
          <Card />
        </div>
      </div>
    )
  }
}

export default App;
