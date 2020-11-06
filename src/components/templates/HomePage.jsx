import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import NameForm from './NameForm';
import PackageIdForm from './PackageIdForm';


export default function HomePage() {

    return (
        <div className="home-page">
            <div className="welcome">
                <p>Welcome to your post tracker!</p>
            </div>
            <div className="row">
                <p>Enter your first and last name</p>
                <p>to view your packages</p>
                <NameForm/>
            </div>
            <div className="row">
            <p>Know your package ID?</p>
            <p>Enter it here to check its status!</p>
                <PackageIdForm/>
            </div>
        </div>
    );
}