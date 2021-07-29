import React from "react";

const Map = ({ infoIp }) => {
  return (
    <div style={{ width: "100%", height: "70vh" }}>
      <iframe
        src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyB5ZAyBbnU876C_GLUyO7DdIBLCoU9nTyo&center=${infoIp.latitude},${infoIp.longitude}&zoom=18&maptype=satellite`}
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
    </div>
  );
};

export default Map;
