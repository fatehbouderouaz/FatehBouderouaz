import React from "react";
//import MyLink from "./MyLink";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
 import Person from "./Person";
import Quran from "./Quran";
// import Nav from "./Nav";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./About";
import List from "./List";
import Blog from "./Blog";
import Souars from "./Souars";
import Slider from "./Slider";

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
      <BrowserRouter>
        <div className='App'>
          <div className='container'>
            <Header />
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/blog' component={Blog} />
            <Route path='/quran' component={Quran} />
            <Route path='/souars' component={Souars} />
            
            <Footer textfoot='My awsome footer' />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
