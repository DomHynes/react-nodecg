import React from 'react';
import dlv from 'dlv';
import { AnimatedText } from '../../elements/animated-text';
import { ReplicantInjector } from '../../elements/replicant-injector';
import { testDot } from '../../utils/replicants';

const Graphics = () => (
	<ReplicantInjector
		replicants={[testDot]}
		render={ ( ({ data, ready }) =>
			ready &&
			<AnimatedText
				{...data[testDot]}
				value={dlv(data, [testDot, 'value', 'text']) || ''}
				/>
			) }
		/>
)

export default Graphics;
