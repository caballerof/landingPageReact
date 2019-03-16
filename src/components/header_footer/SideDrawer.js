import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = props => {
  const { open, onClose } = props;
  return (
    <Drawer anchor="right" open={open} onClose={() => onClose(false)}>
      <List component="nav">
        <ListItem button onClick={() => console.log('Uno')}>
          Event starts in
        </ListItem>

        <ListItem button onClick={() => console.log('Venue NFO')}>
          Venue NFO
        </ListItem>

        <ListItem button onClick={() => console.log('High Lights')}>
          HighLights
        </ListItem>

        <ListItem button onClick={() => console.log('Pricing  ')}>
          Pricing
        </ListItem>

        <ListItem button onClick={() => console.log('Location')}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
