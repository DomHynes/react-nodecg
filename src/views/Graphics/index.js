import React, { Fragment } from 'react';
import dlv from 'dlv';
import { AnimatedText } from '../../elements/animated-text';
import { ReplicantInjector } from '../../elements/replicant-injector';
import { setInfo } from '../../utils/replicants';

const Graphics = () => (
	<ReplicantInjector
		replicants={[setInfo]}
		render={ ( ({ data }) =>  (
				<div>
					<AnimatedText
						value={dlv(data[setInfo], 'value.players.0.name')}
					/>
					<AnimatedText
						value={dlv(data[setInfo], 'value.players.1.name')}
					/>
				</div>
			)
			) }
		/>
)

export default Graphics;
