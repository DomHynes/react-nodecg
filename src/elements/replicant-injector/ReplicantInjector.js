import React, { Component } from 'react';
import { array, func } from 'prop-types';

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

  createReplicantObjects = (data, name) => {
    data[name] = { name, replicant: window.nodecg.Replicant( name ) }
    data[name].onUpdate = this.handleUpdateReplicant(data[name].replicant)
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
        });
        Object.values(replicantObjs).forEach( ({ replicant, name, }) => replicant.on('change', this.onNewValue( name )) );
      });
  }

  render () {
    return ( this.props.render(this.state) );
  }
}

export default ReplicantInjector;
