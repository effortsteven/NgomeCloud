import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbars from './componets/navbarcode.js';
import Home from './componets/Home';
import About from './componets/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbars />
          <Route path='/' component={Home} />
          <Route path='/about' component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
