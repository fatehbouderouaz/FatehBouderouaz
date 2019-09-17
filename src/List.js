import React from 'react';
import axios from 'axios';

class List extends React.Component {
    state = {
        souars: []
      };
    
      componentDidMount() {
        axios
          .get("http://api.alquran.cloud/v1/surah")
    
          .then(res => {
            this.setState({
                souars: res.data.data,
            });
          });
          
      };
      

    render(){
        
        return(this.state.souars )
    }
}

//export default ListSouar;
export default List;