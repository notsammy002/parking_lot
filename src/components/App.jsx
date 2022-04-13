import React, { useState } from "react";
import Parking from "./Parking";
import Ticket from "./Ticket";
import car from "../assets/car.svg";
import compact from "../assets/compact.svg";
import jeep from "../assets/jeep.svg";
import bus from "../assets/bus.svg";
import truck from "../assets/truck.svg";
import suv from "../assets/suv.svg";
import styles from "../styles/global.module.css"

const Home = () => {
  const [parking, setParking] = useState([]);
  const [activeSpot, setActiveSpot] = useState(null);
  const [time, setTime] = useState(0);
  const [name, setName] = useState("")
  const [id, setId] = useState(0);

  //gets a random vehicle svg
  const getVehicle = () => {
    const vehicles = [car, compact, jeep, bus, truck, suv];
    const random = (Math.random() * 6) << 0;
    return vehicles[random];
  };

  /*checks to make sure paking is not full 
  then inserts a new object into the parking array*/
  const park = () => {
    if (parking.length < 6) {
      parking.push({
        vehicle: getVehicle(),
        ticket: { id: id, time: time, name: name }
      });
      setParking([...parking]);
      setId(id + 1);
      setTime(0)
      setName("")
    } else {
      alert("Lot is full!");
    }
  };

  //adds an hour to the time
  const tick = () => {
    if (time > 24) {
      alert("Cannot park for more than 1 day")
    }
    else {
      setTime(time + 1);
    }
  };

  const tickDecrease = () => {
    if (time <= 0) {
      alert("Cannot go down than 0")
    }
    else {
      setTime(time - 1);
    }

  };

  //conditionally renders time or ticket display
  const getDisplay = () => {
    if (activeSpot === null) {
      return (
        <div className={styles.display_container}>
          <div className={styles.time_container}>
            <h1>{time}:00</h1>
            <input type="text" placeholder="Enter vechicle registration" onChange={(e) => { setName(e.currentTarget.value) }} />
            <br />
            <button onClick={() => tick()}>▲</button>
            <button onClick={() => tickDecrease()}>▼</button>
          </div>
          <button onClick={() =>
            park()
          }>
            Park New Vehicle</button>
        </div>
      );
    } else {
      return (
        <Ticket
          ticket={activeSpot.ticket}
          time={time}
          name={name}
          activeSpot={activeSpot}
          setActiveSpot={setActiveSpot}
          parking={parking}
          setParking={setParking}
        />
      );
    }
  };

  console.clear();
  console.log(parking);

  return (
    <div className={styles.Home_container}>
      {getDisplay()}
      <Parking
        parking={parking}
        name={name}
        activeSpot={activeSpot}
        setActiveSpot={setActiveSpot}
      />
    </div>
  );
};

export default Home;
