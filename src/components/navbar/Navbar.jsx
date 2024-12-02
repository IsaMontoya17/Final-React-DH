import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className={styles.navbar}>
            <Link to="/"><img src={logo} alt="Logo" className={styles.logo} /></Link>
            <ul>
                <li className={location.pathname === '/' ? styles.active : ''}>
                    <Link to="/">Home</Link>
                </li>
                <li className={location.pathname === '/about' ? styles.active : ''}>
                    <Link to="/about">About</Link>
                </li>
                <li className={location.pathname === '/contact' ? styles.active : ''}>
                    <Link to="/contact">Contact</Link>
                </li>
                <li className={location.pathname === '/favorites' ? styles.active : ''}>
                    <Link to="/favorites">Favorites</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
