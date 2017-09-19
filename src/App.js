import React, { Component } from 'react';
import {Link} from 'react-router';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="container">
        <header>
          <h1>Tonewood Database</h1>
        </header>
        <nav>
          <Link to="/woods/top"><button>Tops</button></Link>
          <Link to="/woods/bns"><button>Backs and Sides</button></Link>
          {this.props.children}
        </nav>
      </div>
    );
  }
}

export default App;
