import React, { Component } from 'react';
import './App.css';
import CropView from './components/CropView';
import SideBar from './components/SideBar';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { searchTerm: '' }
  }

  setSearchTerm = (searchTerm) => {
    this.setState(state => ({ searchTerm: searchTerm.toLowerCase() }));
  }

  render() {
    return (
      <div className='app'>
        <SideBar setSearchTerm={this.setSearchTerm} />

        <div className='main'>
          <CropView searchTerm={this.state.searchTerm}/>
        </div>
      </div>
    );
  }
}

export default App;
