import React, { Component } from 'react';
import logo from '../logo.svg';
import debounce from 'lodash/debounce';
import dlv from 'dlv';
import { ReplicantInjector } from '../elements/replicant-injector';
import { testDot } from '../utils/replicants';


class Dashboard extends Component {

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
            ready ? <div style={this.styles.container}>
                <img
                  style={{width: 100}}
                  alt=""
                />
                <input
                  onChange={ e => data[testDot].onUpdateDot('text')(e.target.value)}
                />
                <p> {dlv(data[testDot].value, 'text')} </p>
              </div>

            : <p> not ready </p>
          )
        }
      />
    )
  }
}

export default Dashboard;
