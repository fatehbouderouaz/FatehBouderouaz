import React from "react";
//import MyLink from "./MyLink";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Person from "./Person";

class App extends React.Component {

   state = {
    persons: [
      { name: "Ahmed", age: 5 },
      { name: "Mohammed", age: 10 },
      { name: "Malak", age: 13 },
      { name: "Dana", age: 11 }
    ]
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 0 },
        { name: "Fateh", age: 0 },
        { name: "Fateh", age: 0 },
        { name: "Fateh", age: 0 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "TATA", age: 0 },
        { name: event.target.value, age: 0 },
        { name: "Fateh", age: 0 },
        { name: "Fateh", age: 0 }
      ]
    });
  };

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <Header mhome='Home' mabout='About' mcontact='Contact' />
          <Home text='Home components' Age={this.state.Age}>
            {" "}
            Home Title
            <button
              onClick={() => this.switchNameHandler("HHHHHHHH")}
              className='btn btn-primary'>
              Switch
            </button>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              changed={this.nameChangedHandler}
            />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
            <Person
              name={this.state.persons[3].name}
              age={this.state.persons[3].age}
              click={this.switchNameHandler.bind(this, "AAAAAAA")}
            />
          </Home>
          <Footer textfoot='My awsome footer' />
        </div>
      </div>
    );
  }
}

export default App;
