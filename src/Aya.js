import React from "react";
import axios from "axios";

class Aya extends React.Component {
  state = {
    ayates: [],
    sura: {}
  };
  componentDidUpdate(prevProps) {
    if (
      (prevProps.surah === this.props.surah) &
      (prevProps.ayah === this.props.ayah)
    )
      return;

    this.update();
    console.log(`Update `, prevProps, this.props);
  }
  componentDidMount() {
    this.update();
  }
  update() {
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
    const { surah, ayah } = this.props;
    const URL = `https://cdn.alquran.cloud/media/image/${surah}/${ayah}`;
    return (
      <div>
        <h4 className='titreSourah'>{this.state.sura.name}</h4>
        <div className='row'>
          <div className='col-md-4 ayaths'>
            <p>{this.state.ayates.text}</p>
          </div>
          <div className='col-md-6 image'>
            <img src={URL} alt='surah' />
          </div>
        </div>
      </div>
    );
  }
}

export default Aya;
