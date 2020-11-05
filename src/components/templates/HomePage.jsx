import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import NameForm from './NameForm';
import PackageIdForm from './PackageIdForm';

export default function HomePage () { 
    
    return (
        <div className = "home-page">

            <h1>Home page</h1>
            <Link to = "/nameform">
                <button className = "option-button">View packages by name</button>
            </Link>
            <Link to = "/packageidform">
                <button className = "option-button">View packages by id</button>
            </Link>
        </div>
    );
}