import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import NameForm from './NameForm';
import PackageIdForm from './PackageIdForm';


export default function HomePage() {

    return (
        <div className = "home-page">
            <div>
                <h2 className = "welcome">Welcome to your <br/> Post Tracker!</h2>
            </div>
            <div className = "content">
                Enter your first and last name
                to view your packages
            </div>
            <div className = "form">
                <NameForm/>
            </div>
            
            <div className="content">
            <h2 className = "welcome">Know your package ID?</h2>
            <p>Enter it here to check its status!</p>
                <PackageIdForm/>
            </div>
        </div>
    );
}