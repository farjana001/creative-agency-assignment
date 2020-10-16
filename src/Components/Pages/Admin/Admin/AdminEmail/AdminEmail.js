import React, { useContext } from 'react';
import { userContext } from '../../../../../App';
import Admin from '../Admin';


const AdminEmail = ({email}) => {
    const { value1 } = useContext(userContext);
    const [loggedInUser, setLoggedInUser] = value1;

    return (
        <>
            {
              (loggedInUser.email === email.email ) && <Admin />
            }
        </>
    );
};

export default AdminEmail;