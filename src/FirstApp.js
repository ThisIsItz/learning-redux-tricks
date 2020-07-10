import React from 'react';
import './App.css';
import { AComp } from './Components/AComp'
import { BComp } from './Components/BComp'
import { CComp } from './Components/CComp'



function FirstApp() {
  return (
    <div className="App">
        Esta es la primera App
        <AComp></AComp>
        <BComp></BComp>
        <CComp></CComp>
    </div>
  );
}

export default FirstApp;
