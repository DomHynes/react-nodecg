import React, { Component } from 'react';
import dlv from 'dlv';
import { DebounceInput } from 'react-debounce-input';

import { Input, Form } from 'antd';


class PlayerName extends Component {

  state = {
    name: ''
  }

  static getDerivedStateFromProps(props, state) {
    if (props.value !== state.name || !state.name) {
      return {
        name: props.value,
      }
    }
    return null;

  }

  render() {
    return (
      <Form.Item {...this.props.formWrapperProps}>
        <DebounceInput
          debounceTimeout={500}
          onChange={ this.props.onChange }
          value={ this.state.name }
          element={props =>  <input {...props} {...this.props.inputProps} />}
        />
      </Form.Item>
    )
  }
}

export default PlayerName;
