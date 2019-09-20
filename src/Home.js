import React from "react";
import Slider from "./Slider";


class Home extends React.Component {
    state = {
        name: " Home state  0"
    }
    render(){
        return (
        <div>
            <h3><p> { this.props.children } </p></h3>
            
            <p>{ this.props.text } and state -> {this.state.name} And My Age is : ---> {this.props.Age} </p>
        </div>
        )
    }
}


export default Home;
