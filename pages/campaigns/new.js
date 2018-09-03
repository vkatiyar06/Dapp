import React, { Component } from "react";
import Layout from "../../components/layout";
import { Form, Button, Message, Input } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";

class CampaignNew extends Component {
  state = {
    min: "",
    e: "",
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true, e: "" });
    try {
      const ac = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.min)
        .send({ from: ac[0] });
      Router.pushRoute("/");
    } catch (err) {
      this.setState({ e: err.message });
    }
    this.setState({ loading: false });
  };
  render() {
    return (
      <Layout>
        <h1>Create New Campaign</h1>
        <Form onSubmit={this.onSubmit} error={!!this.state.e}>
          <Form.Field required>
            <label>Enter Amount</label>
            <Input
              label="wei"
              labelPosition="right"
              placeholder="00"
              value={this.state.min}
              onChange={event => this.setState({ min: event.target.value })}
            />
          </Form.Field>
          <Message error header="Opps!!" content={this.state.e} />
          <Button primary content="GO!! " loading={this.state.loading} />
        </Form>
      </Layout>
    );
  }
}
export default CampaignNew;
