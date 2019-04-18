import React, { Component } from 'react';
import './App.css';
import CropView from './components/CropView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Crop Circle
        </header>

        <CropView />
      </div>
    );
  }
}

export default App;
