import React from 'react';
import { Link } from "react-router-dom";
import './header.scss'

export const Header = () => {

    return (
        <header>
            <nav className="header">
                <div className="container">
                    <div className="container__left">
                        <div className="container__logo">
                            <Link to="/">IronZen</Link>
                        </div>
                    </div>
                    
                    <div className="container__right">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}