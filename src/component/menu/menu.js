import React from 'react';
import './menu.css';

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu-item">
                <img src='regularenrollement.jpg' alt=''></img>
                <h5>Regular Enrollment</h5>
                </div>
            <div className="menu-item">
                <img src='remedial.jpg' alt=''></img>
                <h5>Remedial Enrollment</h5>
                </div>
            <div className="menu-item">
                <img src='club.webp' alt=''></img>
                <h5>Club Management</h5>
                </div>
            <div className="menu-item">
                <img src='classroom.jpg' alt=''></img>
                <h5>Classroom Management</h5>
                </div>
            <div className="menu-item">
                <img src='email.jpg' alt=''></img>
                <h5>SMS / EMAIL</h5>
                </div>
            <div className="menu-item">
                <img src='attendance.jpg' alt=''></img>
                <h5>Attendance</h5>
                </div>
        </div>
    );
};

export default Menu;