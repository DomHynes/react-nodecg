import React, { Component } from 'react';
import { ReplicantInjector } from '../../../elements/replicant-injector';
import { setInfo } from '../../../utils/replicants'
import dlv from 'dlv';

import { Form, Row, Col } from 'antd';

export default class SetScores extends Component {
  render() {
    return (
      <ReplicantInjector
        replicants={[setInfo]}
        render={
          ({ data, ready }) => (
              ready && dlv(data, [setInfo, 'value', 'teams']).map(
                team => <p> {team.score} </p>
              )
          )
        }
        />
    )
  }
}

