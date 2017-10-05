import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchOpen: false,
      searchTerm: '',
      woodToShow: '',
      openInfo: false
    }
    this.openSearch = this.openSearch.bind(this)
    this.showWood = this.showWood.bind(this)    
  }

  openSearch() {
    this.setState({
      searchOpen: !this.state.searchOpen
    })
  }

  searchWood(term) {
    this.setState({
      searchTerm: term
    })
  }

  showWood(wood) {
    if (wood !== this.state.woodToShow) {
      this.setState({
        woodToShow: wood,
        openInfo: true
      })
    } if (wood === this.state.woodToShow) {
      this.setState({
        woodToShow: 'none',
        openInfo: false
      })
    }
  }

  render() {

    const searchedWoods = this.props.route.woods.filter((wood, i) => { return wood.name.toLowerCase().includes(this.state.searchTerm) });
    let searchResultsJSX = searchedWoods.map((wood, i) => {
      return <div className="WoodType" key={i}>
        <ul className="foundWoods">
          <li className="woodName" onClick={()=> this.showWood(wood.name)}>{wood.name}
            <ul className="woodDetails" style={{display: wood.name === this.state.woodToShow ? 'block' : 'none' }}>
              <li>Species: {wood.species}</li>
              <li>Janka hardness: {wood.janka}</li>
              <li>{wood.description}</li>
            </ul>
          </li>
        </ul>
      </div>
    })

    return (
      <div className="container">
        <header>
          <h1>Tonewood Database</h1>
        </header>
        <nav>
          <Link to="/woods/top"><button className="navButton">Tops</button></Link>
          <Link to="/woods/back"><button className="navButton">Backs and Sides</button></Link>
          <Link to="/"><button className="navButton">Home</button></Link>
          <button className="navButton" onClick={this.openSearch}>Live Search</button>
          <input type="text"
            ref="searchText"
            onKeyUp={() => this.searchWood(this.refs.searchText.value)}
            placeholder="Enter your search term"
            style={{ display: this.state.searchOpen ? 'block' : 'none' }} />
        </nav>
        <div className="showWoods" style={{ display: this.state.searchOpen ? 'none' : 'block' }}>
          {this.props.children}
        </div>
        <div className="searchResults" style={{ display: this.state.searchOpen && this.state.searchTerm ? 'block' : 'none' }}>
          {searchResultsJSX}
        </div>
      </div>
    );
  }
}

export default App;