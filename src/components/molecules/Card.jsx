import React from 'react';

export default function Card({data}) {

    const {
        id,
        status,
        eta,
        parcel_id,
        sender,
        verification_required,
        location_id,
        location_name,
        location_coordinate_latitude,
        location_coordinate_longitude,
        location_status_ok,
        user_phone,
        user_name,
        notes,
        last_updated
    } = data;

    return (
        <article className = "card">
            <p>Package id: {id}</p>
            <p>User name: {user_name}</p>
            <p>Estimated time of arrival: {eta}</p>
        </article>
    );
}