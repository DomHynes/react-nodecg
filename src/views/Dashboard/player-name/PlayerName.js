import React, { Component } from 'react';
import dlv from 'dlv';
import { DebounceInput } from 'react-debounce-input';

import { ReplicantInjector } from '../../../elements/replicant-injector';
import { setInfo } from '../../../utils/replicants';


class SetInfo extends Component {

  styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
  }

  state = {
    name: ''
  }

  static getDerivedStateFromProps(props, state) {
    console.log({props, state})

    if (props.value !== state.name || !state.name) {
      return {
        name: props.value,
      }
    }
    return null;

  }

  render() {
    return (
      <div style={this.styles.container}>
        <DebounceInput
          debounceTimeout={500}
          onChange={ this.props.onChange }
          value={ this.state.name }
        />
      </div>
    )
  }
}

export default SetInfo;
