import React, { Component } from "react";
import { Card, Button, Container } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/layout";
import { Link } from "../routes";
class Factory extends Component {
  static async getInitialProps() {
    const result = await factory.methods.getCampaigns().call();
    return { result };
  }

  renderCamp() {
    const items = this.props.result.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3> Campaigns</h3>
          <Link route="\campaigns\new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          {this.renderCamp()}
        </div>
      </Layout>
    );
  }
}

export default Factory;
