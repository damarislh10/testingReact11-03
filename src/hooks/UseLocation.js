import React, { useState } from "react";

const UseLocation = () => {
  const [state, setstate] = useState({
    longitude: 0,
    latitude: 0,
  });

  const obtenerDi = () => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setstate({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      function (error) {
        console.log("Error Code = " + error.code + "-" + error.message);
      },
      {
        enableHighAccuracy: true,
      }
    );

    return [state, obtenerDi];
  };
};

export default UseLocation;
