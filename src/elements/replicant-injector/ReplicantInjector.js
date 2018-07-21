import React, { Component } from 'react';
import { array, func } from 'prop-types';
import bury from 'bury';

class ReplicantInjector extends Component {
  state = {
    ready: false,
    data: {}
  };

  static propTypes = {
    replicants: array,
    render: func
  }

  replicants = {}

  onNewValue = replicant => ( value ) => {
    console.log(this.state);
    this.setState({
      data: {
        ...this.state.data,
        [replicant]: {
          ...this.state.data[replicant],
          value
        }
      }
    })
  }

  handleUpdateReplicant = replicant => value => replicant.value = value

  handleUpdateReplicantDotNotation = replicant => dot => value => bury(replicant.value, dot, value)

  createReplicantObjects = (data, name) => {
    const replicant = window.nodecg.Replicant( name );
    data[name] = {
      name,
      replicant,
      onUpdate: this.handleUpdateReplicant(replicant),
      onUpdateDot: this.handleUpdateReplicantDotNotation(replicant),
      value: null
    }
    return data;
  }

  componentDidMount () {
    const { replicants } = this.props;
    const replicantObjs  = replicants.reduce( this.createReplicantObjects, {} );

    window.NodeCG.waitForReplicants( ...Object.values(replicantObjs).map( ({ replicant }) => replicant ) )
      .then(() => {
        this.setState({
          ready: true,
          data: {
            ...replicantObjs
          }
        }, () =>     Object.values(replicantObjs).forEach(
          ({ replicant, name }) => replicant.on('change', this.onNewValue( name ))
        )
      );
      });
  }

  render () {
    return ( this.props.render(this.state) );
  }
}

export default ReplicantInjector;
