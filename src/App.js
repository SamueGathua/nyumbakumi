import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import gitaru from './images/gitaru.jpeg'
import NavbarPage from './components/NavbarPage'
import ImageBackground from './components/ImageBackground'
import Meetups from './components/Meetups'
import Footer from './components/Footer'
library.add(faUser);

class App extends Component {
  render() {
    return (
      <div className="App" >
      <NavbarPage/>
      <ImageBackground image={gitaru}/>
      <Meetups/>
      <Footer/>
      </div>
    );
  }
}

export default App;
