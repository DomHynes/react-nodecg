import React, { Component } from 'react';
import { PlayerName } from '../../../views/Dashboard/player-name';
import { ReplicantInjector } from '../../../elements/replicant-injector';
import { setInfo } from '../../../utils/replicants'
import dlv from 'dlv';
import bury from 'bury';

export default class SetInfo extends Component {
  render() {
    return (
      <ReplicantInjector
        replicants={[setInfo]}
        render={
          ({ data, ready }) => (
            <div>
              {ready && dlv(data, [setInfo, 'value', 'players']).map(
                (player, index) => (
                  <PlayerName
                    value={player.name}
                    key={index}
                    onChange={data[setInfo].onUpdateDot(['players', index, 'name'])}
                  />
                )
              )}
            </div>
          )
        }
        />
    )
  }
}

