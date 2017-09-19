import React, { Component } from 'react';

class WoodList extends Component {
  constructor() {
    super();
    this.state = {
      top: false,
      back: false
    }
  }

  componentWillMount() {
    const topOrBack = window.location.pathname.split('/')[2]
    this.setState ({
      type: topOrBack
    })
  }

  render() {

    const woods = this.props.route.woods;
    const topWood = this.state.top;
    const backWood = this.state.back;
    const woodsJSX = woods.map((wood, i) => {
      return
      <div className="woodType" style={{ display: ((topWood && woods.top) || (backWood && woods.back)) ? 'block' : 'none' }}>
        <h3 className="woodName">{wood[i].name}</h3>
      </div>
    })

    return (
      <div className="woodList">
        {woodsJSX}
        <p>and what about now?</p>
      </div>
    );
  }
}

export default WoodList;
