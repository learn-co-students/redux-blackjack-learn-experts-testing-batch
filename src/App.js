import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import * as actions from './actions/gameActions';
import {connect} from 'react-redux';
import Game from './Game';

class App extends Component {
  constructor(props){
    super(props);

    this.state = props.store.getState();
    this.playRound = this.playRound.bind(this);
    this.reset = this.reset.bind(this);
  }

  playRound(){
    let {executeRound} = this.props.actions;
    executeRound();
  }

  reset(){
    let {resetGame} = this.props.actions;
    resetGame();
  }

  render() {
    const {userCards, aiCards} = this.props.game;
    return (
      <div className="App col-lg-12" style={{textAlign: 'center'}}>
        <div>
          <h2>Welcome to The Flatiron Casino</h2>
        </div>
        <Game userCards={userCards} aiCards={aiCards} playRound={this.playRound}
        triggerExecuteRound={this.playRound}
        triggerResetGame={this.reset}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {game: state.game}
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)};
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const connectedApp = connector(App);

export default connectedApp;
