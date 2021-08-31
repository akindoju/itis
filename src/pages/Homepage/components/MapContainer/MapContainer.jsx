import React from "react";
import GoogleMapReact from "google-map-react";

const MapContainer = () => {
  const defaultProps = {
    center: {
      lat: 9.026153,
      lng: 7.488976,
    },
    zoom: 11,
  };
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyAkcZgKdUATcPSzjQG5MK0Jy3ef5rXAY0k",
          language: "eng",
          region: "eng",
          libraries: ["places"],
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default MapContainer;
