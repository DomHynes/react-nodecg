import React, { Component } from 'react';
import { array, func } from 'prop-types';

class ReplicantInjector extends Component {
  state = {
    ready: false,
  };

  static propTypes = {
    replicants: array,
    render: func
  }

  onNewValue = replicant => ( newData ) => {
    this.setState({ [replicant]: newData })
  }

  createReplicantObjects = name => ({ name, replicant: window.nodecg.Replicant( name ) })

  componentDidMount () {
    const { replicants } = this.props;
    const replicantObjs = replicants.map( this.createReplicantObjects );

    window.NodeCG.waitForReplicants( ...replicantObjs.map( ({ replicant }) => replicant ) )
      .then(() => {
        this.setState({ ready: true });
        replicantObjs.forEach( ({ replicant, name }) => replicant.on('change', this.onNewValue( name )) );
      });
  }

  render () {
    return ( this.props.render(this.state) );
  }
}

export default ReplicantInjector;
