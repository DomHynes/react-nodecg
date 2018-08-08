import React, { Component } from 'react';
import { PlayerName } from '../../../views/Dashboard/player-name';
import { ReplicantInjector } from '../../../elements/replicant-injector';
import { ScoreInput } from '../../../elements';
import { setInfo } from '../../../utils/replicants'
import dlv from 'dlv';

import { Form, Row, Col } from 'antd';

export default class SetInfo extends Component {
  render() {
    return (
      <ReplicantInjector
        replicants={[setInfo]}
        render={
          ({ data, ready }) => (
            <Form layout={'inline'}>
              {ready && dlv(data, [setInfo, 'value', 'teams']).map(
                (team, index) => (
                  <Row>
                    <ScoreInput
                      value={team.score}
                      onChange={data[setInfo].onUpdateDot(['teams', index, 'score'])}
                    />

                    <Col span={12}>
                    {
                      team.players.map(
                        (player, playerIndex) => (
                          <PlayerName
                            value={player.name}
                            key={index}
                            onChange={data[setInfo].onUpdateDot([
                              'teams', index, 'players', playerIndex, 'name'
                            ])}
                          />
                        )
                      )
                    }
                    </Col>
                  </Row>

                )
              )}
            </Form>
          )
        }
        />
    )
  }
}

