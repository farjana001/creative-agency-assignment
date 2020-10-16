import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faEnvelopeOpenText, faPlus, } from '@fortawesome/free-solid-svg-icons';
import { Nav, Navbar } from 'react-bootstrap';

const AdminSidebar = () => {

    return (
        <div className="sidebar">
            <Navbar className="pt-4" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <ul className="list-unstyled ml-3 mt-5">
                            <li>
                                <Link className="text-secondary font-weight-bold" to="/adminServiceList">
                                    <FontAwesomeIcon icon={faEnvelopeOpenText} /> <span>Service List</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="text-secondary font-weight-bold" to="/addedService">
                                    <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="text-secondary font-weight-bold" to="/makeAdmin">
                                    <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                                </Link>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default AdminSidebar;