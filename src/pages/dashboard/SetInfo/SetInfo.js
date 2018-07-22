import React, { Component } from 'react';
import { PlayerNames } from '../../../views/Dashboard/player-names';

export default class SetInfo extends Component {
  componentDidMount() {
    console.log('setinfo');
  }

  render() {
    return (
      <PlayerNames />
    )
  }
}

