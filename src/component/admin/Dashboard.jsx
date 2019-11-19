import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return ( <div>
                <h1>Welcome Admin, The New Dashboard</h1>
                <ul>
                    <Link to="/admin/user"><li>User</li></Link>
                    <Link to="/admin/post"><li>Post</li></Link>
                </ul>
            </div> );
}
 
export default Dashboard;