import React from 'react';

import './Person.css' ;

class Person extends React.Component {
    render(){
        return (
            <div className="Person">
                <p onClick={this.props.click} >Name: {this.props.name} Age: {this.props.age}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    }
}

export default Person;