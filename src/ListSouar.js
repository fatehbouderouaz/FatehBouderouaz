import React from "react";
import axios from "axios";
import Soura from "./Soura";

class ListSouar extends React.Component {
  state = {
    souars: [],
    selected: 1
  };

  componentDidMount() {
    axios
      .get("//api.alquran.cloud/v1/surah")

      .then(res => {
        this.setState({
          souars: res.data.data
        });
      });
  }

  handleChange = e => {
    const { selected, value } = e.target;
    this.setState({
      selected: value
    });
    console.log(this.state.selected);
  };

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4'></div>
          <div className='col-md-4'>
            <select
              className='form-control list'
              value={this.state.value}
              onChange={this.handleChange}>
              {this.state.souars.map(souar => (
                <option key={souar.number} value={souar.number}>
                  {souar.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Soura surah={this.state.selected} />
      </div>
    );
  }
}

export default ListSouar;
