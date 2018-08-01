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

  replicants = {}

  onNewValue = replicant => (value, prevValue) => {
    console.log(JSON.stringify({value, prevValue}))
    // this.props.onChange && this.props.onChange({replicant, value});
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
    this.props.debounce
    ? debounce(bury(replicant.value, dot, value), this.props.debounce)
    : bury(replicant.value, dot, value)
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
    const replicantObjs = replicants.map( slug => nodecg.Replicant(slug) )
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
