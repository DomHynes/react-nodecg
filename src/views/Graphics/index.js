import React, { Component, Fragment } from "react";
import dlv from "dlv";
import queryString from 'query-string';
import { AnimatedText } from "../../elements/animated-text";
import { ReplicantInjector } from "../../elements/replicant-injector";
import { setInfo } from "../../utils/replicants";
import { GraphicRoutes } from '../../config/routes';

class Graphics extends Component {

	constructor( props ) {
		super(props);

		this.state = {
			route: ''
		}
	}

  componentDidMount() {
		console.log(window.location);
		const { route } = queryString.parse(window.location.search);

		this.setState({ route })
	}

	findComponent = route => {
		const graphic = GraphicRoutes.find( graphic => graphic.route == route)
		if ( graphic ) {
			console.log(graphic.component)
			return graphic.component()
		}
		return null
	}

	render() {

		const { route } = this.state;
		const graphicComponent = this.findComponent(route);
		return (
				graphicComponent
				? graphicComponent
				: null
		)
	}
}

export default Graphics;
