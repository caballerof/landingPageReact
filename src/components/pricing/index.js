import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

export class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    position: ['Balcony', 'Medium', 'VIP'],
    description: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Voluptatum neque quae ab numquam voluptates commodi hic quas reprehenderit totam, mollitia voluptatibus',
      'cum aperiam eligendi aspernatur, quaerat recusandae quod possimus? Nulla?'
    ],
    linkTo: [
      'https://www.google.com/',
      'https://espanol.yahoo.com/?p=us',
      'https://duckduckgo.com/'
    ],
    delay: [200, 0, 200]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.position[i]}</span>
            </div>
            <div className="pricing_description">
              <span>{this.state.description[i]}</span>
            </div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase"
                color="#fff"
                background="#ffa800"
                link={this.state.linkTo[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
