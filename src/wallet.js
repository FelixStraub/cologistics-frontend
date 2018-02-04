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
              <h2>
                <div>
                  Balance:
                  {!this.props.balance && <strong>0</strong>}
                  {this.props.balance == 115 && <strong>355</strong>}
                  {this.props.balance == 175 && <strong>295</strong>}
                  {this.props.balance == 55 && <strong>415</strong>}
                  {this.props.balance != 115 && <strong>{this.props.balance}</strong>}
                  <small>col</small>
                </div>
              </h2>
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
