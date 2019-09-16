import React from "react";
import Aya from "./Aya";

class Quran extends React.Component {
  state = {
    surah: 2,
    ayah: 102,
    numSurah: 2,
    numAyah: 102
  };

  componentDidMount() {}

  randomAyah = () => {
    let x = Math.floor(Math.random() * Math.floor(101) + 1);
    let y = Math.floor(Math.random() * Math.floor(10) + 1);
    this.setState({
      surah: x,
      ayah: y,
      numSurah: x,
      numAyah: y
    });
  };

  handleClick = () => {
    this.setState({
      surah: this.state.numSurah,
      ayah: this.state.numAyah
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { numAyah, numSurah, surah, ayah } = this.state;
    return (
      <div>
        <h2>MY FIRST API CALL , TO BE CONTINUED !</h2>
        <br />
        <input
          name='numSurah'
          placeholder='Sourah'
          value={numSurah}
          onChange={this.handleChange}
        />
        <input
          name='numAyah'
          placeholder='Ayah'
          value={numAyah}
          onChange={this.handleChange}
        />
        <button
          className='btn btn-large  btn-success'
          onClick={this.handleClick}>
          Click me
        </button>
        <button
          className='btn btn-large  btn-warning'
          onClick={this.randomAyah}>
          Random Ayah
        </button>

        <Aya surah={surah} ayah={ayah} />
      </div>
    );
  }
}

export default Quran;
