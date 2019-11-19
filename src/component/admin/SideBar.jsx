import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SideBar = () => {
    return ( <ul>
                <NavLink to='/admin/user'>{<li>User</li>}</NavLink>
                <NavLink to="/admin/post">{<li>Post</li>}</NavLink>
            </ul> );
}
 
export default SideBar;