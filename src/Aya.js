import React from "react";
import axios from "axios";

class Aya extends React.Component {
  state = {
    ayates: [],
    sura: {}
  };

  componentDidMount() {
    const { surah, ayah } = this.props;
    axios
      .get(`//api.alquran.cloud/v1/ayah/${surah}:${ayah}/ar.alafasy`)
      .then(res => {
        this.setState({
          ayates: res.data.data,
          sura: res.data.data.surah
        });
      });
  }

  render() {
    return (
      <div>
        <h4 className='titreSourah'>{this.state.sura.name}</h4>
        <div className='row'>
          <div className='col-md-4 ayaths'>
            <p>{this.state.ayates.text}</p>
          </div>
          <div className='col-md-6 image'>
            <img
              src={`https://cdn.alquran.cloud/media/image/${this.props.surah}/${this.props.ayah}`}
              alt=''
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Aya;
