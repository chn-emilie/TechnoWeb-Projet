import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Link, Outlet } from 'react-router-dom';

//<Nav.Link className="navLink">My Games</Nav.Link>
export default function Navigation() {

    return(
        <div className="main">
        <Navbar className="navigation" variant="dark">
            <Link to="/home" className="navLink">
                <Image className="navLogo" src="https://i.ibb.co/1rwv6N6/logo.png" />
            </Link>
            <Nav className="me-auto">
            <Link to="/home" className="navLink">Home</Link>     
            <Link to="/leaderboard" className="navLink">OMNES Leaderboard</Link>
            </Nav>
        </Navbar>
        <Outlet />
        </div>
    );
    
}
