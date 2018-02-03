import React, {Component} from 'react';
import './App.css';
import Snackbar from 'material-ui/Snackbar';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Wallet from "./wallet";
import {ThemeProvider} from 'styled-components';
import Chat from "./Chat";

var userAvatar = require('./assets/user.svg');

const style = {
  'justify-content': 'space-between'
};

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

    const data = {
      "chaincodeId": "94d8487ec2e9524011bf8f73ebeaa110",
      "fcn": "createShipment",
      "args": [
        "Test",
        "Test",
        "Test",
        "Test",
        "Test",
        "Test",
        "Test",
        "Test",
        "Test",
        "Test",
        "Test"
      ]
    };
    var that = this;
    fetch('https://hyperledger-api.cfapps.eu10.hana.ondemand.com/invoke', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'apikey': 'XdNa4CgwYYgnoW95uBW38jQOIlSwOCRVtiMoA5HIPsZmtj1p6TA8JStkJ0Kc75CMSYScjFoUaCpo94Y8oXGo4UXN24i3G3QBX2xp8xBUop1HcB78FQg8urrhr73KKDGknGJhp2t5YxdMzwCUx5LmsEkmN3aPZB5yioxRv3qQuDPKaliTaXKeBaKW38D2mCLteKxd39vUYRquTa7J86vu0d7DZOHnoeVOdIfhlW8jiKgB6EEfjLoA5WR517lpL5y356ZqrnwPhdsK1rWnxwExrwux4RE7u7Tlr8D2DXbvsCobt115P4tXcRcpDBvHPLe3J7zJv56Et4sshi4OJVWEppUxhRGgN2TyFOa24qLVAe3USI91kJuaEQ8jq8NWeZlHIeUaPAihtkoxpyW4pjspQbrdpDkmqK4GuIAjtiw51oBPeQHde6WpiT1xjIFezltNJgGPNSdh7SA6Jrht0NojBAAbi0osd0xQblKLFNQOdh40BjhTwuFL66N6IYOhOoOz',
        "content-type": "application/json",
        "cache-control": "no-cache"
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
      that.setState({open: true});
    });

  };

  handleClose = () => {
    this.setState({open: false});
  };

  theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#3f51b5',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#3f51b5',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  render() {
    const {open} = this.state;
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar style={style}>
            <Typography type="title" color="inherit">
              Cologistics
            </Typography>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Wallet/>
        <ThemeProvider theme={this.theme}>
          <Chat userAvatar={userAvatar}
                name={'Jeff'}/>
        </ThemeProvider>
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
