import React from 'react';
import Button from '@material-ui/core/Button';
import TicketIcon from '../../resources/images/icons/ticket.png';

const MyButton = props => {
  const { text, background, color, link } = props;
  return (
    <Button
      href={link}
      variant="contained"
      size="small"
      target="_blank"
      style={{
        background,
        color
      }}
    >
      <img src={TicketIcon} alt="Ticket icon" className="iconImage" />
      {text}
    </Button>
  );
};

export default MyButton;
