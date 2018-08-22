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
        queuedText: false,
        animating: false,
    }

    hideAndUpdate = async (target, displayValue) => {
        this.setState({animating: true});
        await hide({target});
        this.setState({displayValue, hidden: true});
    }

    show = async target => {
        this.setState({hidden: false})
        await show({target});
        this.setState({animating: false})
    }

    componentDidMount() {
        this.hideAndUpdate(this.text.current, this.props.value)
            .then( () => this.show(this.text.current) )
    }


    async componentDidUpdate(prevProps) {
        console.log(this.state);
        if ( this.state.queuedText !== this.props.value) {
            this.setState({ queuedText: this.props.value });
            return
        }

        while (!this.state.animating && this.state.displayValue !== this.state.queuedText) {
            await this.hideAndUpdate(this.text.current, this.props.value)
            await this.show(this.text.current);
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
