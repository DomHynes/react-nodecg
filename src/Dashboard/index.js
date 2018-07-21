import React, { Component } from 'react';
import logo from '../logo.svg';
import debounce from 'lodash/debounce';
import dlv from 'dlv';
import { ReplicantInjector } from '../elements/replicant-injector';
import { test } from '../utils/replicants';


class Dashboard extends Component {

  displayReplicant = window.nodecg.Replicant('test')

  constructor(props) {
    console.log(test);
    super(props);
    this.state = {
      text: ''
    }
  }

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
        replicants={['testDot']}
        render={
          ({ data, ready }) => (
            ready ? <div style={this.styles.container}>
                <img
                  style={{width: 100}}
                  alt=""
                />
                <input
                  value={dlv(data['testDot'].value, 'text')}
                  onChange={ (e) => data['testDot'].onUpdateDot('text')(e.target.value) }
                  type="text"
                />
                <p> {dlv(data['testDot'].value, 'text')} </p>
              </div>

            : <p> not ready </p>
          )
        }
      />
    )
  }
}

export default Dashboard;
