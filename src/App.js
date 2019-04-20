import React, { Component } from 'react';
import './App.css';
import CropView from './components/CropView';
import SideBar from './components/SideBar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          Crop Circle
        </header>

        <SideBar />

        <div className='main'>
          <CropView />
        </div>
      </div>
    );
  }
}

export default App;
