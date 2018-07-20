import { TweenMax, Elastic } from 'gsap';

const DURATION = 0.5;
const HIDE_HEIGHT = 25;
const SHOW_HIDE_EASE = Elastic.easeOut.config(0.25, 1);

export const show = target => new Promise(resolve => {
TweenMax
	.fromTo( target, DURATION, {
			opacity: 0,
			top: HIDE_HEIGHT,
			ease: SHOW_HIDE_EASE,
		},
		{
			opacity: 1,
			top: 0,
			ease: SHOW_HIDE_EASE,
			onComplete: resolve,
	});
});

export const hide = target => new Promise(resolve => {
TweenMax
	.fromTo( target, DURATION, {
			opacity: 1,
			top: 0,
			ease: SHOW_HIDE_EASE,
		},
		{
			opacity: 0,
			top: HIDE_HEIGHT,
			ease: SHOW_HIDE_EASE,
			onComplete: resolve,
	});
});
