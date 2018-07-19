import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReplicantHandler extends Component {
  state = {
    ready: false
  };

  static propTypes = {
    replicants: PropTypes.array,
  }

  componentDidMount () {
    const {
      replicants
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

  render () {
    return null;
  }
}

export default NodeCGReplicant;
