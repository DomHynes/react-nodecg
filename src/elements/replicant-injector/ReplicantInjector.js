import React, { Component } from 'react';
import { array, func, number } from 'prop-types';
import bury from 'bury';
import debounce from 'lodash.debounce';

class ReplicantInjector extends Component {
  state = {
    ready: false,
    data: {}
  };

  static propTypes = {
    replicants: array,
    render: func,
    debounce: number,
    onChange: func,
  }

  onNewValue = replicant => (value, prevValue) => {
    this.setState({
      data: {
        ...this.state.data,
        [replicant]: {
          ...this.state.data[replicant],
          value,
          prevValue
        }
      }
    })
  }

  handleUpdateReplicant = replicant => value => replicant.value = value

  handleUpdateReplicantDotNotation = replicant => dot => value => {
    let newValue = value.target !== undefined ? value.target.value : value;
    console.log({replicant, dot, value})
    this.props.debounce
      ? debounce(bury(replicant.value, dot, newValue), this.props.debounce)
      : bury(replicant.value, dot, newValue)
  }

  createReplicantData = (data, replicant) => {
    data[replicant.name] = {
      name: replicant.name,
      replicant,
      onUpdate: this.handleUpdateReplicant(replicant),
      onUpdateDot: this.handleUpdateReplicantDotNotation(replicant),
      value: replicant.value
    };
    replicant.on('change', this.onNewValue(replicant.name))
    return data;
  }

  componentDidMount() {
    const { replicants } = this.props;
    const replicantObjs = replicants.map( slug => window.nodecg.Replicant(slug) )
    window.NodeCG.waitForReplicants( ...replicantObjs )
      .then(() => {
        this.setState({
          ready: true,
          data: replicantObjs.reduce( this.createReplicantData, {} )
        });
      });
  }

  render () {
    return ( this.props.render(this.state) );
  }
}

export default ReplicantInjector;
