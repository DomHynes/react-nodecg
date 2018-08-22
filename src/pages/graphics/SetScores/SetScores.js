import React, { Component } from 'react';
import { ReplicantInjector } from '../../../elements/replicant-injector';
import { AnimatedText } from '../../../elements/animated-text';
import { setInfo } from '../../../utils/replicants'
import dlv from 'dlv';

export default class SetScores extends Component {
  render() {
    return (
      <ReplicantInjector
        replicants={[setInfo]}
        render={
          ({ data, ready }) => (
            ready && dlv(data, [setInfo, 'value', 'teams']).map(
              team => <AnimatedText value={team.score} />
            )
          )
        }
      />
    )
  }
}

