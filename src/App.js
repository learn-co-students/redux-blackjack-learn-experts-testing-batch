import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { resetGame, startGame, hitAI, hitUser, setWinner } from './actions/gameActions'

import Game from './game';

class App extends Component {
  constructor(props){
    super(props);
    
  }
  
  calculateScore(hand){
    
  }
  
  aiTurn(){
    
  }
  
  newGame(){
    
  }

  render() {
    return (
      <div className="App col-lg-12" style={{textAlign: 'center'}}>

      </div>
    );
  }
}

function mapStateToProps(state){
  return { 
    // something goes here
  }
}

function mapDispatchToProps(dispatch){
  return {
    // fill in
  };
}

const connector = connect(
  // fill in
);
const connectedComponent = connector(App)

export default connectedComponent;