import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d24378.033384931587!2d-6.275357411972404!3d53.33971680751875!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x48670c264b069187%3A0x454aaf4ec5991449!2sChrist+Church+Cathedral%2C+8+Christchurch+Pl%2C+Wood+Quay%2C+Dublin%2C+Ireland!3m2!1d53.343482599999994!2d-6.2710628!5e0!3m2!1sen!2smx!4v1552795305418"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
