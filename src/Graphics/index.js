import React from 'react';
import AnimatedText from './AnimatedText';
import { ReplicantInjector } from '../elements/replicant-injector';
import { testDot } from '../utils/replicants';
import dlv from 'dlv';

const Graphics = () => (
	<ReplicantInjector
		replicants={[testDot]}
		render={ ( ({ data, ready }) => ready && <AnimatedText {...data[testDot]} value={dlv(data, [testDot, 'value', 'text']) || ''} /> ) }
		/>
)

export default Graphics;
