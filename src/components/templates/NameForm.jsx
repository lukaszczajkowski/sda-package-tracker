import React, {useState} from 'react';
import { Link } from 'react-router-dom'; 

export default function NameForm () {
    const [query, setQuery] = useState("");

    return(
        <div className="name-form">
            <input placeholder = "John Smith"
            value = {query}
            onChange = {(event) => setQuery(event.target.value)}
            />
            <Link className = "button" to = {"/mypackages/"+query}>Go to my packages</Link>
        </div>
    );
}