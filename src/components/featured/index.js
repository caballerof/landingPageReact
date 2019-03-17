import React from 'react';
import Carrusel from './Carrusel';
import TimeUntil from './TimeUntil';

const Featured = props => {
  return (
    <div
      style={{
        position: 'relative'
      }}
    >
      <Carrusel />
      <div className="artist_name">
        <div className="wrapper">Ariana Grande</div>
      </div>
      <TimeUntil />
    </div>
  );
};
export default Featured;
