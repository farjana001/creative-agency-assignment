import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../../../images/logos/logo.png';
import ReviewForm from '../ReviewForm/ReviewForm';

const Review = () => {
    return (
        <main className="container-fluid">
            <div className="row">
                <div className="py-3">
                    <Link to="/home"><img className="logo ml-5" src={logo} alt="" /></Link>
                </div>
                <div className="pl-5">
                    <h4 className="order-heading">Order</h4>
                </div>
            </div>
            <div className="user-dash-container">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-10">
                        <div className="order-body">
                            <ReviewForm />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Review;