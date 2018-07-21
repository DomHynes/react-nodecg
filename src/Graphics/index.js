import React from 'react';
import { ReplicantInjector } from '../elements/replicant-injector';
import AnimatedText from './AnimatedText';
import { test } from '../utils/replicants';

const Graphics = () => (
	<ReplicantInjector
		replicants={[test]}
		render={ ( ({ data }) => <AnimatedText {...data[test]} /> ) }
		/>
)

export default Graphics;
