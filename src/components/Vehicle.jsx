import React from "react";

const Vehicle = ({ vehicle, name}) => {
  return (
    <div>
      <img src={vehicle} alt="vehicle" />
      <h2>{name}</h2>
    </div>
  );
};

export default Vehicle;
