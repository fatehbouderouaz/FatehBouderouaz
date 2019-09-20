import React from "react";
import axios from "axios";

class Blog extends React.Component {
  state = {
    text: "محمد",
    response: []
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSearch = e => {
    const mytext = this.state.text;
    axios
      .get(
        `//api.alquran.cloud/v1/search/${mytext}/all/quran-simple-clean`
      )

      .then(res => {
        //console.log(res.data.data.matches);
        this.setState({
          response: res.data.data.matches
        });
      });

      
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <h2>Search</h2>
        <div>
          <div className='input-group'>
            <input
              type='text'
              className='form-control'
              name='text'
              value={text}
              onChange={this.handleChange}
              placeholder='Search'
            />
            <span className='input-group-btn'>
              <button
                type='button'
                className='btn btn-default'
                onClick={this.handleSearch}>
                Go!
              </button>
            </span>
          </div>

          <div>
            {this.state.response.map(respons => (
              <div key={respons.number} className='row'>
                <div className='searchResponse'>{respons.surah.name} - {respons.numberInSurah}</div>
                <div className='searchResponse'>{respons.text}</div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    );
  }
}

export default Blog;
