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
        hidden: false,
        animationQueued: false
    }

    hideAndUpdate = async (element, displayValue) => {
        this.setState({animating: true});
        await hide(element);
        this.setState({displayValue, hidden: true});
    }

    show = async element => {
        this.setState({hidden: false})
        await show(element);
        this.setState({animating: false})
    }

    async componentDidUpdate(prevProps) {
        if (!this.state.animating && this.props.value !== this.state.displayValue) {
            this.hideAndUpdate(this.text.current, this.props.value)
                .then(() => {
                    this.show(this.text.current);
                    console.log('ping')
                });
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
