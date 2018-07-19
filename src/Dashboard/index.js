import React, { Component } from 'react';
import logo from '../logo.svg';
import debounce from 'lodash/debounce';

class Dashboard extends Component {

  displayReplicant = window.nodecg.Replicant('test')

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.displayReplicant.on('change', text => this.setState({ text }) );
    this.updateText = debounce(this.updateText, 300);
  }

  styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
  }

  onChange = ({ target: { value } }) => {
    this.setState({ text: value }, () => this.updateText(value));
  }

  updateText = text => this.displayReplicant.value = text

  render() {
    const { text } = this.state;

    return (
      <div style={this.styles.container}>
        <img style={{width: 100}} src={`build${logo}`} alt=""/>
        <input value={text} onChange={this.onChange} type="text"/>
        <p> {this.displayReplicant.value} </p>
      </div>
    );
  }
}

export default Dashboard;
