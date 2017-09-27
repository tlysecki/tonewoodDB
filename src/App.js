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

  showWoods(e) {
    // this.props.children.reload();
    this.setState({
      topOrBack: e
    })
  }

  render() {

    return (
      <div className="container">
        <header>
          <h1>Tonewood Database</h1>
        </header>
        <nav>
          <Link to="/woods/top" onMouseOver={()=>this.showWoods('top')}><button className="navButton">Tops</button></Link>
          <Link to="/woods/back" onMouseOver={()=>this.showWoods('back')}><button className="navButton">Backs and Sides</button></Link>
          <Link to="/"><button className="navButton">Home</button></Link>
          <button className="navButton">Search</button>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default App;