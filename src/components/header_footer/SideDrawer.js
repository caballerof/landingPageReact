import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { scroller } from 'react-scroll';

const SideDrawer = props => {
  const { open, onClose } = props;

  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -130
    });
    onClose(false);
  };

  return (
    <Drawer anchor="right" open={open} onClose={() => onClose(false)}>
      <List component="nav">
        <ListItem button onClick={() => scrollToElement('starts')}>
          Event starts in
        </ListItem>

        <ListItem button onClick={() => scrollToElement('info')}>
          Venue info
        </ListItem>

        <ListItem button onClick={() => scrollToElement('highlights')}>
          HighLights
        </ListItem>

        <ListItem button onClick={() => scrollToElement('Pricing')}>
          Pricing
        </ListItem>

        <ListItem button onClick={() => scrollToElement('Location')}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
