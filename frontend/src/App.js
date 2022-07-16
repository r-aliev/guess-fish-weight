import React from 'react';
import './App.css';

class App extends React.Component {

  componentWillMount(){
    this.fetchTasks()
  }

  fetchTasks(){
    console.log("Fetching...")

    fetch('http://127.0.0.1:8000/api/')
    .then(response => response.json())
    .then(data =>
      console.log("Data:", data)
      )
  }

  render() {
    return(
      <div>
        <h1>Chess Boaccrd blyer!</h1>
      </div>
    )
  }

}

export default App;