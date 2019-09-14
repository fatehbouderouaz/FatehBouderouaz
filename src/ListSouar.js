import React from 'react';
import axios from 'axios';

class ListSouar extends React.Component {
    state = {
        ayates: [],
        sura: {},
        numSura: 2,
        numAyah: 102
      };
    
      componentDidMount() {
        axios
          //.get("http://api.alquran.cloud/v1/ayah/2:102/ar.alafasy")
          .get("http://api.alquran.cloud/v1/ayah/"+this.state.numSura+":"+this.state.numAyah+"/ar.alafasy")
    
          .then(res => {
            //console.log(res);
            this.setState({
              ayates: res.data.data,
              sura: res.data.data.surah
            });
          });
      }
      
    render(){
        return(
            <div>
                ma liste
            </div>
        )
    }
}

export default ListSouar;