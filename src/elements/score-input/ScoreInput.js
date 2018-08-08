import React, { Component, Fragment } from 'react';

import { InputNumber, Button, Row, Col } from 'antd';

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
      <Fragment>
        <Col span={1}>
          <Button type="primary" onClick={this.handleValueChange(-1)} > - </Button>
        </Col>

        <Col span={6}>
          <InputNumber value={this.props.value} onChange={this.handleValueChange()} />
        </Col>

        <Col span={1}>
          <Button type="primary" onClick={this.handleValueChange(1)}   > + </Button>
        </Col>
      </Fragment>
    )
  }
}



