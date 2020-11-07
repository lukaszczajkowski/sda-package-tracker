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

    function transformDate(array) {
        const day = JSON.stringify(array[0]);
        const hour = JSON.stringify(array[1]);

        const dayTrimmed = day.substring(3, day.length - 1);
        const hourTrimmed = hour.substring(1, hour.length - 4);

        return dayTrimmed + ' at ' + hourTrimmed;
    }
    const dateArray = JSON.stringify(eta).split('T')
    const date = transformDate(dateArray);
    return (
        <article className = "card">
            <p>Package id:</p>
            {id}
            <p>User name:</p>
            {user_name}
            <p>Estimated time of arrival:</p>
            {date}
        </article>
    );
}