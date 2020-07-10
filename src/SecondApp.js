import React from 'react';
import './App.css';
import AComp from './Components/AComp'
import { BComp } from './Components/BComp'
import { DComp } from './Components/DComp'



function FirstApp() {
  return (
    <div className="App">
      Esta es la segunda App
      <AComp></AComp>
      <BComp></BComp>
      <DComp></DComp>
    </div>
  );
}

export default FirstApp;
