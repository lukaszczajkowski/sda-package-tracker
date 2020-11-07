import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="header">
            <div className = "left">
            <Link to="/">
                <button className = "head-button">
                    Home
                </button>
            </Link>
            </div>
            <div className = "right">
                Post Tracker
            </div>
        </nav>
    )
}