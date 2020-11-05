import React from 'react';
import { useForm } from 'react-hook-form';

export default function PackageIdForm () {
    const {register, handleSubmit} = useForm();
    const onSubmit = packageNr => console.log(packageNr);
    return(
        <div className="name-form">
            <form className = "form" onSubmit={handleSubmit(onSubmit)}>
                <label className = "label">Parcel number:</label>
                <input ref = {register} name="parcelNumber"/>
                <button className = "submit-button">Track package</button>
            </form>
        </div>
    );
}