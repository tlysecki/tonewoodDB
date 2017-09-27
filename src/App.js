import React, { Component } from 'react';
import {Link} from 'react-router';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchOpen: false,
      searchTerm: ''
    }
    this.openSearch = this.openSearch.bind(this)
  }

  openSearch() {
    this.setState({
      searchOpen: !this.state.searchOpen
    })
  }

  render() {

    return (
      <div className="container">
        <header>
          <h1>Tonewood Database</h1>
        </header>
        <nav>
          <Link to="/woods/top"><button className="navButton">Tops</button></Link>
          <Link to="/woods/back"><button className="navButton">Backs and Sides</button></Link>
          <Link to="/"><button className="navButton">Home</button></Link>
          <button className="navButton" onClick={this.openSearch}>Search</button>
            <input type="text" 
                   ref="searchText" 
                   placeholder="Enter your search term"
                   style={{display: this.state.searchOpen ? 'block' : 'none' }}/>
        </nav>
        <div className="showWoods"></div>
        {this.props.children}
      </div>
    );
  }
}

export default App;