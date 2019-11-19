import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return ( <ul>
                <Link to="/admin/user"><li>User</li></Link>
                <Link to="/admin/post"><li>Post</li></Link>
            </ul> );
}
 
export default SideBar;