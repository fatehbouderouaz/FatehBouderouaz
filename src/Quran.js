import React from "react";
import Aya from "./Aya";

class Quran extends React.Component {
  state = {
    surah: 2,
    ayah: 102,
    inputSurah: 2,
    inputAyah: 102
  };

  randomAyah = () => {
    let x = Math.floor(Math.random() * Math.floor(101) + 1);
    let y = Math.floor(Math.random() * Math.floor(10) + 1);
    this.setState({
      surah: x,
      ayah: y,
      inputSurah: x,
      inputAyah: y
    });
  };

  handleClick = () => {
    this.setState({
      surah: this.state.inputSurah,
      ayah: this.state.inputAyah
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { inputAyah, inputSurah, surah, ayah } = this.state;
    return (
      <div>
        <h2>MY FIRST API CALL , TO BE CONTINUED !</h2>
        <br />
        <input
          name='inputSurah'
          placeholder='Sourah'
          value={inputSurah}
          onChange={this.handleChange}
        />
        <input
          name='inputAyah'
          placeholder='Ayah'
          value={inputAyah}
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
        <Aya surah={surah} ayah={+ayah + 1} />
        <Aya surah={surah} ayah={+ayah + 2} />
        <Aya surah={surah} ayah={+ayah + 3} />
      </div>
    );
  }
}

export default Quran;
