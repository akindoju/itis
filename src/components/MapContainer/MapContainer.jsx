import React from "react";
import GoogleMapReact from "google-map-react";

const MapContainer = () => {
  const defaultProps = {
    center: {
      lat: 9.036083189,
      lng: 7.4520315252,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: "70rem" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_MAP_API_KEY,
          language: "eng",
          region: "eng",
          libraries: ["places"],
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 20 20"
          lat={9.036083189}
          lng={7.4520315252}
          fill="#d61204"
        >
          <title>Our location</title>
          <path d="M10 20s-7-9.13-7-13c0-3.866 3.134-7 7-7s7 3.134 7 7v0c0 3.87-7 13-7 13zM10 9c1.105 0 2-0.895 2-2s-0.895-2-2-2v0c-1.105 0-2 0.895-2 2s0.895 2 2 2v0z"></path>
        </svg>
      </GoogleMapReact>
    </div>
  );
};

export default MapContainer;
