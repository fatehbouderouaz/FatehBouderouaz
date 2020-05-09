import React from "react";
import axios from "axios";
//import Soura from "./Soura";

class ListCommunes extends React.Component {
  state = {
    communes: [],
    selected: 1
  };

  componentDidMount() {
    axios
      .get("http://322eff9f.ngrok.io/ListeCommunes")

      .then(res => {
        this.setState({
          communes: res
        });
        console.log(res);
      });
  }
/*
  handleChange = e => {
    const { selected, value } = e.target;
    this.setState({
      selected: value
    });
    console.log(this.state.selected);
  };
*/
  render() {
    return (
      <div>
        <div className='row'>
          
            <select
              className='form-control list'
              value={this.state.value}
              onChange={this.handleChange}>
              {this.state.communes.map(commune => (
                <option key={commune.id} value={commune.id}>
                  {commune.nom}
                </option>
              ))}
            </select>
          
        </div>
        
      </div>
    );
  }
}

export default ListCommunes;
