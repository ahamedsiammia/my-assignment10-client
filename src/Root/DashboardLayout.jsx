import React from 'react';
import Aside from '../Dashboard/Aside/Aside';
import { Outlet } from 'react-router';
import Navber from '../Components/Navber/Navber';

const DashboardLayout = () => {
    return (
         <div className='flex'>
            <Aside></Aside>
            
            <div className='flex-1 p-5'>
                <Navber></Navber>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;