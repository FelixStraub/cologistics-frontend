import React, {Component} from 'react';
import './App.css';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import TextField from 'material-ui/TextField';

class App extends Component {
  state = {
    open: false,
    pickupLocation: '',
    deliveryLocation: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  createOffer = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const {open} = this.state;
    return (
      <div className="App">
        <form noValidate autoComplete="off">
          <div>
            <TextField
              id="pickupLocation"
              label="Pickup Location"
              value={this.state.pickupLocation}
              onChange={this.handleChange('pickupLocation')}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              id="deliveryLocation"
              label="Delivery Location"
              value={this.state.deliveryLocation}
              onChange={this.handleChange('deliveryLocation')}
              margin="normal"
            />
          </div>
        </form>
        <Button raised color="primary"
                onClick={this.createOffer}>
          Create offer
        </Button>
        <Snackbar
          anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
          autoHideDuration={3000}
          open={open}
          onClose={this.handleClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Offer successfully created </span>}
        />
      </div>
    );
  }
}

export default App;
