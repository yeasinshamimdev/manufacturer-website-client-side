import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink';

const Header = () => {

    return (
        <div className="navbar bg-slate-100 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <ActiveLink to='/home'>
                                Home
                            </ActiveLink>
                        </li>
                        <li tabIndex="0">
                            <ActiveLink to='/blog'>
                                Blog
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to='/login'>
                                Login
                            </ActiveLink>
                        </li>
                    </ul>
                </div>
                <Link
                    className="btn btn-ghost normal-case text-xl"
                    to="/" >Car Parts Manufacturer
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <ActiveLink to='/home'>
                            Home
                        </ActiveLink>
                    </li>
                    <li tabIndex="0">
                        <ActiveLink to='/blog'>
                            Blog
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to='/login'>
                            Login
                        </ActiveLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/signup' className='btn btn-sm mr-2 hidden md:flex'>Sign Up</Link>
                <Link to='login' className='btn btn-sm'>Login</Link>
            </div>
        </div>
    );
};

export default Header;