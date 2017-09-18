import React, { Component } from 'react';
import ListNotes from './ListNotes'; 
import InputNotes from './InputNotes';
class App extends Component {
  render() {
    return <div className="grey lighten-5 blue-grey-text">
        <div id="header" className="container grey lighten-4">
          <h1>PWA</h1>
        </div>
        <div className="container grey lighten-4">
          <p>Adicione suas anotações aqui!</p>
          <InputNotes />
          <ListNotes />
        </div>
      </div>;
  }
}

export default App;
