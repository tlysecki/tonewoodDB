import React, { Component } from 'react';
import {Link} from 'react-router';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      topOrBack: 'none'
    }
    this.showWoods = this.showWoods.bind(this)
  }

  showWoods() {
    window.location.reload()
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Tonewood Database</h1>
        </header>
        <nav>
          <Link to="/woods/top" onClick={this.showWoods}><button>Tops</button></Link>
          <Link to="/woods/bns" onClick={this.showWoods}><button>Backs and Sides</button></Link>
          {this.props.children}
        </nav>
      </div>
    );
  }
}

export default App;
