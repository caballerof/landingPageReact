import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './SideDrawer';

class Header extends Component {
  state = {
    drawerOpen: false,
    headerTransparent: true
  };

  toggleDrawer = value => {
    this.setState({
      drawerOpen: value
    });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 10) {
      this.setState({
        headerTransparent: false
      });
    } else {
      this.setState({
        headerTransparent: true
      });
    }
  };

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.headerTransparent
            ? 'transparent'
            : '#2f2f2f',
          boxShadow: 'none'
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">Musical Events</div>
          </div>
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}
            tooltip="Menu"
            className="buttonMenu-csoft"
          >
            <MenuIcon />
          </IconButton>
          <SideDrawer
            open={this.state.drawerOpen}
            onClose={value => this.toggleDrawer(value)}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
