import React from 'react';
import SideBar from './SideBar';
import { Route } from 'react-router-dom';
import User from './User';
import Posts from './Posts';

const Dashboard = () => {
    return ( <div>
                <h1>Welcome Admin, The New Dashboard</h1>
                <SideBar />
                <Route path="/admin/user" component={User}/>
                <Route path="/admin/post" component={Posts}/>
            </div> );
}
 
export default Dashboard;