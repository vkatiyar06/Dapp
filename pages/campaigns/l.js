import React, { Component } from "react";
import { Card, Grid } from "semantic-ui-react";
import Layout from "../../components/layout";
import Campaign from "../../ethereum/campaigns";
import Contri from "../../components/contibure";
class show extends Component {
  static async getInitialProps(props) {
    const cam = Campaign(props.query.anything);
    const summary = await cam.methods.summary().call();
    return {
      caddress: props.query.anything,
      MinimumAmmount: summary[0],
      TotalRequests: summary[1],
      Balance: summary[2],
      Approvers: summary[3],
      Address: summary[4]
    };
  }
  renderCards() {
    const { min, req, bal, approver, address } = this.props;
    const items = [
      {
        header: this.props.Address,
        meta: "Address of Manager",
        description: "can do anything",
        style: { overflowWrap: "break-word" }
      },
      {
        header: this.props.Approvers,
        meta: "Count of Approvers",
        description: "can recommend or reject request",
        style: { overflowWrap: "break-word" }
      },
      {
        header: this.props.Balance,
        meta: "wei",
        description: "Amount of balance in contract in wei",
        style: { overflowWrap: "break-word" }
      },
      {
        header: this.props.MinimumAmmount,
        meta: "in wei",
        description: "min amount required ot join contract",
        style: { overflowWrap: "break-word" }
      },
      {
        header: this.props.TotalRequests,
        meta: "requests",
        description: "total requests pending",
        style: { overflowWrap: "break-word" }
      }
    ];
    return <Card.Group items={items} />;
  }
  render() {
    return (
      <Layout>
        <h2>cdfsvv</h2>
        <Grid>
          <Grid.Column width={12}>{this.renderCards()}</Grid.Column>
          <Grid.Column width={4}>
            <Contri address={this.props.caddress} />
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default show;
