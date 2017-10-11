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
    this.cancelSearch = this.cancelSearch.bind(this)
  }

  openSearch() {
    this.setState({
      searchOpen: !this.state.searchOpen
    })
  }

  searchWood(term) {
    let cased = term.toLowerCase();
    this.setState({
      searchTerm: cased
    })
  }

  cancelSearch() {
    this.setState({
      searchOpen: false
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

    let searchButton = ''
    if (!this.state.searchOpen) {
      searchButton = 'Live Search'
    } else {
      searchButton = 'Close Search'
    }

    const searchedWoods = this.props.route.woods.filter((wood, i) => {
      return wood.name.toLowerCase().includes(this.state.searchTerm) || wood.species.toLowerCase().includes(this.state.searchTerm)
    })
      .sort((a, b) => {
        var woodA = a.name.toLowerCase(), woodB = b.name.toLowerCase()
        if (woodA < woodB)
          return -1
        if (woodA > woodB)
          return 1
        return 0
      });

    let searchResultsJSX = searchedWoods.map((wood, i) => {
      return <div className="WoodType" key={i}>
        <ul className="foundWoods">
          <li className="woodName" onClick={() => this.showWood(wood.name)}>{wood.name}
            <ul className="woodDetails" style={{ display: wood.name === this.state.woodToShow ? 'block' : 'none' }}>
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


          <h1 className="titleLg">Acoustic Tonewood Guide</h1>
          <h1 className="titleSm">ATG</h1>
          <nav className="navigation">
            <Link to="/woods/top"><button className="navButton" onClick={this.cancelSearch}>Tops</button></Link>
            <Link to="/woods/back"><button className="navButton" onClick={this.cancelSearch}>Backs and Sides</button></Link>
            <Link to="/"><button className="navButton" onClick={this.cancelSearch}>Home</button></Link>
            <button className="navButton" onClick={this.openSearch}>{searchButton}</button>
          </nav>
        </header>
        <div className="search">
          <input type="search"
            className="woodSearch"
            ref="searchText"
            onKeyUp={() => this.searchWood(this.refs.searchText.value)}
            placeholder="Enter your search term"
            style={{ display: this.state.searchOpen ? 'inline-block' : 'none' }} />
        </div>
        <div className="showWoods" style={{ display: this.state.searchOpen && this.state.searchTerm ? 'none' : 'block' }}>
          {this.props.children}
        </div>
        <div className="searchResults" style={{ display: this.state.searchOpen && this.state.searchTerm ? 'block' : 'none' }}>
          {searchResultsJSX}
          <div className="noResult" style={{ display: searchedWoods.length === 0 ? 'block' : 'none' }}>
            <h3>Sorry, we can't find what you're looking for.</h3>
            <p>It could be that we don't have it yet, it could be that you spelled it wrong, it could be that you're looking for a chili recipe, and if that's the case, you're way off.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;