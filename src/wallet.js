import React, {Component} from 'react';
import {Card, CardContent, CardMedia} from "material-ui";

export default class wallet extends Component {

  amount = 5;

  render() {
    return (
      <div className="wallet">
        <Card className="FormCard">
          <CardMedia
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <h3>Your Balance: {this.amount}
              <small>col</small>
            </h3>
          </CardContent>
        </Card>
      </div>
    )
  }
}
