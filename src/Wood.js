import React, { Component } from 'react';

class WoodList extends Component {
  constructor() {
    super();
    this.state = {
      top: false,
      back: false,
      woodToShow: '',
      openInfo: false
    }
    this.showWood = this.showWood.bind(this)
  }

  componentWillMount() {
    const topOrBack = window.location.pathname.split('/')[2]
    if (topOrBack === 'top') {
      this.setState({
        top: true
      })
    } if (topOrBack === 'bns') {
      this.setState({
        back: true
      })
    }
  }

  showWood(wood) {
    this.setState({
      woodToShow: wood,
      openInfo: !this.state.openInfo
    })

  }

  render() {

    const woods = this.props.route.woods;
    const showTop = this.state.top;
    const showBack = this.state.back;
    let topWoodsJSX = '';
    let backWoodsJSX = '';
    if (showTop) {
      topWoodsJSX = woods.map((wood, i) => {
        return <div className="WoodType" key={i} style={{ display: showTop === wood.top ? 'block' : 'none' }}>
          <ul className="tops">
            <li className="woodName" onClick={() => this.showWood(wood.name)}>{wood.name}
              <Specs wood={wood} selected={this.state.woodToShow} openInfo={this.state.openInfo} />
            </li>
          </ul>
        </div>
      })
    }
    if (showBack) {
      backWoodsJSX = woods.map((wood, i) => {
        return <div className="WoodType" key={i} style={{ display: showBack === wood.back ? 'block' : 'none' }}>
          <ul className="backs">
            <li className="woodName" onClick={() => this.showWood(wood.name)}>{wood.name}
              <Specs wood={wood} selected={this.state.woodToShow} openInfo={this.state.openInfo} />
            </li>
          </ul>
        </div>
      })
    }

    return (
      <div className="woodList">
        {topWoodsJSX}
        {backWoodsJSX}
      </div>
    );
  }
}

export default WoodList;

class Specs extends Component {
  render() {
    return (
      <div style={{ display: this.props.wood.name === this.props.selected ? 'block' : 'none' }}>
        <ul className="woodDetails" style={{ display: this.props.openInfo ? 'block' : 'none'}}>
          <li>Species: {this.props.wood.species}</li>
          <li>Janka hardness: {this.props.wood.janka}</li>
          <li>{this.props.wood.description}</li>
        </ul>
      </div>
    )
  }
}