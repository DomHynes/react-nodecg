import React, { Component } from 'react';
import PropTypes from 'prop-types';

import _isEqual from 'lodash/isEqual';


class NodeCGReplicant extends Component {
  constructor (props) {
    super(props);

    this.state = {
      replicant: window.nodecg.Replicant(props.replicantName, { defaultValue: props.value }),
      ready: false
    };
  }

  static propTypes = {
    replicantName: PropTypes.string.isRequired,
    value: PropTypes.any,
    onNewValue: PropTypes.func.isRequired
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    if (!prevState.ready) {
      return null;
    }

    if (!_isEqual(nextProps.value, prevState.replicant.value)) {
      prevState.replicant.value = nextProps.value;
      return {
        ...prevState,
        replicant: prevState.replicant
      };
    }

    return null;
  }

  componentDidMount () {
    const {
      replicantName,
      value,
      onNewValue
    } = this.props;

    window.NodeCG.waitForReplicants(this.state.replicant).then(() => {
      this.setState({ready: true});
      onNewValue(this.state.replicant.value);
    });

    this._mounted = true;

    this.state.replicant.on('change', (newValue, oldValue) => {
      if (this._mounted) {
        onNewValue(newValue, oldValue);
      }
    });
  }

  componentWillUnmount () {
    this._mounted = false;
  }

  render () {
    return null;
  }
}

export default NodeCGReplicant;
