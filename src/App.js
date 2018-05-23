import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js'
import Form from './components/Form.js'


class App extends Component {
  render() {
    return (

      <div>
       <Header />
       < Form />
        <p >
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
