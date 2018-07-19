import React, { Component } from 'react';
import { show, hide } from './animations';

export default class AnimatedText extends Component {

    text = React.createRef();

    state = {
        displayValue: '',
        hidden: false
    }

    hideAndUpdate = async (element, displayValue) => {
        await hide(element);
        this.setState({displayValue, hidden: true});
    }

    componentDidUpdate(prevProps) {

        if (this.props.value !== prevProps.value) {
            this.hideAndUpdate(this.text.current, this.props.value)
        } else if (this.state.hidden) {

            show(this.text.current);
            this.setState({hidden: false});
        }
    }

    render() {
        const { displayValue } = this.state;
        return (
            <p ref={this.text} >{displayValue}</p>
        )
    }
}
