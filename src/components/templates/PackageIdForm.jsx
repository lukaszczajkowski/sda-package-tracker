// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

export default function PackageIdForm() {
    function validate(values) {
        let errors = {};
        if (!values.id) {
          errors.id = 'Field required';
        } 
        return errors;
     
    }
    const formik = useFormik({
        initialValues: {
            id: '',
        },
        validate, 
        onChange: values => {
            alert(JSON.stringify(values, null, 2));
        },
        
    });

    return (
        <div className="name-form">
            <div className = "input">
            <input onChange = {formik.handleChange}
            placeholder = '123456'
            name = "id"
            type = "text"
            value = {formik.values.id}
            className = "input-field"
            />
            </div>
            {formik.errors.id ? 
                <div className = "errors">
                    {formik.errors.id}
                </div>
                 : null}
            {formik.values.id === ''?
             <button className = "buttons">Track the package</button>
             :
            <Link className = "buttons" to = {"/package/" + formik.values.id}>
                 Track the package
            </Link>
            } 
        </div>
    );
}

