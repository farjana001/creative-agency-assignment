import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faEnvelopeOpenText, faSms } from '@fortawesome/free-solid-svg-icons';
import { Nav, Navbar } from 'react-bootstrap';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <Navbar className="pt-4" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <ul className="list-unstyled ml-3 mt-5">
                            <li>
                                <Link to="/order" className="text-secondary font-weight-bold">
                                    <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="text-secondary font-weight-bold" to="/serviceList">
                                    <FontAwesomeIcon icon={faEnvelopeOpenText} /> <span>Service List</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="text-secondary font-weight-bold" to="/review">
                                    <FontAwesomeIcon icon={faSms} /> <span>Review</span>
                                </Link>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Sidebar;