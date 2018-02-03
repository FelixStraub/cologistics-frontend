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
import HLService from "./services/HLService";

var userAvatar = require('./assets/user.svg');

const style = {
  'justifyContent': 'space-between'
};

class App extends Component {


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
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

  updateBalance(currentUser) {
    const hlService = new HLService();
    setInterval(() => {
      hlService.getBalance(currentUser).then((res) => {
        return res.json();
      }).then(r => {
        this.setState({currentBalance: r.balance});
      })
    }, 1000)
  }

  constructor(props) {
    super(props);
    this.state = {
      currentBalance: '',
      open: false,
      pickupLocation: '',
      deliveryLocation: ''
    };
    this.updateBalance("ID" + this.props.match.params.id);
  }

  render() {
    const currentUser = "ID" + this.props.match.params.id;
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
        <Wallet balance={this.state.currentBalance}/>
        <ThemeProvider theme={this.theme}>
          <Chat userAvatar={userAvatar}
                name={'Jeff'} currentUserId={currentUser}/>
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
