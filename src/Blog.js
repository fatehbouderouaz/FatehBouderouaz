import React from "react";
import axios from "axios";

class Blog extends React.Component {
  state = {
    text: "محمد",
    response: [],
    count: 0
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
      .get(`//api.alquran.cloud/v1/search/${mytext}/all/quran-simple-clean`)

      .then(res => {
        console.log(res.data.data.count);
        this.setState({
          response: res.data.data.matches,
          count: res.data.data.count
        });
      });
  };

  render() {
    const { text } = this.state;
    return (
      <div className="container">
    <div className="row searchBar">
        <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
          {this.state.count ? " نتائج : " + this.state.count : null}
        </div>
        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
          <div className='input-group'>
            <input
              type='text'
              className='form-control textSearch'
              name='text'
              value={text}
              onChange={this.handleChange}
              placeholder='...بحث'
            />
            <span className='input-group-btn'>
              <button
                type='button'
                className='btn btn-default'
                onClick={this.handleSearch}>
                إبحث
              </button>
            </span>
          </div>
        </div>

        <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
            
        </div>
    </div>

          <div className="row">
            {this.state.response.map(respons => (
              <div key={respons.number} className='row'>
                <div className='searchResponse'>
                  {respons.surah.name} - {respons.numberInSurah}
                </div>
                <div className='searchResponse'>{respons.text}
                </div>
              </div>
            ))}
          </div>
          </div>
    )
  }
}

export default Blog;
