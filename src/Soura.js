import React from "react";
import axios from "axios";

// { this.state.ayates.map(ayat => <div  key= {ayat.number}> { ayat.text }</div> )}
class Soura extends React.Component {
  state = {
    ayates: [],
    sura: '',
    numberOfAyahs: 0,
    revelationType:''
  };
  componentDidUpdate(prevProps) {
    if (
      (prevProps.surah === this.props.surah) 
    )
      return;

    this.update();
  }

  componentDidMount() {
    this.update();
  }

  update() {
    const { surah } = this.props;
    axios
      .get(`//api.alquran.cloud/v1/surah/${surah}/ar.alafasy`)
      .then(res => {
        this.setState({
          ayates: res.data.data.ayahs,
          sura: res.data.data.name,
          numberOfAyahs: res.data.data.numberOfAyahs,
          revelationType: res.data.data.revelationType
        });
      });
  }

  render() {
    const { surah } = this.props;
    //const URL = `https://cdn.alquran.cloud/media/image/${surah}/${ayah}`;
    return (
      <div>
        <h4 className='titreSourah'>{this.state.sura }  {this.state.revelationType === "Meccan" ? "مكية"  : "مدنية" }  عدد آياتها  {this.state.numberOfAyahs} </h4>
        
        <div className='row'>
            <div className='col-md-2 ayaths'>
                
            </div>
            <div className='col-md-8 image'>
                { this.state.ayates.map(ayat =>  <div key= {ayat.number} ><img  src={`https://cdn.alquran.cloud/media/image/${surah}/${ayat.numberInSurah}`} alt={this.state.sura} /></div>)}
            </div>
        </div>
      </div>
    );
  }
}

export default Soura;
