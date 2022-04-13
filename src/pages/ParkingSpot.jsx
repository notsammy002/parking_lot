import React from 'react'
import { Link } from 'react-router-dom'
import Home from "../components/App"


const ParkingSpot = () => {
  return (
    <div >
      ParkingSpot
      <br />
      <Link to="/">DashBoard</Link>
        <Home />
        
    </div>
  )
}

export default ParkingSpot