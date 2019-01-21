import React from "react";
import GoogleMapReact from "google-map-react";

const Mapper = props => {
  return (
    <div style={{ height: "50%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBcfPUtVA8vd8IMCcWYPQNNnXYlU8kytig" }}
        defaultCenter={[props.lat, props.long]}
        defaultZoom={15}
      />
    </div>
  );
};

export default Mapper;
