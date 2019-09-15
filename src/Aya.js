import React from "react";
import axios from "axios";

let p = ""; 
class Aya extends React.Component {

  state = {
    ayates: [],
    sura: {},
    numsura: 2,
    numayah: 102
  };

  componentDidMount() {
    this.getAyah(this.state.numsura,this.state.numayah);
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState(
        { [name]: value,
          [name]: value
        });
    };

  handleAyah = () => {
    this.getAyah(this.state.numsura,this.state.numayah);
  };

  getAyah = (s,a) => {
    p = "https://cdn.alquran.cloud/media/image/"+s+"/"+a; 
    axios
      .get("//api.alquran.cloud/v1/ayah/"+s+":"+a+"/ar.alafasy")

      .then(res => {
        console.log(res);
        this.setState({
          ayates: res.data.data,
          sura: res.data.data.surah
        });
      });
  }

  randomAyah =() => {
      let x = Math.floor(Math.random() * Math.floor(101) + 1) ;
      let y = Math.floor(Math.random() * Math.floor(10) + 1) ;

      this.setState(
        { numsura: x,
          numayah: y
        });
        
      this.getAyah(x,y)
  }

  render() {
    
    return (
      <div>
        <h2>MY FIRST API CALL , TO BE CONTUNIED  !</h2>
        <br/>
        <input type="text" id="sourah" name="numsura" value={this.state.numsura} onChange={this.handleChange} placeholder="Sourah" />
        <input type="text" id="ayah" name="numayah" value={this.state.numayah} onChange={this.handleChange} placeholder="Ayah" />
        <button type="button" className="btn btn-large  btn-success" onClick={this.handleAyah} >Click me</button>
        <button type="button" className="btn btn-large  btn-warning" onClick={this.randomAyah} >Random Ayah</button>
        <h4 className='titreSourah'>{this.state.sura.name}</h4>

        
        <div className="row">
           
        <div className="col-md-4 ayaths"><p>{this.state.ayates.text}</p></div>
        <div className="col-md-6 image"><img src={p} /></div>

        </div>
        
        
      </div>
    );
  }
}

export default Aya;
