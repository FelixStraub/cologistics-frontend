import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';

class App extends Component {
  state = {
    open: false
  };

  createOffer = () => {
    this.setState({ open: true});
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    return (
      <div className="App">
        <Button raised color="primary"
                onClick={this.createOffer}>
          Create offer
        </Button>
        <Snackbar
          anchorOrigin={{vertical: 'bottom', horizontal: 'center' }}
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
