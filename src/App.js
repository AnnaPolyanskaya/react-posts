import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// COMPONENTS
import PostsList from './Components/Content/PostsList';


class App extends Component {

  componentDidMount(){
    fetch('http://localhost:8000')
    .then(response => response.json())
    .then(console.log())
  }
  render() {
    return (
      <div className="App">
        <PostsList />
      </div>
    );
  }
}

export default App;
