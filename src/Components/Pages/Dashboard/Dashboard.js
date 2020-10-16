import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import logo from '../../../images/logos/logo.png';

const Dashboard = () => {
    
    return (
        <div style={{ backgroundColor: '#F4F7FC', height: '100vh' }}>
            <div className="container pt-5 text-center">
                <Link to="/home"><img style={{ width: '200px' }} className='mx-5' src={logo} alt="" /></Link>
                <div className="row justify-content-center align-items-center dashboard-body">
                    <div className="col-md-3">
                        <Link to="/admin">
                            <button className="btn btn-success admin-btn">Admin Dashboard</button>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/order">
                            <button className="btn user-btn">User Dashboard</button>
                        </Link>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <Link to="/home"> <button className="btn home-btn">Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;