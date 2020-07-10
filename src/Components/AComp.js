import React from 'react'
import { connect } from 'react-redux'
import { increment, incrementByTwo } from '../actions'


const ACompParent = () => {
  return <AComp increment={incrementByTwo} />
}

const ACompParent2 = () => {
  return <AComp increment={increment} />
}

const AComp = ({ incrementByTwo, increment, counter, appType }) => {
  const onClick = (appType === '1') ? increment : incrementByTwo;

  return (
    <div className="A">
      Soy el A
      <button onClick={onClick}>+</button>
      <button>-</button>
      <button>Show</button>
      <div>{counter}</div>
    </div>
  )
}

const mapStateToProps = state => ({
  counter: state.counter,
  appType: state.appType
})

export default connect(mapStateToProps, { increment, incrementByTwo })(AComp);
