import React from 'react';


 class Footer extends React.Component {
    state = {
        name: " Footer state  0"
    }
    render() {
        return (
            <div>
                <h3> {this.props.textfoot} and state -> {this.state.name} </h3>
            </div>
        );
    }
}

export default Footer; 