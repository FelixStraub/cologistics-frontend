import React, {Component} from 'react';
import {Card, CardContent, CardMedia} from "material-ui";

export default class wallet extends Component {

  render() {
    return (
      <div className="wallet">
        <Card className="FormCard">
          <CardMedia
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <div>
              <div>
                Balance: <strong>{this.props.balance}col</strong>
              </div>
              {this.props.currentUserId === 'ID2' && (
                <div>
                  Awaiting 2 shipments
                </div>
              )}
            </div>

          </CardContent>
        </Card>
      </div>
    )
  }
}
