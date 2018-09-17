import React, { Component } from 'react';
import profilePhoto from './assets/profilePhoto.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
     <div className='tc grow br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='Daniel Naval' src={profilePhoto} width='150'/>
      <div>
        <h2>Daniel Naval</h2>
        <p>danielnvl5@gmail.com</p>
      </div>
    </div>
    );
  }
}

export default App;
