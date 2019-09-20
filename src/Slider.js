import React from "react";

export default class Slider extends React.Component {
  state = {
    logo: "/img/logo03.jpg"
  };

  handleNext = () => {
    this.setState({
      logo: "/img/logo01.png"
    });
  };

  render() {
    return (
      <div>
        <img src={this.state.logo} className='img' alt={this.state.logo} />
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }
}
