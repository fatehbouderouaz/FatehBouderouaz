import React from "react";
import axios from "axios";

let p = ""; 
class Quran extends React.Component {

  state = {
    ayates: [],
    sura: {},
    numSura: 2,
    numAyah: 102
  };

  
  componentDidMount() {
    this.getAyah(this.state.numSura,this.state.numAyah);

  }

  handleAyah = () => {
    let numSura = document.getElementById("sourah").value ;
    let numAyah = document.getElementById("ayah").value ;
    
    this.getAyah(numSura,numAyah);
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
      let x = Math.floor(Math.random() * Math.floor(114 -  + 1) + 1) ;
      this.getAyah(x,1)
  }

  render() {
    
    return (
      <div>
        <h2>Quran</h2>
        <input type="text" id="sourah"  placeholder="Sourah "/>
        <input type="text" id="ayah" placeholder="Ayah "/>
        <button type="button" className="btn btn-large  btn-success" onClick={this.handleAyah} >Click me</button>
        <button type="button" className="btn btn-large  btn-warning" onClick={this.randomAyah} >Random Ayah</button>
        <h4 className='titreSourah'>{this.state.sura.name}</h4>

        <p className='ayaths'>{this.state.ayates.text}</p>
        <img src={p} />
                        
      </div>
    );
  }
}

export default Quran;
