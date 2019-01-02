import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Content from './Components/content';

class App extends Component {
  render() {
    return (
      <div className="App">
   <Header/>
   <Content/>
   <Footer/>
      </div>
    );
  }
}

export default App;
