import React from 'react'
import { Link } from 'react-router-dom'



const Dashboard = () => {
    return (
        <div style={{ background: "lightgrey", padding: "20px"}}>
            <h2>Dashboard</h2>
            <br />
            <p>The proposed project is a smart parking booking system that provides institutes students an easy way of reserving a parking space online using web portal.It overcomes the problem of finding a parking space in universities/institute areas that unnecessary consumes time.Hence, this project offers a web application based reservation system where students can view various parking spaces and select nearby or specific area of their choice to view whether space is available or not.If the booking space is available, then student can book it for specific time slot.The booked space will be marked and will not be available for anyone else for the specified time.This system provides an additional feature of cancelling the bookings. Students can cancel their reserved space anytime.Students can also view previous parking booking details using the web portal.</p>
            <h3>Book from below parking lot</h3>
            
            
            <br />
            <Link to="/parkingspot">
            <img style={{ width: "200px", height: "200px"}} src='https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80' />
             </Link>
        </div>
    )
}

export default Dashboard