import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Tonewood Database</h1>
        </header>
        <nav>
          <button>Tops</button>
          <button>Backs and Sides</button>
          {this.props.children}
        </nav>
      </div>
    );
  }
}

export default App;
