import {TweenMax, Elastic} from 'gsap';

const duration = 0.5;

export const show = target => new Promise(resolve => {
TweenMax
	.to(target, duration, {
		opacity: 1,
		top: 0,
		rotation: '-=80',
		onComplete: resolve,
		ease: Elastic.easeOut.config(0.25, 1)
	});
});

export const hide = target => new Promise(resolve => {
TweenMax
	.to(target, duration, {
		opacity: 0,
		top: 25,
		rotation: '+=80',
		onComplete: resolve,
		ease: Elastic.easeOut.config(0.25, 1)
	});
});
