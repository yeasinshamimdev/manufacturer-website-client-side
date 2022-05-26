import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../../../hooks/useAdmin';
import auth from '../../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl text-center font-bold mt-10 mb-2 text-primary border-b-2 pb-2'>Your Dashboard</h2>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    {
                        admin ? <>
                            <li><Link to='/dashboard/users'>All Users</Link></li>
                            <li><Link to='/dashboard/manageOrders'>Manage All Orders</Link></li>
                            <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>
                            <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
                            <li><Link to='/dashboard/manageProduct'>Manage Products</Link></li>
                        </> :
                            <>
                                <li><Link to='/dashboard/order'>My Order</Link></li>
                                <li><Link to='/dashboard/review'>Add A Review</Link></li>
                            </>
                    }
                </ul>
            </div>

        </div>
    );
};

export default Dashboard;