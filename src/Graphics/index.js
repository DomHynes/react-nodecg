import React, {Component} from 'react';
import AnimatedText from './AnimatedText';
import {Replicant} from '../elements/replicant';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { ConnectedRouter } from 'connected-react-router';
import history from '../redux/history';

class Graphics extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	text: ''
    };
  }

  onTextChange = text => {
    this.setState({text});
	}

	componentDidMount() {
		console.log(window.nodecg);
	}

	render() {
		const {text} = this.state;

		return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<div>

				<Replicant
					replicantName="test"
					value={text}
					onNewValue={this.onTextChange}
				/>
				<AnimatedText value={text} />
				</div>

			</ConnectedRouter>
		</Provider>
		);
	}
}

export default Graphics;
