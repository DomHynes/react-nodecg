import React, { Component } from 'react';
import dlv from 'dlv';
import { DebounceInput } from 'react-debounce-input';

import { ReplicantInjector } from '../../../elements/replicant-injector';
import { setInfo } from '../../../utils/replicants';


class PlayerNames extends Component {

  styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
  }

  render() {
    return (
      <ReplicantInjector
        replicants={[setInfo]}
        render={
          ({ data, ready }) => (
            ready && (
              <div style={this.styles.container}>
                <DebounceInput
                  debounceTimeout={400}
                  onChange={ e => data[setInfo].onUpdateDot('players.0.name')(e.target.value)}
                />
                <DebounceInput
                  debounceTimeout={400}
                  onChange={ e => data[setInfo].onUpdateDot('players.1.name')(e.target.value)}
                />
              </div>
            )
          )
        }
      />
    )
  }
}

export default PlayerNames;
