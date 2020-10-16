import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Status from '../Status/Status';
import './AdminServiceTable.css';


const AdminServiceTable = () => {
    const [placedOrder, setPlacedOrder] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-sea-39803.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setPlacedOrder(data))
    }, [])

    return (
        <div className="container-fluid p-4">
            {/* <table class="table">
                <thead style={{ backgroundColor: '#F5F6FA' }} className="table-head">
                    <tr>
                        <th className="text-secondary text-left" scope="col">Sr No</th>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Email ID</th>
                        <th className="text-secondary" scope="col">Service</th>
                        <th className="text-secondary" scope="col">Project Details</th>
                        <th className="text-secondary" scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        placedOrder.map((order, index) =>
                            
                               <div className="row">
                               <div className="col-md-1">
                                    <p>{index + 1}</p>
                                </div>
                                <div className="col-md-2">
                                    <p>{order.data.name}</p>
                                </div>
                                <div className="col-md-2">
                                    <p>{order.data.email}</p>
                                </div>
                                <div className="col-md-3">
                                    <p>{order.data.title}</p>
                                </div>
                                <div className="col-md-3">
                                    <p>{order.data.details}</p>
                                </div>
                                <div className="col-md-1">
                                    <p><Status /></p>
                                </div>
                               </div>
                    
                        )
                    }

                </tbody>
            </table> */}
            <div className="pt-4 text-center">
                <div className="table-header row p-2">
                    <div className="col-md-1">
                        <p className="font-weight-bold">Sr no.</p>
                    </div>
                    <div className="col-md-2">
                        <p>Name</p>
                    </div>
                    <div className="col-md-2 pl-1">
                        <p>Email ID</p>
                    </div>
                    <div className="col-md-2">
                        <div className="ml-3"><p>Service Title</p></div>
                    </div>
                    <div className="col-md-3">
                        <p>Project Details</p>
                    </div>
                    <div className="col-md-2">
                        <p>Status</p>
                    </div>
                </div>
            </div>


            <div className="bg-white table-content text-center">
                {
                    placedOrder.map((order, index) =>

                        <div className="row p-3">
                            <div className="col">
                                <p className="font-weight-bold">{index + 1}</p>
                            </div>
                            <div className="col-lg-2 col-sm-12">
                                <div><p>{order.data.name}</p></div>
                            </div>
                            <div className="col-lg-2 col-sm-12">
                                <div>
                                   <p>{order.data.email}</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-12">
                                <div className="ml-5">
                                    <p>{order.data.title}</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12">
                               <div> <p>{order.data.details}</p></div>
                            </div>
                            <div className="col-lg-2 col-sm-12">
                                <div><p><Status /></p></div>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default AdminServiceTable;