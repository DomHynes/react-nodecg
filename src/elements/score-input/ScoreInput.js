import React, { Component } from 'react';

import { Input, Button, Row } from 'antd';

export default class ScoreInput extends Component {

  static defaultProps = {
    minValue: 0,
    maxValue: 10000
  }

  handleValueChange = changeValue => e => {
    const newValue = changeValue !== undefined
      ? this.props.value + changeValue
      : e;

    if (
      newValue <= this.props.maxValue &&
      newValue >= this.props.minValue
    ) {
      this.props.onChange(newValue);
    }
  }

  render() {
    return (
      <Row type="flex" style={{flexDirection: 'row', flexWrap: 'nowrap'}}>
          <Button type="primary" onClick={this.handleValueChange(-1)} > - </Button>
          <Input value={this.props.value} onChange={this.handleValueChange()} />
          <Button type="primary" onClick={this.handleValueChange(1)}   > + </Button>
      </Row>
    )
  }
}



