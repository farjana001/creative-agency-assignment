import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { userContext } from '../../../../App';
import AdminEmail from '../Admin/AdminEmail/AdminEmail';

const AdminHome = () => {

    const { value1 } = useContext(userContext);
    const [loggedInUser, setLoggedInUser] = value1;
    const [adminEmail, setAdminEmail] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-sea-39803.herokuapp.com/adminEmail')
            .then(res => res.json())
            .then(data => setAdminEmail(data))
    }, [])

    const admin = adminEmail.filter(eml => eml.email === loggedInUser.email);


    return (
        <>
            {
                admin.map(ad => <AdminEmail key={ad._id} email={ad} />)
            }
        </>
    );
};

export default AdminHome;