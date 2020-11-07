import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik'; 

export default function NameForm () {
    function validate(values) {
        let errors = {};
        if (!values.query) {
          errors.query = 'Field required';
        } 
        return errors;
     
    }

    const formik = useFormik({
        initialValues: {
            query: '',
        },
        validate, 
        onChange: values => {
            alert(JSON.stringify(values, null, 2));
        },
        
    });

    return(
        <div className="name-form">
            <div className = "input">
            <input onChange = {formik.handleChange}
            placeholder = 'John Smith'
            name = "query"
            type = "text"
            value = {formik.values.query}
            className = "input-field"
            />
            </div>
            {formik.errors.query ? 
                <div className = "errors">
                    {formik.errors.query}
                </div>
            : null}
            <div className = "sumbition">
            {formik.values.query === ''?
             <button className = "buttons">Go to my packages</button>
             :
            <Link className = "buttons" to = {"/mypackages/"+formik.values.query}>
                Go to my packages
            </Link>
            }
            </div>
        </div>
    );
}