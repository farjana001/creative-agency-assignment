import React, { useContext } from 'react';
import { userContext } from '../../../../../App';
import Admin from '../Admin';


const AdminEmail = ({email}) => {
    console.log(email.email);
    const { value1 } = useContext(userContext);
    const [loggedInUser, setLoggedInUser] = value1;

    return (
        <div>
            {
              (loggedInUser.email === email.email ) && <Admin />
            }
        </div>
    );
};

export default AdminEmail;