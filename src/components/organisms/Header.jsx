import React from 'react';
import { Link } from 'react-router-dom';

export default function Header () {
    return (
        <div className = "header">
            <Link className = "home-link" to = "/">
            <button className = "home-button">
                Home
            </button>
            </Link>
            <p className = "right">Post Tracker</p>
        </div>
    )
}