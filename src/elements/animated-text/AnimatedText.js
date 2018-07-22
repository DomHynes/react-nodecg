import React, { Component } from 'react';
import { func, any } from 'prop-types'
import { show, hide } from '../../utils/animations';
import { Textfit } from 'react-textfit';


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
        await show(element);
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
            <div
                ref={this.text}
                id="textWrapper"
            >
                <Textfit
                    style={{width: "1000px", height: "200px" }}
                    mode="single"
                >
                    {displayValue}
                </Textfit>
            </div>
        )
    }
}