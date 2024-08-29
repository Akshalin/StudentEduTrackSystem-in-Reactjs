import React from 'react';
import './sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src="hicetlogo.png" alt="Logo" />
            </div>
            <div>
                <div className="nav-list">
                    <img src='studentmanagement.png' alt=''></img>
                    <h5>Student Management</h5>
                </div>
                <div className="nav-list">
                    <img src='financiallogo.png' alt=''></img>
                    <h5>Financial Management</h5>
                </div>
                <div className="nav-list">
                    <img src='qualitycontrollogo.webp' alt=''></img>
                    <h5>Quality Control System</h5>
                </div>
                <div className="nav-list">
                    <img src='reportdelivery.jpg' alt=''></img>
                    <h5>Report Delivery System</h5>
                </div>
                <div className="nav-list">
                    <img src='attendance.jpg' alt=''></img>
                    <h5>Attendance Management</h5>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;