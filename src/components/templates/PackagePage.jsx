import React from 'react';
import Card from '../molecules/Card';

export default function PackagePage({match, data}) {
    const id = match.params.id;

    const result = data.filter((item) => {
        if(item.id == id){
            return item;
        }
    });

    const parcel = result.map((item) => {
        return <Card key = {item.id} data = {item}/>
    });

    const display = parcel.length === 0 ? "No packages found" : parcel;

    return (
        <div className = "package-page">
            {display}
        </div>
    );
}