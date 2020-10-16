import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../../../images/logos/logo.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import { useState } from 'react';
import { useEffect } from 'react';
import { userContext } from '../../../../App';
import { useContext } from 'react';

const ServiceList = () => {
    const { value1 } = useContext(userContext);
    const [loggedInUser, setLoggedInUser] = value1;
    const [placedOrder, setPlacedOrder] = useState([]);

    const userEmail = { ...loggedInUser }


    useEffect(() => {
        fetch('https://fathomless-sea-39803.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setPlacedOrder(data))
    }, [])

    const selectedOrder = placedOrder.filter(order => order.data.email === userEmail.email)

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

                            <div style={{ marginLeft: '10%' }} className="row">
                                {
                                    selectedOrder.map(order => <ServiceDetails key={order._id} orders={order} />)
                                }

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ServiceList;