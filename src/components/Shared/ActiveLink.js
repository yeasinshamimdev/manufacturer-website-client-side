import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const ActiveLink = ({ children, to, ...props }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link className='px-4 py-1 mr-2'
            style={{
                color: match ? "white" : "",
                backgroundColor: match ? "black" : ""
            }}
            to={to}
            {...props}>
            {children}
        </Link>
    );
};

export default ActiveLink;