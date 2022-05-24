import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import ActiveLink from './ActiveLink';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const navItems = <>
        <li>
            <ActiveLink className='font-semibold btn-sm mr-2 text-[18px]' to='/home'>
                Home
            </ActiveLink>
        </li>
        <li tabIndex="0">
            <ActiveLink className='font-semibold btn-sm mr-2 text-[18px]' to='/blog'>
                Blog
            </ActiveLink>
        </li>
        <li>
            <ActiveLink className='font-semibold btn-sm mr-2 text-[18px]' to='/dashboard'>
                Dashboard
            </ActiveLink>
        </li>

        <li className='ml-3 font-bold md:hidden block'>Hi, {user?.displayName}</li>
    </>;

    return (
        <div className='sticky top-0' >
            <div className="navbar bg-slate-100 shadow-md md:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link
                        className="btn btn-ghost px-0 md:px-4 normal-case text-xl"
                        to="/" >Car Parts Manufacturer
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <h1 className='md:block hidden'>Hi, {user?.displayName}</h1>
                            <button onClick={() => signOut(auth)} className='btn btn-sm ml-2 text-white'>Sign Out</button>
                        </> :
                            <>
                                <Link to='/signup' className='btn btn-sm text-white mr-2 hidden md:flex'>Sign Up</Link>
                                <Link to='login' className='btn btn-sm text-white'>Login</Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;