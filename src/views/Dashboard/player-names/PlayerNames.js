import React, { Component } from 'react';
import dlv from 'dlv';
import { DebounceInput } from 'react-debounce-input';

import { ReplicantInjector } from '../../../elements/replicant-injector';
import { testDot } from '../../../utils/replicants';


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
        replicants={[testDot]}
        render={
          ({ data, ready }) => (
            ready && <div style={this.styles.container}>
                <DebounceInput
                  debounceTimeout={400}
                  onChange={ e => data[testDot].onUpdateDot('text')(e.target.value)}
                />
                <p> {dlv(data[testDot].value, 'text')} </p>
              </div>
          )
        }
      />
    )
  }
}

export default PlayerNames;
