import React from "react";
import Spot from "./Spot";
import styles from "../styles/global.module.css"

const Parking = ({ parking, activeSpot, setActiveSpot }) => {
  let blanks = [];

  //adds correct number of blank parking spots to an array
  if (parking.length < 6) {
    for (let i = 0; i < 6 - parking.length; i++) {
      blanks.push(i);
    }
  }

  return (
    <div className= {styles.garage_container}>
      {parking.map((spot, index) => {
        return (
          <Spot
            key={index}
            spot={spot}
            parking = {parking}
            activeSpot={activeSpot}
            setActiveSpot={setActiveSpot}
          />
        );
      })}
      {blanks.map(id => {
        return <Spot key={id} spot={"vacant"} />;
      })}
    </div>
  );
};

export default Parking;
