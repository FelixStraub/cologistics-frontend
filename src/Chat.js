import React, {Component} from 'react';
import ChatBot from 'react-simple-chatbot';
import HLService from './services/HLService';

class Chat extends Component {

  async handleEnd({steps, values}) {
    if (values[0] === 'OFFER') {
      console.log(values);
      const creatorId = "id0";
      const hlService = new HLService("16c5a34cb98325b55901d06a3eb16ce1");
      const res = await hlService.createShipment(creatorId, "id1", values[3], values[1], "Stuttgart");
      console.log(res);

    } else if (values[0] === 'DELIVER') {
      console.log('delivery')
    } else {
      console.log('marked receivedc')
    }
    console.log(values);
  }

  render() {
    return (
      <ChatBot
        className="FormCard"
        hideHeader={true}
        userDelay={500}
        handleEnd={this.handleEnd}
        userAvatar={this.props.userAvatar}
        recognitionEnable={true}
        steps={[
          {
            id: '1',
            message: `Hi ${this.props.name} whats up?`,
            trigger: 'actions'
          },
          {
            id: 'actions',
            options: [
              {value: 'OFFER', label: 'I need shipping', trigger: 'create_offer'},
              {value: 'DELIVER', label: 'I\'m about to deliver items', trigger: 'delivery'},
              {value: 'RECEIVED', label: 'I have received my delivery', trigger: 'pick_item'},
            ],
          },
          {
            id: 'delivery',
            message: 'Sweet. Where are you headed?',
            trigger: 'pick_destination'
          },
          {
            id: 'pick_destination',
            user: true,
            trigger: 'destination_picked'
          },
          {
            id: 'destination_picked',
            message: 'On your way to {previousValue} you could pick up the following items:',
            trigger: 'shipping_items'
          },
          {
            id: 'shipping_items',
            options: [
              {value: 'item_a', label: '30 breaks from Leonberg to Vaihingen', trigger: '2'},
              {value: 'item_b', label: '1 Pizza from Vaihingen to Heslach', trigger: '2'}
            ],
          },
          {
            id: 'create_offer',
            message: 'What do you want to have shipped?',
            trigger: 'select_item'
          },
          {
            id: 'select_item',
            user: true,
            trigger: 'shipment'
          },
          {
            id: 'shipment',
            message: 'Where to you want the {previousValue} shipped to?',
            trigger: 'select_destination'
          },
          {
            id: 'select_destination',
            options: [
              {value: 'item_a', label: 'To my current location', trigger: 'current_destination'},
              {value: 'item_b', label: 'Choose', trigger: 'NOT_IMPLEMENTED'},
            ],
          },
          {
            id: 'current_destination',
            message: 'The package will be shipped to your current destination',
            trigger: 'init_offer_price'
          },
          {
            id: 'init_offer_price',
            message: 'How much do you offer?',
            trigger: 'offer_price'
          },
          {
            id: 'offer_price',
            user: true,
            trigger: 'offer_selected'
          },
          {
            id: 'offer_selected',
            message: '{previousValue}: Are you sure?',
            trigger: 'offer_selected_confirm'

          },
          {
            id: 'offer_selected_confirm',
            options: [
              {value: 'yes', label: 'Yes', trigger: 'offer_created'},
              {value: 'no', label: 'No', trigger: 'init_offer_price'}
            ],
          },
          {
            id: 'offer_created',
            message: 'Great. offer was created',
            end: true
          },
          {
            id: 'pick_item',
            message: 'Which one?',
            trigger: '2a'
          },
          {
            id: '2a',
            options: [
              {value: 'item_a', label: 'Got the 30 breaks', trigger: '3'},
              {value: 'item_b', label: 'The car', trigger: '3'},
            ],
          },
          {
            id: '2',
            message: 'Awesome!',
            end: true
          },
          {
            id: 'NOT_IMPLEMENTED',
            message: 'Not implemented',
            end: true
          },
          {
            id: '3',
            message: 'Thanks, the carrier was paid the 60col',
            end: true
          }
        ]}
      />
    )
  }
}

export default Chat;