import React, { Component } from 'react';
import './App.css';

class BackWoodList extends Component {
  constructor() {
    super();
    this.state = {
      woodToShow: '',
      openInfo: false
    }
    this.showWood = this.showWood.bind(this)
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

    const woods = this.props.route.woods.sort((a, b)=>{
      var woodA=a.name.toLowerCase(), woodB=b.name.toLowerCase()
      if (woodA < woodB) 
          return -1 
      if (woodA > woodB)
          return 1
      return 0
    });

    let backWoodsJSX = woods.map((wood, i) => {
        return <div className="WoodType" key={i} style={{ display: wood.back ? 'block' : 'none' }}>
          <ul className="backs">
            <li className="woodName" onClick={() => this.showWood(wood.name)}>{wood.name}
              <Specs wood={wood} selected={this.state.woodToShow} openInfo={this.state.openInfo} />
            </li>
          </ul>
        </div>
      })

    return (
      <div className="backWoodList">
        {backWoodsJSX}
      </div>
    );
  }
}

export default BackWoodList;

class Specs extends Component {
  render() {
    return (
      <div style={{ display: this.props.wood.name === this.props.selected ? 'block' : 'none' }}>
        <ul className="woodDetails">
          <li><strong>Species</strong>: {this.props.wood.species}</li>
          <li><strong>Janka hardness:</strong> {this.props.wood.janka}</li>
          <li>{this.props.wood.description}</li>
        </ul>
      </div>
    )
  }
}