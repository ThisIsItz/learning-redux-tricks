import React from 'react';
import './App.css';
import AComp from './Components/AComp'
import { BComp } from './Components/BComp'
import { CComp } from './Components/CComp'
import { DComp } from './Components/DComp'
import { connect } from 'react-redux';


function FirstApp({ appType }) {


  return (
    <div className="App">
      Esta es la primera App

      <div>{appType === '1' ? <DComp /> : <CComp />}</div>
      <AComp />
      <BComp />
      <CComp />
    </div>
  );
}

const mapStateToProps = (state) => ({
  appType: state.appType
})

export default connect(mapStateToProps)(FirstApp)
