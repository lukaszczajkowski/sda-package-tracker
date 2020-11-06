import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function PackageIdForm () {
    const [id, setId] = useState("empty");
    
    return(
        <div className="name-form">
            <label className = "label">
            Enter the package number here:
            </label>
                <input placeholder = "12345678"
                    value = {id}
                    onChange = {(event) => setId(event.target.value)}
                />
                <Link className = "option-button" to = {"/package/" + id}>
                    Track the package
                </Link>
        </div>
    );
}