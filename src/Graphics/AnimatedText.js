import React, { Component } from 'react';
import { func, any } from 'prop-types'
import { show, hide } from '../utils/animations';

export default class AnimatedText extends Component {
    static defaultProps = {
        show: func,
        hide: func,
        value: any
    }

    text = React.createRef();

    state = {
        displayValue: '',
        hidden: false
    }

    hideAndUpdate = async (element, displayValue) => {
        await hide(element);
        this.setState({displayValue, hidden: true});
    }

    show = async element => {
        show(element);
        this.setState({hidden: false})
    }

    componentDidUpdate(prevProps) {
        if (this.props.value !== prevProps.value) {
            this.hideAndUpdate(this.text.current, this.props.value)
        } else if (this.state.hidden) {
            this.show(this.text.current);
        }
    }

    render() {
        const { displayValue } = this.state;
        return (
            <React.Fragment>
                <p ref={this.text} >{displayValue}</p>
                <button onClick={() => this.props.onUpdate('asdfasdfasdf')}> CLICK </button>
            </React.Fragment>
        )
    }
}
