import React, { Component } from "react";
import { Form, Button, Input, Message, Grid } from "semantic-ui-react";
import Createnew from "../ethereum/campaigns";
import web3 from "../ethereum/web3";
class ClassName extends Component {
  state = {
    value: ""
  };

  onSubmit = async event => {
    event.preventDefault();
    const campaign = Createnew(this.props.address);
    const acc = await web3.eth.getAccounts();
    await campaign.methods
      .contribute()
      .send({ from: acc[0], value: this.state.value });
  };
  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Amount to contribute</label>
          <Input
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
            label="ehter"
            labelPosition="right"
          />
        </Form.Field>
        <Button primary>Contribute ^_^</Button>
      </Form>
    );
  }
}

export default ClassName;
