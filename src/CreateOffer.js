import React, {Component} from 'react';
import ChatBot from 'react-simple-chatbot';

class CreateOffer extends Component {
  render() {
    return (
      <div className="CreateOffer">
        <ChatBot
          userDelay={500}
          steps={[
            {
              id: '1',
              message: 'Hi Jeff, whats your goal?',
              trigger: 'actions'
            },
            {
              id: 'actions',
              options: [
                {value: 'create_offer', label: 'Create an offer', trigger: '2'},
                {value: 'pickup', label: 'transport sth.', trigger: '2'},
                {value: 'gotit', label: 'got my package', trigger: 'pick_item'},
              ],
            },
            {
              id: 'pick_item',
              message: 'Which one?',
              trigger: '2a'
            },
            {
              id: '2a',
              options: [
                {value: 'item_a', label: 'Got the 30 tires', trigger: '3'},
                {value: 'item_b', label: 'The car', trigger: '3'},
              ],
            },
            {
              id: '2',
              message: 'Awesome!',
              end: true
            },
            {
              id: '3',
              message: 'Thanks, the carrier was paid',
              end: true
            }
          ]}
        />
      </div>
    )
  }
}

export default CreateOffer;
